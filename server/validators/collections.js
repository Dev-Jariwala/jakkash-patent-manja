import { body, param, validationResult } from "express-validator";
import { query } from "../utils/query.js";

export const validateCreateCollection = [
  body("collection_name")
    .isString().withMessage("Collection name must be a string")
    .notEmpty().withMessage("Collection name is required")
    .custom(async (value) => {
      const [collection] = await query(
        "SELECT * FROM collections WHERE collection_name = $1",
        [value]
      );
      if (collection) {
        throw new Error("Collection name already exists");
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

export const validateUpdateCollection = [
  param("collection_id").isUUID().withMessage("Collection id must be a UUID").notEmpty().withMessage("collection_id is required"),
  body("collection_name")
    .isString().withMessage("Collection name must be a string")
    .notEmpty().withMessage("Collection name is required")
    .custom(async (value) => {
      const [collection] = await query(
        "SELECT * FROM collections WHERE collection_name = $1",
        [value]
      );
      if (collection) {
        throw new Error("Collection name already exists");
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
