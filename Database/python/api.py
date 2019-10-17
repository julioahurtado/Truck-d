#!/usr/bin/python3

import mysql.connector
from flask import Flask

app = Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "home() function call."

# An example of what a api that would connect to a database looks like.
"""
@app.route('/[example-route], methods=['GET'])
def api_connect_to_db():
    make_connection(user, pw, host, db)

def insert_into_table(data):
    make_connection(w,x,y,z)
    do_the_thing()

"""

