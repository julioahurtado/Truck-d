DROP TABLE Customers;
DROP TABLE Vendors;
DROP TABLE Menus;

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
	location VARCHAR(128),
	email VARCHAR(64) UNIQUE NOT NULL,
	pswd VARCHAR(256) NOT NULL, -- save as plain text for now as we might use google login
	cuisine VARCHAR(64),
	FOREIGN KEY (vendorID) REFERENCES Menus(vendorID)
);

-- Menus
-- Table will join on menuID with the Vendors table
-- Store a menuID that relates to the vendor and stores with it
-- the name, price, and description of each item.
CREATE TABLE Menus(
	vendorID INT,
	name VARCHAR(64) NOT NULL,
	price DECIMAL(6,2), -- Limit of a price of 9999.99
	description VARCHAR(256)
);
