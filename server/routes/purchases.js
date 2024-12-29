import express from 'express';
import * as purchaseControllers from '../controllers/purchase.js';

const router = express.Router();

router.get("/:collection_id/purchases", purchaseControllers.getPurchases);
router.get("/:collection_id/purchases/:purchase_id", purchaseControllers.getPurchaseById);
router.post("/:collection_id/purchases", purchaseControllers.createPurchase);
router.put("/:collection_id/purchases/:purchase_id", purchaseControllers.updatePurchase);

export default router;
