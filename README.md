# Bamazon

An eCommerce app using Node.js and MySQL to see a list of items, make purchases, and cross-checks if the requested item is in stock.

## Table of Contents
* Installation
* Usage
* Technology

## Installation
```
git clone repo
cd into the folder
npm install
node bamazonCustomer.js
```

## Usage

### Default welcome message
After typing ```node bamazonCustomer.js```, the user will be taken to the welcome screen with the list of products by id, name, respective department, and price.
![]()

User is prompted to type what item to buy and the quantity, and is asked to confirm.


### Decides not to buy
If the user doesn't confirm, the program will quit with a good-bye message.


### Decides to buy
If the user confirms, the script will check if there is enough of the item in stock.


### If there's enough in stock
The script will pull and load the product info, including stock quantity. 


### If there's insufficient quantity
If there's not enough of the product in stock, the 


### Inputs wrong ID
If a user types a product number not in the database, an error message is displayed before the program quites with a good-bye message.


## Technology
```
Node.js
MySQL

mysql - npm
inquirer - npm
cli-table - npm
```

