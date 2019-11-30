from api import create_app
import pytest
from flask import Flask, request, Response, json, jsonify
def create_app():
    app = api.create_app()




@pytest.fixture
def client():
    app = create_app()
    with app.test_client() as client:
        return client

# def test_init(client):
#     rv = client.get('/')
#     assert b'' in rv.data
#
#
# def test_create_account(test_client):
#     """
#     GIVEN a Flask application
#     WHEN the '/' page is requested (GET)
#     THEN check the response is valid
#     """
#     response = test_client.post('/createVendorAccount',
#                                 json={
#                                 "name": "Unit Test",
#                                 "description": "Create Vendor Unit Test",
#                                 "cuisine": "American",
#                                 "open": "0000",
#                                 "close": "0000",
#                                 "phone": "1234567",
#                                 "address": "1234",
#                                 "city": "San Francisco",
#                                 "state": "CA",
#                                 "password": "password"
#                             })
#     assert response.status_code == 200
#     assert b"Welcome to the Flask User Management Example!" in response.data
#     assert b"Need an account?" in response.data
#     assert b"Existing user?" in response.data
#
# # def test_invalid_create_account(test_client):
#
# def test_valid_login(test_client):
#     """
#     GIVEN a Flask application
#     WHEN the '/login' page is posted to (POST)
#     THEN check the response is valid
#     """
#     response = test_client.post('/login',
#                                 data=dict(email='patkennedy79@gmail.com', password='FlaskIsAwesome'),
#                                 follow_redirects=True)
#     assert response.status_code == 200
#     assert b"Thanks for logging in, patkennedy79@gmail.com!" in response.data
#     assert b"Welcome patkennedy79@gmail.com!" in response.data
#     assert b"Flask User Management" in response.data
#     assert b"Logout" in response.data
#     assert b"Login" not in response.data
#     assert b"Register" not in response.data
#
# def test_invalid_login(test_client, init_database):
#     """
#     GIVEN a Flask application
#     WHEN the '/login' page is posted to with invalid credentials (POST)
#     THEN check an error message is returned to the user
#     """
#     response = test_client.post('/login',
#                                 data=dict(email='patkennedy79@gmail.com', password='FlaskIsNotAwesome'),
#                                 follow_redirects=True)
#     assert response.status_code == 500
#     assert b"Incorrect email or password" in response.data

# def test_vendor_edit_profile(test_client):
#
# def test_vendor_search(test_client):
#
# def test_vendor_add_menu_item(test_client):
#
# def test_vendor_edit_menu_item(test_client):
#
# def test_invalid_vendor_edit_menu_item(test_client):
#
# def test_vendor_delete_menu_item(test_client):
#
# def test_invalid_vendor_delete_menu_item(test_client):
def test_vendor_get_menu(client):
    print("here")
    result = client.get('/menu', json = {"id": 0000})
    assert b'No Menu Found' in result.data

# def test_invalid_vendor_get_menu(test_client):
#
# def test_vendor_add_order(test_client):
#
# def test_vendor_get_order(test_client):
#
# def test_invalid_vendor_get_order(test_client):
#
# def test_order_remove(test_client):
#
# def test_invalid_order_remove(test_client):
