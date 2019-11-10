#!/usr/bin/python3

# pip3 install mysql-connector-python
import mysql.connector
from mysql.connector import errorcode
from flask import Flask, request, Response, json, jsonify
from flask_cors import CORS, cross_origin
import random

app = Flask(__name__)
app.config["DEBUG"] = True

# TODO: use sha256 hashing for database passwords
# When a vendor creates an account their data is added to the Database
@app.route("/createVendorAccount",  methods=['GET', 'POST'])
@cross_origin()
def vendor_create_user():
    # Get all sent info from a json format
    payload = request.get_json(force=True)
    restaurant = payload['name']
    description = payload['description']
    cuisine = payload['cuisine']
    open_hour = payload['hours']['open']
    close_hour = payload['hours']['closed']
    phone_number = payload['phone']
    address = payload['address']
    city = payload['city']
    state = payload['state']
    email = payload['email']
    password = payload['password']

    try:
        if vendor_check_email(email):
            response = Response('That email is already registered!', 409)
            return response

        # IDs will be in range 1000 - 10000
        vendorID = random.randint(1000,9999)

        # If the these IDs are already in the DB we need to create a new one
        while vendor_check_id(vendorID):
            vendorID = random.randint(1000, 9999)

        connection = connect_to_db()
        dbCursor = connection.cursor()
        sql = ("""INSERT INTO Vendors
               VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);""")
        data = (vendorID, restaurant_name, email, city, state, address,
                description, open_hour, close_hour, phone_number, cuisine, password)
        # Try to execute the sql statement and commit it
        try:
            dbCursor.execute(sql, data)
            connection.commit()
        # If Failure to insert then it rollsback and throws an error
        except:
            connection.rollback()
        # Close the cursor and the databse connection
        finally:
            sql = ("""SELECT vendorID, restaurant_name, description, cuisine,
                   open_hour, close_hour, phone_number, address, city, state
                   FROM Vendors
                   WHERE email = %s
                   AND pswd = %s;""")
            data = (email, password)
            dbCursor.execute(sql, data)
            vendorInfo = dbCursor.fetchone()
            dbCursor.close()
            disconnect_from_db(connection)

    except Exception as e:
        return Response('Server ERROR in api.create_vendor_user', 500)
    # Success and sends logged_in message
    return jsonify(vendorInfo)

# Sign in to a vendor profile.
# will send a verificaiton signal
@app.route("/login", methods=['GET', 'POST'])
@cross_origin()
def vendor_login():
    payload = request.get_json(force=True)
    email = payload['email']
    password = payload['password']

    try:
        # Query the email and password
        connection = connect_to_db()
        dbCursor = connection.cursor()
        sql = ("""SELECT vendorID, restaurant_name, description, cuisine,
               open_hour, close_hour, phone_number, address, city, state
               FROM Vendors
               WHERE email = %s
               AND pswd = %s;""")
        data = (email, password)

        dbCursor.execute(sql, data)
        results = dbCursor.fetchone()
        dbCursor.close()
        disconnect_from_db(connection)
        # If the query is empty return error 500
        # otherwise we are successful and return 202
        if results == None:
            dbCursor.close()
            disconnect_from_db(connection)
            return Response("Incorrect email or password", 500)
        else:
            dbCursor.close()
            disconnect_from_db(connection)
            return jsonify(results)

    except:
        dbCursor.close()
        disconnect_from_db(connection)

    dbCursor.close()
    disconnect_from_db(connection)
    return Response("Incorrect email or password", 500)

@app.route("/editProfile", methods=['GET', 'POST'])
@cross_origin()
def vendor_edit_profile():
    payload = request.get_json(force=True)
    vendorID = payload['id']
    restaurant = payload['name']
    description = payload['description']
    cuisine = payload['cuisine']
    open_hour = payload['hours']['open']
    close_hour = payload['hours']['closed']
    phone_number = payload['phone']
    address = payload['address']
    city = payload['city']
    state = payload['state']

    connection = connect_to_db()
    dbCursor = connection.cursor()

    sql = """ UPDATE Vendors
                    SET restaurant_name = %s, description = %s, cuisine = %s,
                    open_hour = %s, close_hour = %s, phone_number = %s,
                    address = %s, city = %s, state = %s
                    WHERE vendorID = %s;"""
    data = (restaurant_name, description, cuisine, open_hour, close_hour,
                phone_number, address, city, state, vendorID)

    try:
        dbCursor.execute(sql, data)
        dbCursor.commit()
    except Exception as e:
        dbCursor.rollback()
        return Response(e, 500) # Cant remember the correct error code
    finally:
        dbCursor.close()
        disconnect_from_db(connection)



# Searches for the given restuarant
@app.route("/search", methods = ['GET', 'POST'])
@cross_origin()
def vendor_search():
    payload = request.get_json(force=True)
    restuarant = payload['name']
    address = payload['address']
    city = payload['city']
    state = payload['state']

    connection = connect_to_db()
    dbCursor = connection.cursor()
    try:
        sql = """SELECT vendorID, restaurant_name, description, cuisine,
                        open_hour, close_hour, phone_number, address, city, state
                FROM Vendors
                WHERE restaurant_name LIKE %s
                UNION

                SELECT vendorID, restaurant_name, description, cuisine,
                        open_hour, close_hour, phone_number, address, city, state
                FROM Vendors
                WHERE address LIKE %s
                UNION

                SELECT vendorID, restaurant_name, description, cuisine,
                        open_hour, close_hour, phone_number, address, city, state
                FROM Vendors
                WHERE city LIKE %s
                UNION

                SELECT vendorID, restaurant_name, description, cuisine,
                        open_hour, close_hour, phone_number, address, city, state
                FROM Vendors
                WHERE state LIKE %s
                ORDER BY city;"""

        restuarant = ('%' + restaurant + '%')
        address = ('%' + address + '%')
        city = ('%' + city + '%')
        state = ('%' + state + '%')
        data = (restuarant, address, city, state)

        dbCursor.execute(sql, data)
        results = dbCursor.fetchall()
        dbCursor.close()
        disconnect_from_db(connection)

        return jsonify(results)

    except Exception as e:
        return Response('Server ERROR in api.vendor_search', 500)

    finally:
        dbCursor.close()
        disconnect_from_db(connection)

# Adds a menu item to the vendors list of food items
@app.route("/addItem", methods = ['GET', 'POST'])
@cross_origin()
def vendor_add_menu_item():
    # Fetch all item fields from JSON POST request
    payload = request.get_json(force=True)
    vendorID = payload['id']
    name = payload['name']
    price = payload['price']
    description = payload['description']

    sql = """INSERT INTO Menus
            VALUES (%s, %s, %s, %s);"""
    data = (vendorID, name, price, description)

    try:
        # Attempt to insert the menu item
        connection = connect_to_db()
        dbCursor = connection.cursor()
        dbCursor.execute(sql, data)
        dbCursor.commit()
    except:
        # Rollback incase of failure and return an error response
        connection.rollback()
        return Response('Server ERROR in api.vendor_add_menu_item', 500)

    # finally close connection and return results as a json object
    dbCursor.close()
    disconnect_from_db(connection)
    return Response("Successfully added item", 201)

# Returns the menu of the given vendorID in JSON format
@app.route('/menu', methods = ['GET'])
@cross_origin()
def vendor_get_menu():
    payload = request.get_json(force=True)
    vendorID = payload['id']

    connection = connect_to_db()
    dbCursor = connection.cursor()

    sql = ("""SELECT * FROM Menus
                WHERE vendorID = %s;""")
    data = (vendorID,)

    try:
        dbCursor.execute(sql, data)
        results = dbCursor.fetchall()
    except:
        return Response('Server ERROR in api.vendor_add_menu_item', 500)
    dbCursor.close()
    disconnect_from_db(connection)

    return jsonify(results)

# Check to make sure ID is not already in database
# return 1 if ID IS in database
# 0 otherwise
def vendor_check_id(id):
    connection = connect_to_db()
    dbCursor = connection.cursor()
    sql = ("""SELECT vendorID FROM Vendors
                WHERE vendorID = %s;""")
    data = (id,)

    dbCursor.execute(sql, data)
    results = dbCursor.fetchall()
    if dbCursor.rowcount > 0:
        dbCursor.close()
        return True

    dbCursor.close()
    disconnect_from_db(connection)
    return False

# Check to make sure email is not already in database
# return 1 if email IS in database
# 0 otherwise
def vendor_check_email(email):
    connection = connect_to_db()
    dbCursor = connection.cursor()
    sql = ("""SELECT email FROM Vendors
                WHERE email = %s;""")
    data = (email,)

    dbCursor.execute(sql, data)
    results = dbCursor.fetchall()
    if dbCursor.rowcount > 0:
        dbCursor.close()
        return True

    dbCursor.close()
    disconnect_from_db(connection)
    return False

# --------- Connection Methods --------- #
# Used to connect to the database to perform queries
def connect_to_db():
    # Attempt to connect
    try:
        connection = mysql.connector.connect(
            user = "admin", password = "truckdpassword",
            host = "truckd.ckfuvt7nenwp.us-east-1.rds.amazonaws.com",
            database = "Truckd", port = "3306")
    # Connection failed - Error Handling
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
                print("Username or password incorrect.\n")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist\n")
        else:
            print(err)
        return None

    return connection

# Closes given connection
def disconnect_from_db(connection):
    try:
        connection.close()
        return 1
    except:
        print("Disconnect Failure")
        return -1


# This main is used for testing purposes, if you need to test the create_vendor_user
# function, then change these values
def main():
    print(create_vendor_user('Los Pericos', 'Santa Cruz, CA', 'eeeemial@ucsc.edu', 'pass', 'Mexican'))
    #app.run()

if __name__ == '__main__':
    app.run(debug=True)
    #main()
