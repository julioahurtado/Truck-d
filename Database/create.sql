DROP SCHEMA Truckd CASCADE;
CREATE SCHEMA Truckd;


-- Customers
CREATE TABLE Customers(
	customerID INT,
	first_name VARCHAR(64), --Set at 64 for now just to make things easier.
	last_name VARCHAR(64),
	email VARCHAR(64),
	password VARCHAR(256) -- Save as plain text for now, as we might use google login
	phone_number INT UNIQUE,
	PRIMARY KEY (customerID, email) -- No two users can have the same ID and email
);

-- Vendors
CREATE TABLE Vendors(
	vendorID INT,
	restaurant_name VARCHAR(128),
	email VARCHAR(64),
	password VARCHAR(256) -- save as plain text for nowm as we might use google login
	cuisine VARCHAR(64)
);

