const { body, param, validationResult } = require("express-validator");
const db = require("../db");

exports.validateCreateProduct = [
  body("collection_id")
    .notEmpty()
    .withMessage("Collection id is required")
    .custom(async (value, { req }) => {
      if (!value) {
        throw new Error("Collection id is required");
      }
      const [[collection]] = await db.query(
        "SELECT * FROM collections WHERE collection_id = ?",
        [value]
      );
      if (!collection) {
        throw new Error("Collection not found");
      }
      req.collection = collection;
      return true;
    }),
  body("product_name")
    .notEmpty()
    .withMessage("Product name is required")
    .isString()
    .withMessage("Product name must be a string"),
  body("wholesale_price")
    .notEmpty()
    .withMessage("Wholesale price is required")
    .isNumeric({ min: 0 })
    .withMessage("Wholesale Price must be a numeric"),
  body("retail_price")
    .notEmpty()
    .withMessage("Retail price is required")
    .isNumeric({ min: 0 })
    .withMessage("Retail Price must be a numeric"),
  body("is_labour").isIn([0, 1]).withMessage("is_labour must be 0 or 1"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
exports.validateUpdateProduct = [
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
  body("product_name")
    .notEmpty()
    .withMessage("Product name is required")
    .isString()
    .withMessage("Product name must be a string"),
  body("wholesale_price")
    .notEmpty()
    .withMessage("Wholesale price is required")
    .isNumeric({ min: 0 })
    .withMessage("Wholesale Price must be a numeric"),
  body("retail_price")
    .notEmpty()
    .withMessage("Retail price is required")
    .isNumeric({ min: 0 })
    .withMessage("Retail Price must be a numeric"),
  body("is_labour").isIn([0, 1]).withMessage("is_labour must be 0 or 1"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
exports.validateGetProducts = [
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
exports.validateSoftDeleteProduct = [
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
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
