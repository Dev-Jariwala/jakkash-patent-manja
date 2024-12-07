// routes/users.js
const express = require("express");
const {
  validateCreateStock,
  validateGetStocks,
  validateUpdateStock,
} = require("../validators/stocks");
const {
  createStock,
  getStocksByCollectionId,
  updateStockById,
} = require("../controllers/stocks");
const router = express.Router();

// create user
router.post("/", validateCreateStock, createStock);
router.get(
  "/by_collection_id/:collection_id",
  validateGetStocks,
  getStocksByCollectionId
);
router.put("/", validateUpdateStock, updateStockById);

module.exports = router;
