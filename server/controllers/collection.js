// controllers/collection.js
const db = require("../db");
require("../logger");
const winston = require("winston");
const errorLogger = winston.loggers.get("error-logger");

exports.createCollection = async (req, res, next) => {
  try {
    const { collection_name } = req.body;
    const collection_id = "collection_" + Date.now();
    await db.query(
      "INSERT INTO collections (collection_id, collection_name) VALUES (?, ?)",
      [collection_id, collection_name]
    );

    res.status(201).json({
      message: "Collection created successfully",
      collection: { collection_id, collection_name },
    });
  } catch (error) {
    errorLogger.error(error);
    res.status(500).json({ message: error.message, error });
  }
};
// get collections

exports.getCollections = async (req, res, next) => {
  try {
    const [collections] = await db.query("SELECT * FROM collections");
    res.status(200).json({ collections });
  } catch (error) {
    errorLogger.error(error);
    res.status(500).json({ message: error.message, error });
  }
};
exports.getCollectionOptions = async (req, res, next) => {
  try {
    const [collections] = await db.query(
      "SELECT collection_id as value, collection_name as label, is_active FROM collections"
    );
    res.status(200).json({ collections });
  } catch (error) {
    errorLogger.error(error);
    res.status(500).json({ message: error.message, error });
  }
};
exports.setIsActive = async (req, res, next) => {
  try {
    const { collection_id } = req.params;
    await db.query("update collections set is_active = 0 where is_active = 1");
    await db.query(
      "update collections set is_active = 1 where collection_id = ?",
      [collection_id]
    );
    res.status(200).json({ message: "is_active setted" });
  } catch (error) {
    errorLogger.error(error);
    res.status(500).json({ message: error.message, error });
  }
};
