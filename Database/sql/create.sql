-- mysql -h truckd.ckfuvt7nenwp.us-east-1.rds.amazonaws.com --user admin --port 3306 -p
DROP TABLE Customers;
DROP TABLE Vendors;
DROP TABLE Menus;
DROP TABLE Orders;
DROP TABLE OrderItems;

-- Customers
CREATE TABLE Customers(
	customerID INT PRIMARY KEY,
	first_name VARCHAR(64) NOT NULL, -- Set at 64 for now just to make things easier.
	last_name VARCHAR(64) NOT NULL,
	email VARCHAR(64) UNIQUE NOT NULL,
	location VARCHAR(128),
	pswd VARCHAR(256) NOT NULL, -- Save as plain text for now, as we might use google login
	phone_number INT UNIQUE
);

-- Vendors
CREATE TABLE Vendors(
	vendorID INT PRIMARY KEY, -- This needs to be randomonly generated and unique at time of account creation.
	restaurant_name VARCHAR(128),
	email VARCHAR(64) UNIQUE NOT NULL,
	city VARCHAR(256),
	state VARCHAR(256),
	address VARCHAR(256),
	description VARCHAR(256),
	open_hour INT,
	close_hour INT,
	phone_number VARCHAR(10),
	cuisine VARCHAR(64),
	pswd VARCHAR(256) NOT NULL -- save as plain text for now as we might use google login
);

-- Menus
-- Table will join on menuID with the Vendors table
-- Store a menuID that relates to the vendor and stores with it
-- the name, price, and description of each item.
CREATE TABLE Menus(
	vendorID INT,
	menuItemID INT UNIQUE,
	name VARCHAR(64) NOT NULL,
	price DECIMAL(6,2), -- Limit of a price of 9999.99
	description VARCHAR(256)
);

-- Orders
-- Stores the vendor
CREATE TABLE Orders(
	orderID INT,
	vendorID INT NOT NULL,
	price DECIMAL(6,2),
	customer_name VARCHAR(64),
	customer_email VARCHAR(64),
	customer_phone VARCHAR(10),
	PRIMARY KEY(orderID)
);

CREATE TABLE OrderItems(
	orderID INT NOT NULL,
	menuItemID INT,
	quantity INT
);
