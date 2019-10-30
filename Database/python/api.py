#!/usr/bin/python3

# pip3 install mysql-connector-python
import mysql.connector
from mysql.connector import errorcode
from flask import Flask, request
#from flask_cors import CORS, cross_origin
import random

app = Flask(__name__)
app.config["DEBUG"] = True

# TODO: use sha256 hashing for database passwords
# When a vendor creates an account their data is added to the Database
@app.route('/register/', methods = ['GET', 'POST'])
def create_vendor_user(restuarant, location, email, password, cuisine):

    try:
        if check_vendor_email(email):
            return "That email is already registered!"

        # IDs will be in range 1000 - 10000
        vendorID = random.randint(1000,9999)

        # If the these IDs are already in the DB we need to create a new one
        while check_vendor_id(vendorID):
            vendorID = random.randint(1000, 9999)

        connection = connect_to_db()
        dbCursor = connection.cursor()
        sql = ("""INSERT INTO Vendors
               VALUES (%s, %s, %s, %s, %s, %s);""")
        data = (vendorID, restuarant, location, email, password, cuisine)

        # Try to execute the sql statement and commit it
        try:
            dbCursor.execute(sql, data)
            connection.commit()
        # If Failure to insert then it rollsback and throws an error
        except:
            connection.rollback()
        # Close the cursor and the databse connection
        finally:
            dbCursor.close()
            disconnect_from_db(connection)

    except Exception as e:
        return e
    # Success
    return "Welcome to Truck-d!"


# Returns the menu of the given vendorID in JSON format
@app.route('/menu/<string:vendorID>', methods = ['GET'])
def get_vendor_menu(id):
    connection = connect_to_db()
    dbCursor = connection.cursor()

    sql = ("""SELECT * FROM Menus JOIN Vendors
                ON Menus.vendorID = Vendors.vendorID =
                WHERE menuID = %s;
                FOR JSON AUTO""")
    data = (id,)

    dbCursor.execute(sql, data)
    results = dbCursor.fetchall()
    dbCursor.close()
    disconnect_from_db(connection)

    return results



# queries database with email and login and if email and passowrd match the
# return true
#def vendor_login(email, password)
#   Essentially the same as create_vendor but with a query instead of an insert

# Check to make sure ID is not already in database
# return 1 if ID IS in database
# 0 otherwise
def check_vendor_id(id):
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

# Check to make sure ID is not already in database
# return 1 if ID IS in database
# 0 otherwise
def check_menu_id(id):
    connection = connect_to_db()
    dbCursor = connection.cursor()
    sql = ("""SELECT menuID FROM Vendors
                WHERE menuID = %s;""")
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
def check_vendor_email(email):
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

if __name__ == '__main__':
    #app.run(debug=True)
    main()
