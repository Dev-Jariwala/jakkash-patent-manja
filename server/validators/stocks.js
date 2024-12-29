import { body, param, validationResult } from "express-validator";
import { query } from "../utils/query.js";

export const validateGetStocks = [
  param("collection_id")
    .notEmpty()
    .withMessage("collection_id is required")
    .custom(async (value, { req }) => {
      if (!value) {
        throw new Error("collection_id is required");
      }
      const [collection] = await query(
        "SELECT * FROM collections WHERE collection_id = $1",
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
export const validateCreateStock = [
  param("collection_id")
    .notEmpty()
    .withMessage("collection_id is required")
    .custom(async (value, { req }) => {
      if (!value) {
        throw new Error("collection_id is required");
      }
      const [collection] = await query(
        "SELECT * FROM collections WHERE collection_id = $1",
        [value]
      );
      if (!collection) {
        throw new Error("collection not found");
      }
      req.collection = collection;
      return true;
    }),
  param("product_id")
    .notEmpty()
    .withMessage("product_id is required")
    .custom(async (value, { req }) => {
      if (!value) {
        throw new Error("product_id is required");
      }
      const { collection_id } = req.params;
      if (!collection_id) {
        throw new Error("collection_id is required");
      }
      const [product] = await query(
        "SELECT * FROM products WHERE product_id = $1 AND collection_id = $2",
        [value, collection_id]
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
    .withMessage("quantity must be a positive integer"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
export const validateUpdateStock = [
  param("collection_id")
    .notEmpty()
    .withMessage("collection_id is required")
    .custom(async (value, { req }) => {
      if (!value) {
        throw new Error("collection_id is required");
      }
      const [collection] = await query(
        "SELECT * FROM collections WHERE collection_id = $1",
        [value]
      );
      if (!collection) {
        throw new Error("collection not found");
      }
      req.collection = collection;
      return true;
    }),
  param("product_id")
    .notEmpty()
    .withMessage("product_id is required")
    .custom(async (value, { req }) => {
      if (!value) {
        throw new Error("product_id is required");
      }
      const { collection_id } = req.params;
      if (!collection_id) {
        throw new Error("collection_id is required");
      }
      const [product] = await query(
        "SELECT * FROM products WHERE product_id = $1 AND collection_id = $2",
        [value, collection_id]
      );
      if (!product) {
        throw new Error("product not found");
      }
      req.product = product;
      return true;
    }),
  param("stock_id")
    .notEmpty()
    .withMessage("stock_id is required")
    .custom(async (value, { req }) => {
      if (!value) {
        throw new Error("stock_id is required");
      }
      const { collection_id, product_id } = req.params;
      const [stock] = await query(
        "SELECT * FROM stocks WHERE stock_id = $1 AND collection_id = $2 AND product_id = $3",
        [value, collection_id, product_id]
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
      console.log(req.product.stock_in_hand, value, req.stock.quantity);
      // if (value && req.product && req.stock) {
        if (req.product?.stock_in_hand + value - req.stock?.quantity < 0) {
          throw new Error("Insufficient stock in hand");
        }
      // }
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
