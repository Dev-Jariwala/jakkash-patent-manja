// routes/collection.js
import express from "express";
import * as collectionValidators from "../validators/collections.js";
import * as collectionControllers from "../controllers/collection.js";
const router = express.Router();

// create collection
router.get("/", collectionControllers.getCollections);
router.post("/", collectionValidators.validateCreateCollection, collectionControllers.createCollection);
router.put("/:collection_id", collectionValidators.validateCreateCollection, collectionControllers.updateCollection);

export default router;
