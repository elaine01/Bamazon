var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'bamazon'
});


function initialDisplay() {
  console.log("\n   +++++++++++++++++++++");
  console.log("   +                   +");
  console.log("   +   W E L C O M E   +");
  console.log("   +                   +");
  console.log("   +++++++++++++++++++++");
	console.log("\n   Here are the products available for purchase. Please take your time and browse.\n");
	var query = connection.query(
		"SELECT id, product_name, department_name, price FROM products",
		function(err, res) {
			if (err) throw err;
      var table = new Table({
        head: ['ID', 'Product', 'Department', 'Price'],
        colWidths: [4, 19, 22, 9]
      });
      for (var i = 0; i < res.length; i++) {
        table.push(
          [res[i].id, res[i].product_name, res[i].department_name, res[i].price.toFixed(2)]
        );
      }
        console.log(table.toString());
        console.log("\n");
        promptPurchase();
    });
}

connection.connect(function(err) {
	if (err) throw err;
	//console.log("connected as id " + connection.threadId + "\n");
	initialDisplay();
});


function promptPurchase() {
 // connection.connect();
	inquirer
  .prompt([
    // ask ID of product to buy
    {
      type: "input",
      message: "What is the ID of the product you'd like to buy? \n",
      name: "prodID"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },
    // # of units of product
    {
      type: "input",
      message: "How many? \n",
      name: "prodUnits"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerRes) {
    // If the user confirms,
    if (inquirerRes.confirm) {
      readProducts(inquirerRes);
      if (inquirerRes.prodID !== undefined || res[0] !== undefined) {
        checkStock(inquirerRes);
        //connection.end();
      }
    } else {
      console.log("\n *** That's okay. Come again when you're ready. ***\n");
      connection.end();
    }
  });
}

function readProducts(inquirerRes) {
  console.log("\n\nLoading.. \n");
  connection.query(
    "SELECT * FROM products WHERE ?",
    {
      id: inquirerRes.prodID,
    },
    function(err, res) {
      var table = new Table({
        head: ['ID', 'Product', 'Department', 'Price', 'In Stock'],
        colWidths: [4, 19, 22, 9, 10]
      });

      if (inquirerRes.prodID !== undefined) {
        for (var i = 0; i < res.length; i++) {
          table.push(
            [res[i].id, res[i].product_name, res[i].department_name, res[i].price.toFixed(2), res[i].stock_quantity]
          );
        }
          console.log(table.toString());
          console.log("\n");
      } else {
        console.log("That's not a valid product ID. Please come again when you're ready.\n")
      }
    });
}

function checkStock(inquirerRes) {
  connection.query(
    "SELECT * FROM products WHERE ?",
    {
      id: inquirerRes.prodID,
    },
    function(err, res) {
      console.log(">>> Checking stock...");
      if (res[0] === undefined) {
        console.log("Invalid input... come again when you're ready.");
        connection.end();
      } else if (res[0].stock_quantity > inquirerRes.prodUnits) {
        console.log("You've just purchased " + inquirerRes.prodUnits + " x " + res[0].product_name);
        console.log("*** Total cost: $" + (inquirerRes.prodUnits*res[0].price + " ***\n"));
        updateInventory(res, inquirerRes);
      } else {
        console.log("*** Out of stock! *** \nThere's currently only " + res[0].stock_quantity + " in stock.\n");
      }
  });
}

function updateInventory(res, inquirerRes) {
  console.log(">>> Updating stock...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: (res[0].stock_quantity-inquirerRes.prodUnits)
      },
      {
        product_name: res[0].product_name
      }
    ],
    function(err, res) {
      console.log("\n... Stock updated!\n");
      connection.end();
     // readProducts(inquirerRes);
    });
}




