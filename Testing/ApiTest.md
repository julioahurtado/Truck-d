To Test the Flask api
    Navigate to /Database/python/ directory
    And with pytest installed
    run ***pytest***
    which will begin unit testing for the flask API.

The testing functions are as follows:
def test_create_account(client):
    Which takes in a sample vendor account information.
def test_invalid_create_account(client):
    Which takes in a already used email and returns an error.
def test_valid_login(client):
    Which takes in a valid vendor log in.
def test_invalid_login(client):
    Which takes in an incorrect email or password and fails to log in.
def test_vendor_edit_profile(client):
    Which takes in vendor information and updates the vendor table.
def test_vendor_add_menu_item(client):
    Which takes in a menu item and inserts it into the database.
def test_invalid_vendor_edit_menu_item(client):
    Which takes in an invalid menuItemID number and returns an error.
def test_invalid_vendor_delete_menu_item(client):
    Which takes in an invalid menuItemID number and returns an error.
def test_vendor_get_menu(client):
    Which takes in a vendor ID and returns the vendors menu.
def test_invalid_vendor_get_menu(client):
    Which takes in an invalid vendorId and returns an error.
def test_vendor_add_order(client):
    Which takes in order information and inserts it into the database.
def test_vendor_get_order(client):
    Which takes in a vendor ID and returns all the orders from a vendor.
def test_invalid_vendor_get_order(client):
    Which takes in an invalid vendorID and returns an error.
def test_invalid_order_remove(client):
    Which takes in an invalid order number and returns an error.
