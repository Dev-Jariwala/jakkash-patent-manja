// controllers/product.js
const db = require("../db");
require("../logger");
const winston = require("winston");
const errorLogger = winston.loggers.get("error-logger");

exports.createProduct = async (req, res, next) => {
  try {
    const {
      collection_id,
      product_name,
      wholesale_price,
      retail_price,
      is_labour = 0,
    } = req.body;
    const product_id = "product_" + Date.now();
    await db.query(
      "INSERT INTO products (collection_id, product_id, product_name, wholesale_price, retail_price, stock_in_hand, total_stock, is_labour) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        collection_id,
        product_id,
        product_name,
        wholesale_price,
        retail_price,
        0,
        0,
        is_labour,
      ]
    );

    res.status(201).json({
      message: "Product created successfully",
      product: {
        collection_id,
        product_id,
        product_name,
        wholesale_price,
        retail_price,
        stock_in_hand: 0,
        total_stock: 0,
        is_labour,
      },
    });
  } catch (error) {
    errorLogger.error(error);
    res.status(500).json({ message: error.message, error });
  }
};
exports.getProductsByCollectionId = async (req, res, next) => {
  const { collection_id } = req.params;
  const {
    page = 1,
    limit = 10,
    sortField = "created_at",
    sortOrder = "desc",
    search = "",
  } = req.query;

  const offset = (page - 1) * limit;
  const searchQuery = `%${search}%`;

  try {
    const query = `
      SELECT * FROM products
      WHERE collection_id = ?
        AND product_name LIKE ?
      ORDER BY ${sortField} ${sortOrder.toUpperCase()}
      LIMIT ? OFFSET ?
    `;

    const [products] = await db.query(query, [
      collection_id,
      searchQuery,
      parseInt(limit),
      parseInt(offset),
    ]);

    const [totalCountResult] = await db.query(
      "SELECT COUNT(*) as totalCount FROM products WHERE collection_id = ? AND product_name LIKE ?",
      [collection_id, searchQuery]
    );
    const totalCount = totalCountResult[0].totalCount;
    const totalPages = Math.ceil(totalCount / limit);

    const nextPage = page < totalPages ? parseInt(page) + 1 : null;

    res.status(200).json({
      products,
      total: totalCount,
      page: parseInt(page),
      limit: parseInt(limit),
      totalPages,
      totalProducts: totalCount,
      nextPage,
    });
  } catch (error) {
    errorLogger.error(error);
    res.status(500).json({ message: error.message, error });
  }
};

exports.updateProductById = async (req, res, next) => {
  try {
    const {
      product_id,
      product_name,
      wholesale_price,
      retail_price,
      is_labour,
    } = req.body;
    await db.query(
      "UPDATE products SET product_name = ?, wholesale_price = ?, retail_price = ?, is_labour = ? WHERE product_id = ?",
      [product_name, wholesale_price, retail_price, is_labour, product_id]
    );
    const [[product]] = await db.query(
      "SELECT * FROM products WHERE product_id = ?",
      [product_id]
    );
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    errorLogger.error(error);
    res.status(500).json({ message: error.message, error });
  }
};
exports.softDeleteProductById = async (req, res, next) => {
  try {
    const { product_id } = req.body;
    const product = req.product;
    await db.query("UPDATE products SET soft_delete = ? WHERE product_id = ?", [
      product.soft_delete === 1 ? 0 : 1,
      product_id,
    ]);

    res.status(200).json({
      message: `product ${
        product.soft_delete === 1 ? "undeleted" : "deleted"
      } successfuly`,
    });
  } catch (error) {
    errorLogger.error(error);
    res.status(500).json({ message: error.message, error });
  }
};
exports.getProductById = async (req, res, next) => {
  try {
    const { product_id } = req.params;
    const [[product]] = await db.query(
      "SELECT * FROM products WHERE product_id =?",
      [product_id]
    );
    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }
    res.status(200).json({ product });
  } catch (error) {
    errorLogger.error(error);
    res.status(500).json({ message: error.message, error });
  }
};
