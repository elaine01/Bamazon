var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'bamazon'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadID + "\n");
	initialDisplay();
});

// Running this application will first display all of the items available for sale. 
// Include the ids, names, and prices of products for sale.

function initialDisplay() {
	console.log("Grabbing database,,,\n");
	var query = connection.query(
		"SELECT * FROM bamazon",
		function(err, res) {
			if (err) throw err;
			console.log(res);
		});
}