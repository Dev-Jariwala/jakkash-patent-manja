import { handleError } from "../utils/error.js";
import { query } from "../utils/query.js";

// create table users(
// 	sr_no serial primary key,
// 	user_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
// 	username varchar(50) not null unique,
// 	password varchar(255) not null
// );

// CREATE TABLE collections(
//     sr_no SERIAL PRIMARY KEY,
//     collection_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
//     collection_name VARCHAR(50) NOT NULL
// );

// create table purchases (
// 	sr_no serial primary key,
// 	purchase_id uuid not null unique default gen_random_uuid(),
// 	collection_id UUID not null references collections(collection_id),
// 	purchase_date timestamptz not null,
// 	invoice_no varchar(255),
// 	supplier_name varchar(255),
// 	item_description TEXT,
// 	rate int not null,
// 	quantity int not null
// );

// CREATE TABLE stocks (
//   sr_no SERIAL PRIMARY KEY,
//   stock_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
//   product_id UUID NOT NULL REFERENCES products(product_id),
//   collection_id UUID NOT NULL REFERENCES collections(collection_id),
//   quantity INT NOT NULL,
//   date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMPTZ
// );

/*
-- Table: products
CREATE TABLE products (
    sr_no SERIAL PRIMARY KEY,
    product_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
    collection_id UUID NOT NULL REFERENCES collections(collection_id),
    product_name VARCHAR(50) NOT NULL,
    wholesale_price FLOAT,
    retail_price FLOAT,
    stock_in_hand INT NOT NULL,
    total_stock INT NOT NULL,
    is_labour BOOLEAN DEFAULT FALSE,
    is_delete BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
);
*/

// CREATE TABLE clients (
// 	sr_no SERIAL PRIMARY KEY,
//     client_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
//     name VARCHAR(100) NOT NULL,
//     mobile VARCHAR(20) NOT NULL UNIQUE,
//     address VARCHAR(255) NOT NULL
// );

// CREATE TABLE bills (
// 	   sr_no SERIAL PRIMARY KEY,
//     bill_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
//     collection_id UUID NOT NULL REFERENCES collections(collection_id),
//     bill_no INT NOT NULL,
//     bill_type VARCHAR(50) CHECK (bill_type IN ('retail','wholesale')),
//     UNIQUE (collection_id, bill_no, bill_type),
//     mobile VARCHAR(20) NOT NULL,
//     name VARCHAR(100) NOT NULL,
//     address VARCHAR(500) NOT NULL,
//     order_date TIMESTAMPTZ NOT NULL,
//     delivery_date TIMESTAMPTZ NOT NULL,
//     notes TEXT,
//     total_firki INT NOT NULL,
//     sub_total FLOAT NOT NULL,
//     discount FLOAT NOT NULL,
//     advance FLOAT NOT NULL,
//     total_due FLOAT NOT NULL
// );

// CREATE TABLE bill_items (
// 	   sr_no SERIAL PRIMARY KEY,
//     bill_item_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
//     bill_id UUID NOT NULL REFERENCES bills(bill_id),
//     product_id UUID NOT NULL REFERENCES products(product_id),
//     quantity INT NOT NULL,
//     price FLOAT NOT NULL,
//     UNIQUE (bill_id , product_id)
// );

// CREATE TABLE clients (
// 	sr_no SERIAL PRIMARY KEY,
//     client_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
//     name VARCHAR(100) NOT NULL,
//     mobile VARCHAR(20) NOT NULL UNIQUE,
//     address VARCHAR(255) NOT NULL
// );

export const getAnalytics = async (req, res) => {
    const { collection_id } = req.params;
    try {
        // calcluate total purchase amount for collection id from purchase table rate * quantity
        const totalPurchaseAmount = await query(`SELECT SUM(rate * quantity) as total_purchase_amount FROM purchases WHERE collection_id = $1`, [collection_id]);
        // calculate total sales amount for collection id from bill_items table quantity * price
        const totalSalesAmount = await query(`SELECT SUM(quantity * price) as total_sales_amount FROM bill_items WHERE product_id IN (SELECT product_id FROM products WHERE collection_id = $1)`, [collection_id]);
        // calculate total sales amout for collection id from bill_items table quantity * price where bill type is retail
        const totalRetailSalesAmount = await query(`SELECT SUM(quantity * price) as total_sales_amount FROM bill_items WHERE product_id IN (SELECT product_id FROM products WHERE collection_id = $1) AND bill_id IN (SELECT bill_id FROM bills WHERE collection_id = $1 AND bill_type = 'retail')`, [collection_id]);
        // calculate total sales amout for collection id from bill_items table quantity * price where bill type is wholesale
        const totalWholesaleSalesAmount = await query(`SELECT SUM(quantity * price) as total_sales_amount FROM bill_items WHERE product_id IN (SELECT product_id FROM products WHERE collection_id = $1) AND bill_id IN (SELECT bill_id FROM bills WHERE collection_id = $1 AND bill_type = 'wholesale')`, [collection_id]);
        res.status(200).json({ totalPurchaseAmount: totalPurchaseAmount[0].total_purchase_amount, totalSalesAmount: totalSalesAmount[0].total_sales_amount, totalRetailSalesAmount: totalRetailSalesAmount[0].total_sales_amount, totalWholesaleSalesAmount: totalWholesaleSalesAmount[0].total_sales_amount });
    } catch (error) {
        handleError('getAnalytics', error, res);
    }

};