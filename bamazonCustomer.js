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

// Running this application will first display all of the items available for sale. 
// Include the ids, names, and prices of products for sale.



function initialDisplay() {
	console.log("Here are the products available for purchase. Please take your time and browse.\n");
	var query = connection.query(
		"SELECT id, product_name, department_name, price FROM products",
		function(err, res) {
			if (err) throw err;
  		// instantiate 
      var table = new Table({
        head: ['ID', 'Product', 'Department', 'Price'],
        colWidths: [4, 19, 22, 9]
      });
        // table is an Array, so you can `push`, `unshift`, `splice` and friends 
      for (var i = 0; i < res.length; i++) {
        table.push(
          [res[i].id, res[i].product_name, res[i].department_name, res[i].price]
        );
      }
        console.log(table.toString());
        console.log("\n");
        promptPurchase();
    });
}

connection.connect(function(err) {
	console.log('hi');
	if (err) throw err;
	console.log("connected as id " + connection.threadId + "\n");
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
     //  console.log("inquirerResponse.prodID ", inquirerResponse.prodID);
     //  console.log("inquirerResponse.prodUnits ", inquirerResponse.prodUnits);
    	// if (placeholder) {  // not enough in stock
    	// 	console.log("Insufficient quantity!")
    	// } else {  // if there's enough in stock
     //  	console.log("\nOrder just placed.\n Receipt: " + inquirerResponse.prodUnits + " x " + inquirerResponse.prodID + "\n");
    	// }
    }
    else {
      console.log("\nThat's okay. Come again when you're ready.\n");
    }
  });
}


function readProducts(inquirerRes) {
  console.log("\n\nreadProducts function.. \n");
  connection.query(
    "SELECT * FROM products WHERE ?",
    {
      id: inquirerRes.prodID,
    },
    function(err, res) {
      // instantiate 
      var table = new Table({
        head: ['ID', 'Product', 'Department', 'Price', 'In Stock'],
        colWidths: [4, 19, 22, 9, 10]
      });
        // table is an Array, so you can `push`, `unshift`, `splice` and friends 
      for (var i = 0; i < res.length; i++) {
        table.push(
          [res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
        );
      }
        console.log(table.toString());
        console.log("\n");
    });
}

// function checkStock(inquirerRes) {
//   console.log()
// }

