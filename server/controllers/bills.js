// controllers/bill.js

const db = require("../db");
require("../logger");
const winston = require("winston");
const errorLogger = winston.loggers.get("error-logger");
exports.createBill = async (req, res, next) => {
  const {
    collection_id,
    bill_no,
    bill_type,
    name,
    address,
    mobile,
    notes,
    total_firki,
    sub_total,
    advance,
    discount,
    total_due,
    order_date,
    delivery_date,
    bill_items,
  } = req.body;
  const { products } = req;
  try {
    const bill_id = `bill_` + Date.now();
    await db.query(
      `insert into bills 
        (bill_id, collection_id, bill_no, bill_type, mobile, name, address, order_date, delivery_date, notes, total_firki, sub_total, discount, advance, total_due)
        values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        bill_id,
        collection_id,
        bill_no,
        bill_type,
        mobile,
        name,
        address,
        order_date,
        delivery_date,
        notes,
        total_firki,
        sub_total,
        discount,
        advance,
        total_due,
      ]
    );
    bill_items.map(async (bill_item, index) => {
      const bill_item_id = "bill_item_" + Date.now() + index;
      const prod = products.find(
        (prod) => prod.product_id === bill_item.product_id
      );
      const price = prod[`${bill_type}_price`];
      await db.query(
        `insert into bill_items 
              (bill_item_id, bill_id, product_id, quantity, price)
              values (?,?,?,?,?)`,
        [bill_item_id, bill_id, bill_item.product_id, bill_item.quantity, price]
      );
      await db.query(
        "update products set stock_in_hand = ? where product_id = ?",
        [prod.stock_in_hand - bill_item.quantity, bill_item.product_id]
      );
      const [[client]] = await db.query(
        "select * from clients where mobile = ?",
        [mobile]
      );
      if (!client) {
        // create client
        const client_id = `client_` + Date.now();
        await db.query(
          "insert into clients (client_id, name, mobile, address) values (?,?,?,?)",
          [client_id, name, mobile, address]
        );
      } else {
        //   update client
        await db.query(
          "update clients set name =?, address =? where client_id =?",
          [name, address, client.client_id]
        );
      }
    });
    res.status(201).json({ message: "Bill created successfully" });
  } catch (error) {
    errorLogger.error(error);
    res.status(500).json({ message: error.message, error });
  }
};
