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
![welcome image](https://github.com/elaine01/Bamazon/blob/master/assets/Screen%20Shot%202018-02-08%20at%2010.22.48%20PM.png)

User is prompted to type what item to buy and the quantity, and is asked to confirm.
![prompt image](https://github.com/elaine01/Bamazon/blob/master/assets/Screen%20Shot%202018-02-08%20at%2010.26.38%20PM.png)

### Decides not to buy
If the user doesn't confirm, the program will quit with a good-bye message.
![]()

### Decides to buy
If the user confirms, the script will check if there is enough of the item in stock, and will load the product info, including stock quantity. 
![purchased](https://github.com/elaine01/Bamazon/blob/master/assets/Screen%20Shot%202018-02-08%20at%2010.27.25%20PM.png)

### If there's insufficient quantity
If there's not enough of the product in stock, the 
![out of stock](https://github.com/elaine01/Bamazon/blob/master/assets/Screen%20Shot%202018-02-08%20at%2010.28.03%20PM.png)

### Inputs wrong ID
If a user types a product number not in the database, an error message is displayed before the program quites with a good-bye message.
![wrong id](https://github.com/elaine01/Bamazon/blob/master/assets/Screen%20Shot%202018-02-08%20at%2010.34.35%20PM.png)

## Technology
```
Node.js
MySQL

mysql - npm
inquirer - npm
cli-table - npm
```

