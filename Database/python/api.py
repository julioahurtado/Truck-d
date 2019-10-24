#!/usr/bin/python3

import mysql.connector
from flask import Flask

app = Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "home() function call."


def create_vendor_user(restuarant, location, email, password, cuisine):
    connection = connect_to_db()
    dbCursor = connection.dbCursor()
    customerID = random() # Random number for customerID
    sql = ("""INSERT INTO Vendors"
           VALUES (%d, %s, %s, %s, %s, %s)""")

    data = (customerID, restuarant, location, email, password, cuisine)
    try:
        dbCursor.execute(sql, data)
        connection.commit()
    except Exception as e:
        connection.rollback()
        print(e)
    finally:
        dbCursor.close()
        connection.disconnect_from_db()

def connect_to_db()
    try:
        connection = mysql.connector.connect(
            user = "admin", password = "truckdpassword",
            host = "truckd.cy00g7ft3yfp.us-east-1.rds.amazonaws.com",
            database = "Truckd", port = "3306"
        )
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
                print("Username or password incorrect.\n")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist\n")
        else:
            print(err)
        return None
    return connection

def disconnect_from_db(connection):
    try:
        connection.close()
        return 1
    except:
        print("Disconnect Failure")
        return -1


# An example of what a api that would connect to a database looks like.
"""
@app.route('/[example-route], methods=['GET'])
def api_connect_to_db():
    make_connection(user, pw, host, db)

def insert_into_table(data):
    make_connection(w,x,y,z)
    do_the_thing()

"""
