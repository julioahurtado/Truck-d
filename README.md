# Installation

## Prerequisites

1. Python 3.7.4
2. Node v12.11.1
3. NPM 6.11.3

## Setup Script

- Run `sh setup.sh` for automatic installation of packages

## Manual Setup

1. In `./Database/python/` run `pip3 install -r requirements.txt`
2. In `./UI-Files/` run `npm install`

# Running Application

## Automatic

1. Run `sh run.sh`
2. Browser should automatically open to application page
   - If browser does not automatically navigate to application, open your preffered browser(Chrome recommended) and navigate to `http://localhost:3000/`

## Manual

1. In `./Database/python/`
   - Run `python3 api.py`
2. In `./UI-Files/`
   - Run `npm start`
3. Browser should automatically open to application page
   - If browser does not automatically navigate to application, open your preffered browser(Chrome recommended) and navigate to `http://localhost:3000/`
4. (**NOTE**) both the api and npm webpackage need to be running concurrently for application to run

# Usage

## Customer

- Click on the customer button on the initial landing page
- Search in the search bar for a Restaurant/Location/Cuisine Type
- Click on the name of the restaurant name of the search results to view a menu
- Once on the menu click the `+` button to add a menu item to your cart
- Then click on the checkout button to view your cart
  - From here you can add your personal information and send the order to the food truck

## Vendor

- Click on the vendor button on the initial landing page
- If you have an account then sign in, if not then sign up
  - The sign up page will ask you for basic information about your food truck
- After you are logged in, you can either view your open orders in the `order queue` page or edit your vendor info in the `profile editor`
