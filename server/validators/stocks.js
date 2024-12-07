const { body, param, validationResult } = require("express-validator");
const db = require("../db");
exports.validateGetStocks = [
  param("collection_id")
    .notEmpty()
    .withMessage("collection_id is required")
    .custom(async (value, { req }) => {
      if (!value) {
        throw new Error("collection_id is required");
      }
      const [[collection]] = await db.query(
        "SELECT * FROM collections WHERE collection_id = ?",
        [value]
      );
      if (!collection) {
        throw new Error("collection not found");
      }
      req.collection = collection;
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
exports.validateCreateStock = [
  body("collection_id")
    .notEmpty()
    .withMessage("collection_id is required")
    .custom(async (value, { req }) => {
      if (!value) {
        throw new Error("collection_id is required");
      }
      const [[collection]] = await db.query(
        "SELECT * FROM collections WHERE collection_id = ?",
        [value]
      );
      if (!collection) {
        throw new Error("collection not found");
      }
      req.collection = collection;
      return true;
    }),
  body("product_id")
    .notEmpty()
    .withMessage("product_id is required")
    .custom(async (value, { req }) => {
      if (!value) {
        throw new Error("product_id is required");
      }
      const [[product]] = await db.query(
        "SELECT * FROM products WHERE product_id = ?",
        [value]
      );
      if (!product) {
        throw new Error("product not found");
      }
      req.product = product;
      return true;
    }),
  body("quantity")
    .notEmpty()
    .withMessage("quantity is required")
    .isInt({ min: 0 })
    .withMessage("quantity must be a numeric"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
exports.validateUpdateStock = [
  body("stock_id")
    .notEmpty()
    .withMessage("stock_id is required")
    .custom(async (value, { req }) => {
      if (!value) {
        throw new Error("stock_id is required");
      }
      const [[stock]] = await db.query(
        "SELECT * FROM stocks WHERE stock_id = ?",
        [value]
      );
      if (!stock) {
        throw new Error("stock not found");
      }
      req.stock = stock;
      return true;
    }),
  body("quantity")
    .notEmpty()
    .withMessage("quantity is required")
    .isInt({ min: 0 })
    .withMessage("quantity must be a numeric")
    .custom(async (value, { req }) => {
      if (value && req.stock) {
        const [[product]] = await db.query(
          "SELECT * FROM products WHERE  product_id = ?",
          [req.stock.product_id]
        );
        if (!product) {
          throw new Error("product not found");
        }
        if (value < product.stock_in_hand) {
          throw new Error("Insufficient stock in hand");
        }
      }
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
