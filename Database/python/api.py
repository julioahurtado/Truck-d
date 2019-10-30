#!/usr/bin/python3

# pip3 install mysql-connector-python
import mysql.connector
from mysql.connector import errorcode
from flask import Flask

app = Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "home() function call."

# When a vendor creates an account their data is added to the Database
def create_vendor_user(restuarant, location, email, password, cuisine):
    customerID = 12345
    connection = connect_to_db()
    dbCursor = connection.cursor()
    #customerID = random() # Random number for customerID
    sql = ("""INSERT INTO Vendors
           VALUES (%s, %s, %s, %s, %s, %s);""")

    data = (customerID, restuarant, location, email, password, cuisine)

    # Try to execute the sql statement and commit it
    try:
        dbCursor.execute(sql, data)
        connection.commit()
    # If Failure to insert then it rollsback and throws an error
    except Exception as e:
        connection.rollback()
        print(e)
    # Close the cursor and the databse connection
    finally:
        dbCursor.close()
        disconnect_from_db(connection)


# Used to connect to the database to perform queries
def connect_to_db():
    try:
        connection = mysql.connector.connect(
            user = "admin", password = "truckdpassword",
            host = "truckd.cy00g7ft3yfp.us-east-1.rds.amazonaws.com",
            database = "Truckd", port = "3306")

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


# An example of what a api that would connect to a database looks like.
"""
@app.route('/[example-route], methods=['GET'])
def api_connect_to_db():
    make_connection(user, pw, host, db)

def insert_into_table(data):
    make_connection(w,x,y,z)
    do_the_thing()

"""
def main():
    # create_vendor_user('Los Pericos', 'Santa Cruz, CA', 'losper@ucsc.edu', 'pass', 'Mexican')
    app.run()

if __name__ == '__main__':
    main()
