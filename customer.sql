-- 1. Create a MySQL Database called `bamazon`.

-- 2. Then create a Table inside of that database called `products`.

-- 3. The products table should have each of the following columns:
--    * item_id (unique id for each product)
--    * product_name (Name of product)
--    * department_name
--    * price (cost to customer)
--    * stock_quantity (how much of the product is available in stores

DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(50) NOT NULL,
	price DECIMAL(7,2) NOT NULL,
	stock_quantity INTEGER(10),
	PRIMARY KEY (id)
);

-- 4. Populate this database with around 10 different products. 
-- (i.e. Insert "mock" data rows into this database and table).

-- 1
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('jenga', 'games', 10.27, 40);
-- 2
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('blazer', "women's clothing", 495.00, 8);
-- 3
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('face mask', 'beauty', 12.99, 50);
-- 4
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('sunblock', 'beauty', 15.99, 25);
-- 5
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('drone', 'electronics', 279.99, 6);
-- 6
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('macbook air', 'electronics', 844.49, 15);
-- 7
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('laptop backpack', 'accessories', 29.99, 75);
-- 8
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('skateboard', 'outdoor recreation', 29.99, 12);
-- 9
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('tent', 'outdoor recreation', 43.00, 5);
-- 10
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('sunglasses', 'accessories', 132, 12);
