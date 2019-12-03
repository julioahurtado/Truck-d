#!/usr/bin/python3
# pip3 install mysql-connector-python
import mysql.connector
from mysql.connector import errorcode
from flask import Flask, request, Response, json, jsonify
from flask_cors import CORS, cross_origin
import random

# TODO: use sha256 hashing for database passwords

app = Flask(__name__)
app.config["DEBUG"] = True

# When a vendor creates an account their data is added to the Database
@app.route("/createVendorAccount",  methods=['GET', 'POST'])
@cross_origin()
def vendor_create_user():
    # Get all sent info from a json format
    payload = request.get_json(force=True)
    restaurant = payload['name']
    description = payload['description']
    cuisine = payload['cuisine']
    open_hour = payload['open']
    close_hour = payload['close']
    phone_number = payload['phone']
    address = payload['address']
    city = payload['city']
    state = payload['state']
    email = payload['email']
    password = payload['password']

    if email == "" or email == " ":
        return Response('That is not a valid email address!', 500)
    if check_vendor_email(email):
        response = Response('That email is already registered!', 500)
        return response

    # IDs will be in range 1000 - 10000
    vendorID = random.randint(1000,9999)
    while check_vendor_id(vendorID):
        vendorID = random.randint(1000, 9999)

    sql = ("""INSERT INTO Vendors
              VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);""")
    data = (vendorID, restaurant, email, city, state, address,
            description, open_hour, close_hour, phone_number, cuisine, password)

    # Execute the insert SQL statement and commit it
    try:
        connection = connect_to_db()
        dbCursor = connection.cursor()
        dbCursor.execute(sql, data)
        connection.commit()

        # We want to verify that the information was sent to the
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

    except Exception as error:
        connection.rollback()
        dbCursor.close()
        disconnect_from_db(connection)
        return Response(str(error), 500)

    # Return the verfied info in a json format to display later
    vendorInfo = {
        "id": results[0], "name": results[1], "description": results[2],
        "cuisine": results[3],
        "hours": {
            "open": results[4],
            "close": results[5],
        },
        "phone": results[6], "address": results[7], "city": results[8],
        "state": results[9]
    }
    return jsonify(vendorInfo)

# Sign in to a vendor profile.
# Returns the vendor information if successful or an error if not
@app.route("/login", methods=['GET', 'POST'])
@cross_origin()
def vendor_login():
    payload = request.get_json(force=True)
    email = payload['email']
    password = payload['password']
    sql = ("""SELECT vendorID, restaurant_name, description, cuisine,
           open_hour, close_hour, phone_number, address, city, state
           FROM Vendors
           WHERE email = %s
           AND pswd = %s;""")
    data = (email, password)
    connection = connect_to_db()
    dbCursor = connection.cursor()

    try:
        # Query with the email and password

        dbCursor.execute(sql, data)
        results = dbCursor.fetchone()
        dbCursor.close()
        disconnect_from_db(connection)

        # If the query is empty return error 500
        if results == None:
            dbCursor.close()
            disconnect_from_db(connection)
            return Response("Incorrect email or password", 500)

        else:
            dbCursor.close()
            disconnect_from_db(connection)

            # Return the verfied info in a json format to display later
            vendorInfo = {
                "id": results[0],
                "name": results[1],
                "description": results[2],
                "cuisine": results[3],
                "hours": {
                    "open": results[4],
                    "close": results[5],
                },
                "phone": results[6],
                "address": results[7],
                "city": results[8],
                "state": results[9]
            }
            return jsonify(vendorInfo)

    except Exception as error:
        dbCursor.close()
        disconnect_from_db(connection)
        return response(str(error), 500)

    dbCursor.close()
    disconnect_from_db(connection)
    return Response("Incorrect email or password", 500)

# Edit the vendor profile info
@app.route("/editProfile", methods=['GET', 'POST'])
@cross_origin()
def vendor_edit_profile():
    payload = request.get_json(force=True)
    vendorID = payload['id']
    restaurant = payload['name']
    description = payload['description']
    cuisine = payload['cuisine']
    open_hour = payload['hours']['open']
    close_hour = payload['hours']['close']
    phone_number = payload['phone']
    address = payload['address']
    city = payload['city']
    state = payload['state']

    sql = """UPDATE Vendors
                SET restaurant_name = %s, description = %s, cuisine = %s,
                open_hour = %s, close_hour = %s, phone_number = %s,
                address = %s, city = %s, state = %s
                WHERE vendorID = %s;"""
    data = (restaurant, description, cuisine, open_hour, close_hour,
                phone_number, address, city, state, vendorID)

    try:
        connection = connect_to_db()
        dbCursor = connection.cursor()
        dbCursor.execute(sql, data)
        result = dbCursor.rowcount
        if result == 0:
            dbCursor.close()
            disconnect_from_db(connection)
            return Response("No Account Found", 500)
        connection.commit()

    except Exception as error:
        connection.rollback()
        dbCursor.close()
        disconnect_from_db(connection)
        return Response(str(error), 500)

    dbCursor.close()
    disconnect_from_db(connection)
    return Response("Successfully updated.", 200)


# Searches for the given restuarant, address, city or state
@app.route("/search", methods = ['GET', 'POST'])
@cross_origin()
def vendor_search():
    payload = request.get_json(force=True)
    restaurant = payload['name']
    address = payload['address']
    city = payload['city']
    state = payload['state']
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
            WHERE state LIKE %s;"""

    try:
        connection = connect_to_db()
        dbCursor = connection.cursor()

        restaurant = ('%' + restaurant + '%')
        address = ('%' + address + '%')
        city = ('%' + city + '%')
        state = ('%' + state + '%')
        data = (restaurant, address, city, state)

        dbCursor.execute(sql, data)
        results = dbCursor.fetchall()

    except Exception as e:
        dbCursor.close()
        disconnect_from_db(connection)
        return Response(str(error), 500)

    vendors = []
    for index in range(len(results)):
        vendors.append({
               "id": results[index][0],
               "name": results[index][1],
               "description": results[index][2],
               "cuisine": results[index][3],
               "hours": {
                   "open": results[index][4],
                   "close": results[index][5],
               },
               "phone": results[index][6],
               "address": results[index][7],
               "city": results[index][8],
               "state": results[index][9]
           })
    return jsonify(vendors)

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

    # Assign a random ID and if that ID is already used create a new one
    menuItemID = random.randint(10000,19999)
    while check_menu_id(menuItemID):
        menuItemID = random.randint(10000, 19999)

    sql = """INSERT INTO Menus
            VALUES (%s, %s, %s, %s, %s);"""
    data = (vendorID, menuItemID, name, price, description)

    try:
        # Attempt to insert the menu item
        connection = connect_to_db()
        dbCursor = connection.cursor()
        dbCursor.execute(sql, data)
        connection.commit()

    except Exception as error:
        # Rollback incase of failure and return an error response
        connection.rollback()
        dbCursor.close()
        disconnect_from_db(connection)
        return Response(str(error), 500)

    # finally close connection and return Response
    dbCursor.close()
    disconnect_from_db(connection)
    return Response(str(menuItemID), 201)

@app.route("/editItem", methods = ['GET', 'POST'])
@cross_origin()
def vendor_edit_menu_item():
    payload = request.get_json(force=True)
    menuItemID = payload['id']
    name = payload['name']
    price = payload['price']
    description = payload['description']

    sql = """UPDATE Menus
                SET name = %s, price = %s, description = %s
                WHERE menuItemID = %s;"""
    data = (name, price, description, menuItemID)

    try:
        connection = connect_to_db()
        dbCursor = connection.cursor()
        dbCursor.execute(sql, data)
        result = dbCursor.rowcount

        if result == 0:
            dbCursor.close()
            disconnect_from_db(connection)
            return Response("No Menu Item Found", 500)
        connection.commit()

    except Exception as e:
        connection.rollback()
        dbCursor.close()
        disconnect_from_db(connection)
        return Response(str(e), 500) # Cant remember the correct error code
    finally:
        dbCursor.close()
        disconnect_from_db(connection)

    return Response("Successfully updated.", 201)

@app.route("/deleteItem", methods = ['GET', 'POST'])
@cross_origin()
def vendor_delete_menu_item():
    payload = request.get_json(force=True)
    menuItemID = payload['id']

    menuDeleteSql = """DELETE FROM Menus
                WHERE menuItemID = %s;"""

    getOrdersSQL = """SELECT orderID
                            FROM OrderItems
                            WHERE menuItemID = %s;"""

    deleteOrdersSql = """ DELETE FROM Orders
                            WHERE orderID = %s;"""

    orderItemDeleteSql = """DELETE FROM OrderItems
                            WHERE menuItemID = %s;"""
    data = (menuItemID,)

    try:
        connection = connect_to_db()
        dbCursor = connection.cursor()
        dbCursor.execute(menuDeleteSql, data)
        result = dbCursor.rowcount

        if result == 0:
            return Response("No Menu Item Found", 500)

        dbCursor.execute(getOrdersSQL, data)
        results = dbCursor.fetchall()
        print(results)
        dbCursor.execute(orderItemDeleteSql, data)
        for id in results:
            data = (id[0],)
            dbCursor.execute(deleteOrdersSql, data)
        connection.commit()

    except Exception as e:
        connection.rollback()
        dbCursor.close()
        disconnect_from_db(connection)
        return Response(str(e), 500) # Cant remember the correct error code

    dbCursor.close()
    disconnect_from_db(connection)
    return Response("Successfully deleted.", 201)


# Returns the menu of the given vendorID in JSON format
@app.route('/menu', methods = ['GET', 'POST'])
@cross_origin()
def vendor_get_menu():
    connection = connect_to_db()
    dbCursor = connection.cursor()
    payload = request.get_json(force=True)
    id = payload['id']

    sql = ("""SELECT * FROM Menus
                WHERE vendorID = %s;""")
    data = (id,)

    dbCursor.execute(sql, data)
    results = dbCursor.fetchall()
    if len(results) == 0:
        return Response("No Menu Found", 500)

    menu = []
    for i in range(len(results)):
        menu.append({
               "id": results[i][1],
               "name": results[i][2],
               "price": float(results[i][3]),
               "description": results[i][4]
           })

    dbCursor.close()
    disconnect_from_db(connection)
    return jsonify(menu)

@app.route('/addOrder', methods = ['GET', 'POST'])
@cross_origin()
def vendor_add_order():
    payload = request.get_json(force=True)
    vendorID = payload['id']
    name = payload['customer']['name']
    email = payload['customer']['email']
    phone = payload['customer']['phone']
    price = payload['price']
    menuList = payload['items']

    # Assign random orderID and if it already exists, get a new one
    orderID = random.randint(100000,999999)
    while check_order_id(vendorID):
        orderID = random.randint(100000,999999)

    sql = """INSERT INTO Orders
                VALUES(%s, %s, %s, %s, %s, %s);"""
    data = (orderID, vendorID, price, name, email, phone)

    try:
        connection = connect_to_db()
        dbCursor = connection.cursor()
        dbCursor.execute(sql, data)

        sql = """INSERT INTO OrderItems
                    VALUES(%s, %s, %s);"""
        for menuItem in menuList:
            itemID = menuItem["id"]
            quantity = menuItem["quantity"]
            data = (orderID, itemID, quantity)
            dbCursor.execute(sql, data)
            connection.commit()

    except Exception as e:
        connection.rollback()
        dbCursor.close()
        disconnect_from_db(connection)
        return Response("Error adding order: " + str(e), 500)

    dbCursor.close()
    disconnect_from_db(connection)
    return Response(str(orderID), 200)

# Get list of orders from vendor ID
@app.route('/getOrder', methods = ['GET', 'POST'])
@cross_origin()
def vendor_get_order():
    payload = request.get_json(force=True)
    vendorID = payload['id']
    orders = []


    sql = """SELECT orderID, price, customer_name, customer_email, customer_phone
            FROM Orders
            WHERE vendorID = %s;"""
    data = (vendorID,)

    connection = connect_to_db()
    dbCursor = connection.cursor()
    dbCursor.execute(sql, data)

    listOfOrderIDs = dbCursor.fetchall()
    if len(listOfOrderIDs) == 0 or listOfOrderIDs == None:
        return Response("No Orders Found", 500)

    sql = """SELECT menuItemID, quantity FROM OrderItems
            WHERE orderID = %s;"""

    for orderID, price, name, email, phone in listOfOrderIDs:
        items = []
        data = (orderID,)
        customerInfo = {
            "name": name,
            "email": email,
            "phone": int(phone)
        }

        dbCursor.execute(sql, data)

        # List of all menu items with an order ID
        orderItemQuery = dbCursor.fetchall()
        for id, quantity in orderItemQuery:
            menuItem = get_menu_item(id)
            menuItem["price"] = float(menuItem["price"])
            menuItem["quantity"] = quantity
            items.append(menuItem)

        orders.append({
            "id": orderID,
            "customer": customerInfo,
            "items": items,
            "price": float(price)
        })
    dbCursor.close()
    disconnect_from_db(connection)
    return jsonify(orders)

# Removes the order from the Orders table and the OrderItems table
@app.route('/removeOrder', methods = ['GET', 'POST'])
@cross_origin()
def order_remove():
    payload = request.get_json(force=True)
    orderID = payload['id']

    deleteFromOrdersSQL = """DELETE FROM Orders
                            WHERE orderID = %s;"""

    deleteFromOrderItemsSQL = """DELETE FROM OrderItems
                                WHERE orderID = %s;"""
    data = (orderID,)

    try:
        connection = connect_to_db()
        dbCursor = connection.cursor()
        dbCursor.execute(deleteFromOrdersSQL, data)
        orderDeleteCount = dbCursor.rowcount

        if orderDeleteCount == 0:
            dbCursor.close()
            disconnect_from_db(connection)
            return Response("Order Not Found", 500)

        dbCursor.execute(deleteFromOrderItemsSQL, data)

    except:
        connection.rollback()
        dbCursor.close()
        disconnect_from_db(connection)
        return Response("Error Deleting Order", 500)

    connection.commit()
    dbCursor.close()
    disconnect_from_db(connection)
    return Response("Successfully deleted Order", 200)


# --------- Helper Functions --------- #
#--------------------------------------#

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

def check_order_id(id):
    connection = connect_to_db()
    dbCursor = connection.cursor()
    sql = ("""SELECT orderID FROM Orders
                WHERE orderID = %s;""")
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
    sql = ("""SELECT menuItemID FROM Menus
                WHERE menuItemID = %s;""")
    data = (id,)

    dbCursor.execute(sql, data)
    results = dbCursor.fetchall()
    if dbCursor.rowcount > 0:
        dbCursor.close()
        disconnect_from_db(connection)
        return True

    dbCursor.close()
    disconnect_from_db(connection)
    return False


# Returns a json of the given menuItemID
def get_menu_item(id):
    connection = connect_to_db()
    dbCursor = connection.cursor()
    sql = ("""SELECT menuItemID, name, price, description FROM Menus
                WHERE menuItemID = %s;""")
    data = (id,)
    dbCursor.execute(sql, data)

    item = dbCursor.fetchone()
    dbCursor.close()
    disconnect_from_db(connection)
    return {
        "id": item[0],
        "name": item[1],
        "price": item[2],
        "description": item[3]
    }


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


# --------- Connection Functions --------- #
#------------------------------------------#

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

def api_create_app():
    newApp = Flask(__name__)
    newApp.config['TESTING'] = True
    newApp.testing = True
    return newApp

if __name__ == '__main__':
    app.run(debug=True)
