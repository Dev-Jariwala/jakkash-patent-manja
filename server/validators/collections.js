const { body, validationResult } = require("express-validator");
const db = require("../db");

exports.validateCreateCollection = [
  body("collection_name")
    .notEmpty()
    .withMessage("Collection name is required")
    .custom(async (value) => {
      const [[collection]] = await db.query(
        "SELECT * FROM collections WHERE collection_name = ?",
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
