// routes/users.js
import express from 'express';
import * as stocksValidators from '../validators/stocks.js';
import * as stocksControllers from '../controllers/stocks.js';
const router = express.Router();

router.get("/:collection_id/stocks", stocksValidators.validateGetStocks, stocksControllers.getStocksByCollectionId);
router.get("/:collection_id/stocks/:stock_id", stocksControllers.getStockById);
router.post("/:collection_id/products/:product_id/stocks", stocksValidators.validateCreateStock, stocksControllers.createStock);
router.put("/:collection_id/products/:product_id/stocks/:stock_id", stocksValidators.validateUpdateStock, stocksControllers.updateStockById);

export default router;
