DROP TABLE Customers;
DROP TABLE Vendors;
-- Customers
CREATE TABLE Customers(
	customerID INT,
	first_name VARCHAR(64), -- Set at 64 for now just to make things easier.
	last_name VARCHAR(64),
	email VARCHAR(64),
	location VARCHAR(128),
	pswd VARCHAR(256), -- Save as plain text for now, as we might use google login
	phone_number INT UNIQUE,
	primary key (customerID, email) -- No two users can have the same ID and email
);

-- Vendors
CREATE TABLE Vendors(
	vendorID INT, -- This needs to be randomonly generated and unique at time of account creation.
	restaurant_name VARCHAR(128),
	location VARCHAR(128),
	email VARCHAR(64),
	pswd VARCHAR(256), -- save as plain text for nowm as we might use google login
	cuisine VARCHAR(64),
	PRIMARY KEY (vendorID, email)
);
