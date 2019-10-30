DROP TABLE Customers;
DROP TABLE Vendors;
DROP TABLE Menus;

-- Customers
CREATE TABLE Customers(
	customerID INT PRIMARY KEY,
	first_name VARCHAR(64), -- Set at 64 for now just to make things easier.
	last_name VARCHAR(64),
	email VARCHAR(64) UNIQUE NOT NULL,
	location VARCHAR(128),
	pswd VARCHAR(256), -- Save as plain text for now, as we might use google login
	phone_number INT UNIQUE
);

-- Vendors
CREATE TABLE Vendors(
	vendorID INT PRIMARY KEY, -- This needs to be randomonly generated and unique at time of account creation.
	restaurant_name VARCHAR(128),
	location VARCHAR(128),
	email VARCHAR(64) UNIQUE NOT NULL,
	pswd VARCHAR(256), -- save as plain text for now as we might use google login
	cuisine VARCHAR(64)
);

-- Menus
-- Table will join on menuID with the Vendors table
-- Store a menuID that relates to the vendor and stores with it
-- the name, price, and description of each item.
CREATE TABLE Menus(
	vendorID INT,
	name VARCHAR(64) NOT NULL,
	price INT,
	description VARCHAR(256)
);
