// routes/collection.js
const express = require("express");
const {
  createCollection,
  getCollections,
  getCollectionOptions,
  setIsActive,
} = require("../controllers/collection");
const { validateCreateCollection } = require("../validators/collections");
const router = express.Router();

// create collection
router.post("/", validateCreateCollection, createCollection);
router.get("/", getCollections);
router.get("/options", getCollectionOptions);
router.put("/set_active/:collection_id", setIsActive);
module.exports = router;
