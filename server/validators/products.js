import { body, param, validationResult } from "express-validator";
import { query } from "../utils/query.js";

export const validateCreateProduct = [
  param("collection_id")
    .notEmpty()
    .withMessage("Collection id is required")
    .custom(async (value, { req }) => {
      if (!value) {
        throw new Error("Collection id is required");
      }
      const [collection] = await query(
        "SELECT * FROM collections WHERE collection_id = $1",
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
    .isFloat({ gt: -1 })
    .withMessage("Wholesale price must be a positive number"),
  body("retail_price")
    .notEmpty()
    .withMessage("Retail price is required")
    .isFloat({ gt: -1 })
    .withMessage("Retail price must be a positive number"),
  body("is_labour").isIn([0, 1]).withMessage("is_labour must be 0 or 1"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
export const validateUpdateProduct = [
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
        "SELECT * FROM products WHERE product_id = $1 and collection_id = $2",
        [value, collection_id]
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
    .isFloat({ gt: -1 })
    .withMessage("Wholesale price must be a positive number"),
  body("retail_price")
    .notEmpty()
    .withMessage("Retail price is required")
    .isFloat({ gt: -1 })
    .withMessage("Retail price must be a positive number"),
  body("is_labour").isIn([0, 1]).withMessage("is_labour must be 0 or 1"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
export const validateGetProducts = [
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
export const validateDeleteProduct = [
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
        "SELECT * FROM products WHERE product_id = $1 and collection_id = $2",
        [value, collection_id]
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
