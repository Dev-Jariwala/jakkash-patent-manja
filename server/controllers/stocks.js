// controllers/stocks.js
const db = require("../db");
require("../logger");
const winston = require("winston");
const errorLogger = winston.loggers.get("error-logger");

exports.createStock = async (req, res, next) => {
  try {
    const { collection_id, product_id, quantity, date } = req.body;
    const product = req.product;
    const currentDate = date || new Date();
    const stock_id = "stock_" + Date.now();
    await db.query(
      "INSERT INTO stocks (collection_id, product_id, stock_id, quantity, date) VALUES (?, ?, ?, ?, ?)",
      [collection_id, product_id, stock_id, quantity, currentDate]
    );
    await db.query(
      "update products set stock_in_hand = ?, total_stock = ? where product_id = ?",
      [
        product.stock_in_hand + quantity,
        product.total_stock + quantity,
        product_id,
      ]
    );
    res.status(201).json({
      message: "stock created successfully",
      stock: {
        collection_id,
        product_id,
        stock_id,
        quantity,
        date,
      },
    });
  } catch (error) {
    errorLogger.error(error);
    res.status(500).json({ message: error.message, error });
  }
};

exports.getStocksByCollectionId = async (req, res, next) => {
  const { collection_id } = req.params;
  try {
    const [stocks] = await db.query(
      "SELECT * FROM stocks where collection_id = ?",
      [collection_id]
    );
    res.status(200).json({ stocks });
  } catch (error) {
    errorLogger.error(error);
    res.status(500).json({ message: error.message, error });
  }
};
exports.updateStockById = async (req, res, next) => {
  try {
    const { stock_id, quantity, date } = req.body;
    const stock = req.stock;
    const currentDate = date || new Date();
    await db.query(
      "update stocks set quantity = ?, date = ? where stock_id = ?",
      [quantity, currentDate, stock_id]
    );
    const [[product]] = await db.query(
      "select * from products where product_id = ?",
      [stock.product_id]
    );
    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }
    await db.query(
      "update products set stock_in_hand = ?, total_stock = ? where product_id = ?",
      [
        product.stock_in_hand + quantity - stock.quantity,
        product.total_stock + quantity - stock.quantity,
        stock.product_id,
      ]
    );
    res.status(200).json({
      message: "stock updated successfully",
      stock: {
        stock_id,
        collection_id: stock.collection_id,
        product_id: stock.product_id,
        quantity,
        currentDate,
      },
    });
  } catch (error) {
    errorLogger.error(error);
    res.status(500).json({ message: error.message, error });
  }
};
