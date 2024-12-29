// routes/products.js
import express from 'express';
import * as productValidators from "../validators/products.js";
import * as productControllers from "../controllers/products.js";

const router = express.Router();

router.get("/:collection_id/products", productValidators.validateGetProducts, productControllers.getProductsByCollectionId);
router.get("/:collection_id/products/:product_id", productControllers.getProductById);
router.post("/:collection_id/products", productValidators.validateCreateProduct, productControllers.createProduct);
router.put("/:collection_id/products/:product_id", productValidators.validateUpdateProduct, productControllers.updateProductById);
router.delete("/:collection_id/products/:product_id", productValidators.validateDeleteProduct, productControllers.deleteProductById);

export default router;
