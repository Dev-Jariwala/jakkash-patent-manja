const { body, validationResult } = require("express-validator");
const db = require("../db");
exports.validateCreateBill = [
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
  body("bill_type")
    .notEmpty()
    .withMessage("bill_type is required")
    .isIn(["retail", "wholesale"])
    .withMessage("bill_type must be either retail or wholesale"),
  body("bill_no")
    .notEmpty()
    .withMessage("bill_no is required")
    .isInt()
    .withMessage("bill_no must be an integer")
    .custom(async (value, { req }) => {
      if (!value) {
        throw new Error("bill_no is required");
      }
      const [[bill]] = await db.query(
        "SELECT * FROM bills WHERE bill_no = ? and bill_type = ? and collection_id = ?",
        [value, req.body.bill_type, req.body.collection_id]
      );
      if (bill) {
        throw new Error("Bill with this bill_no already exists");
      }
      return true;
    }),
  body("bill_items")
    .isArray({ min: 1 })
    .withMessage("bill_items must be an array"),
  body("bill_items")
    .isArray({ min: 1 })
    .withMessage("bill_items must be an array")
    .custom((billItems, { req }) => {
      const productIds = billItems.map((item) => item.product_id);
      const uniqueProductIds = new Set(productIds);
      if (productIds.length !== uniqueProductIds.size) {
        throw new Error("Each bill_item must have a unique product_id");
      }
      return true;
    }),
  body("bill_items.*.product_id")
    .notEmpty()
    .withMessage("product_id is required for each bill_item")
    .custom(async (value, { req }) => {
      const bill_items = req.body.bill_items;
      const currProd = bill_items.find((item) => item.product_id === value);
      const priceKey = req.body.bill_type + "_price";
      if (!value) {
        throw new Error("product_id is required for each bill_item");
      }
      const [[product]] = await db.query(
        "SELECT * FROM products WHERE product_id =? and collection_id =?",
        [value, req.body.collection_id]
      );
      if (!product) {
        throw new Error("product not found for product_id");
      }
      if (product.stock_in_hand < currProd.quantity) {
        throw new Error("Insufficient stock in hand for product_id");
      }
      if (product[priceKey] <= 0) {
        throw new Error("price says product is not for this bill_type");
      }
      if (!req.products) {
        req.products = [product];
      } else {
        req.products.push(product);
      }

      return true;
    }),
  body("bill_items.*.quantity")
    .notEmpty()
    .withMessage("quantity is required for each bill_item")
    .isInt({ gt: 0 })
    .withMessage("quantity must be a positive integer"),
  body("mobile")
    .notEmpty()
    .withMessage("mobile is required")
    .isString()
    .withMessage("mobile must be a string")
    .isLength({ min: 10, max: 10 })
    .withMessage("mobile must be 10 digits long"),
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isString()
    .withMessage("name must be a string"),
  body("address")
    .notEmpty()
    .withMessage("address is required")
    .isString()
    .withMessage("address must be a string"),
  body("order_date")
    .notEmpty()
    .withMessage("order_date is required")
    .isISO8601()
    .withMessage("order_date must be a valid date in ISO 8601 format"),
  body("delivery_date")
    .notEmpty()
    .withMessage("delivery_date is required")
    .isISO8601()
    .withMessage("order_date must be a valid date in ISO 8601 format"),
  body("notes").isString().withMessage("notes must be a string"),
  body("total_firki")
    .notEmpty()
    .withMessage("total_firki is required")
    .isInt({ gt: 0 })
    .withMessage("total_firki must be a positive integer"),
  body("sub_total")
    .notEmpty()
    .withMessage("sub_total is required")
    .isFloat({ gt: -1 })
    .withMessage("sub_total must be a positive float")
    .custom((value, { req }) => {
      const products = req.products;
      const items = req.body.bill_items;
      const sub_total = items.reduce((acc, item) => {
        const prod = products.find(
          (prod) => prod.product_id === item.product_id
        );
        const price = prod[`${req.body.bill_type}_price`];
        return acc + item.quantity * price;
      }, 0);
      if (value !== sub_total) {
        throw new Error(`sub_total must be ${sub_total}`);
      }
      return true;
    }),
  body("discount")
    .notEmpty()
    .withMessage("discount is required")
    .isFloat({ gt: -1 })
    .withMessage("discount must be a float between 0 and 100")
    .custom((value, { req }) => {
      const sub_total = parseFloat(req.body.sub_total);
      const advance = parseFloat(req.body.advance);
      const total_due = parseFloat(req.body.total_due);
      if (value + advance + total_due > sub_total) {
        throw new Error(
          "discount + advance + total_due should not be greater than sub_total"
        );
      }
      return true;
    }),
  body("advance")
    .notEmpty()
    .withMessage("advance is required")
    .isFloat({ gt: -1 })
    .withMessage("advance must be a positive float")
    .custom((value, { req }) => {
      const sub_total = parseFloat(req.body.sub_total);
      const discount = parseFloat(req.body.discount);
      const total_due = parseFloat(req.body.total_due);

      if (value + discount + total_due > sub_total) {
        throw new Error(
          "discount + advance + total_due should not be greater than sub_total"
        );
      }
      return true;
    }),
  body("total_due")
    .notEmpty()
    .withMessage("total_due is required")
    .isFloat({ gt: -1 })
    .withMessage("total_due must be a positive float")
    .custom((value, { req }) => {
      const sub_total = parseFloat(req.body.sub_total);
      const discount = parseFloat(req.body.discount);
      const advance = parseFloat(req.body.advance);
      const total_due = sub_total - discount - advance;
      if (value !== total_due) {
        throw new Error(`total_due should be ${total_due}`);
      }
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
