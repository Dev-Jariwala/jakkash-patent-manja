create table users(
	user_id varchar(50) primary key,
    username varchar(50) NOT NULL,
    password varchar(50) not null
);

CREATE TABLE collections (
    collection_id VARCHAR(50) PRIMARY KEY,
    collection_name VARCHAR(50) NOT NULL
);
use jakkash_db;
alter table collections
add column is_active tinyint not null default 0;

select * from products;
update collections set is_active = 1 where collection_name = "2024-25";

CREATE TABLE products (
    product_id VARCHAR(50) PRIMARY KEY,
    collection_id VARCHAR(50) NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    wholesale_price FLOAT,
    retail_price FLOAT,
    stock_in_hand INT NOT NULL,
    total_stock INT NOT NULL,
    category ENUM('product','labour') NOT NULL,
    FOREIGN KEY (collection_id) REFERENCES collections(collection_id)
);
alter table products
drop column sr_no;
CREATE TABLE stocks (
    stock_id VARCHAR(50) PRIMARY KEY,
    product_id VARCHAR(50) NOT NULL,
    collection_id VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (collection_id) REFERENCES collections(collection_id)
);

CREATE TABLE purchases (
    purchase_id VARCHAR(50) PRIMARY KEY,
    collection_id VARCHAR(50) NOT NULL,
    invoice_no VARCHAR(100) NOT NULL,
    supplier_name VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    rate FLOAT NOT NULL,
    quantity INT NOT NULL, 
    date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (collection_id) REFERENCES collections(collection_id)
);

CREATE TABLE clients (
    client_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL
);

CREATE TABLE bills (
    bill_id VARCHAR(50) PRIMARY KEY,
    collection_id VARCHAR(50) NOT NULL,
    bill_no INT NOT NULL,
    bill_type ENUM('retail','wholesale') NOT NULL,
    UNIQUE (collection_id, bill_no, bill_type),
    mobile VARCHAR(20) NOT NULL,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    order_date DATE NOT NULL,
    delivery_date DATE NOT NULL,
    notes VARCHAR(255),
    total_firki INT NOT NULL,
    sub_total FLOAT NOT NULL,
    discount FLOAT NOT NULL,
    advance FLOAT NOT NULL,
    total_due FLOAT NOT NULL,
    FOREIGN KEY (collection_id) REFERENCES collections(collection_id)
);

CREATE TABLE bill_items (
    bill_item_id VARCHAR(50) PRIMARY KEY,
    bill_id VARCHAR(50) NOT NULL,
    product_id VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    price FLOAT NOT NULL,
    UNIQUE (bill_id , product_id),
    FOREIGN KEY (product_id)
        REFERENCES products (product_id),
    FOREIGN KEY (bill_id)
        REFERENCES bills (bill_id)
);
