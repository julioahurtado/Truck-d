from api import api_create_app, app
import pytest
from flask import Flask, request, Response, json, jsonify

@pytest.fixture
def client():
    #app = api_create_app()
    app.TESTING = True
    with app.test_client() as client:
        return client

def json_of_response(response):
    """Decode json from response"""
    return json.loads(response.data.decode('utf8'))


def test_create_account(client):
    """
    GIVEN a Flask application
    WHEN the '/' page is requested (GET)
    THEN check the response is valid
    """
    response = client.post('/createVendorAccount',
                                json={
                                    "name": "In n Out Burger",
                                    "description": "Burger Joint",
                                    "cuisine": "American",
                                    "open": "1000",
                                    "close": "2400",
                                    "phone": "123456789",
                                    "address": "100 Street",
                                    "city": "Santa Cruz",
                                    "state": "California",
                                    "password": "password1",
                                    "email": "burger@gmail.com"
                                })

    assert response.status_code == 200

def test_invalid_create_account(client):
    response = client.post('/createVendorAccount',
                                json={
                                    "name": "Bad account",
                                    "description": "",
                                    "cuisine": "",
                                    "open": "",
                                    "close": "",
                                    "phone": "",
                                    "address": "",
                                    "city": "",
                                    "state": "",
                                    "password": "",
                                    "email": "burger@gmail.com"
                                })
    #assert response.data == b'That email is already registered!'
    assert response.status_code == 500

def test_valid_login(client):
    response = client.post('/login',
                                json={
                                    "email": "mcdonald@gmail.com",
                                    "password": "Test1 Password"
                                })
    assert response.status_code == 200


def test_invalid_login(client):
    response = client.post('/login',
                                json={
                                    "email": "mcdonald@gmail.com",
                                    "password": "wrong password!"
                                })
    assert response.status_code == 500
    assert b"Incorrect email or password" in response.data

def test_vendor_edit_profile(client):
    response = client.post('/editProfile', json= {
                                        	"id": 7019,
                                        	"name": "Mcdonalds",
                                        	"description": "American Chain Restaurant",
                                        	"cuisine": "American",
                                        	"hours":{
                                                "open": "0",
                                        	    "close": "0"
                                            },
                                        	"phone": "1234567",
                                        	"address": "123 Mission",
                                        	"city": "San Bruno",
                                        	"state": "California"
                                        })
    assert response.status_code == 200
    assert response.data == b'Successfully updated.'

# def test_vendor_search(test_client):
#
def test_vendor_add_menu_item(client):
    response = client.post('/addItem', json= {
                                    	"id": 7019,
                                    	"name": "A bologna sandwich",
                                    	"price": 9.99,
                                    	"description": "bologna"
                                    })
    assert response.status_code == 201

def test_invalid_vendor_edit_menu_item(client):
    response = client.post('/editItem', json= {
                                    	"id": 0000,
                                    	"name": "Big Mac",
                                    	"price": 9.99,
                                    	"description": "Hamburger"
                                    })
    assert response.status_code == 500
    assert response.data == b'No Menu Item Found'

def test_invalid_vendor_delete_menu_item(client):
    response = client.post('/deleteItem', json= {
                                    	"id": 0000,
                                    	"name": "Big Mac",
                                    	"price": 9.99,
                                    	"description": "Hamburger"
                                    })
    assert response.status_code == 500
    assert response.data == b'No Menu Item Found'

def test_vendor_get_menu(client):
    # app = Flask(__name__)
    # client = app.test_client()
    result = client.get('/menu', json={"id": 7019})
    assert result.status_code == 200

def test_invalid_vendor_get_menu(client):
    result = client.get('/menu', json={"id": 0000})
    assert result.status_code == 500

def test_vendor_add_order(client):
    response = client.post('/addOrder', json= {
                                    	"id": 7019,
                                    	"customer": {
                                            "name": "Order Test",
                                        	"email": "order@ucsc.edu",
                                            "phone": "111222333"
                                        },
                                    	"price": 20.00,
                                    	"items": [
                                    		{"menuItemID": 14034, "quantity": 1}
                                    	]
                                    })
    assert response.status_code == 200

def test_vendor_get_order(client):
    result = client.get('/getOrder', json={"id": 7019})
    assert result.status_code == 200

def test_invalid_vendor_get_order(client):
    result = client.get('/getOrder', json={"id": 0000})
    assert result.status_code == 500
    assert result.data == b'No Orders Found'


def test_invalid_order_remove(client):
    result = client.get('/removeOrder', json={"id": 0000})
    assert result.status_code == 500
    assert result.data == b'Order Not Found'
