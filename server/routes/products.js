// routes/products.js
const express = require("express");
const {
  createProduct,
  getProductsByCollectionId,
  updateProductById,
  softDeleteProductById,
  getProductById,
} = require("../controllers/products");
const {
  validateCreateProduct,
  validateUpdateProduct,
  validateGetProducts,
  validateSoftDeleteProduct,
} = require("../validators/products");
const router = express.Router();

router.post("/", validateCreateProduct, createProduct);
router.post("/soft_delete", validateSoftDeleteProduct, softDeleteProductById);
router.put("/", validateUpdateProduct, updateProductById);
router.get(
  "/by_collection_id/:collection_id",
  validateGetProducts,
  getProductsByCollectionId
);
router.get("/by_product_id/:product_id", getProductById);

module.exports = router;
