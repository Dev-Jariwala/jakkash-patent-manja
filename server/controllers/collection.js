// controllers/collection.js
import { handleError } from "../utils/error.js";
import { query } from "../utils/query.js";

/* -- Table: collections
CREATE TABLE collections (
  sr_no SERIAL PRIMARY KEY,
    collection_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
    collection_name VARCHAR(50) NOT NULL
);
*/

export const createCollection = async (req, res) => {
  try {
    const { collection_name } = req.body;
    const [newCollection] = await query(
      "INSERT INTO collections (collection_name) VALUES ($1) returning *",
      [collection_name]
    );
    if (!newCollection) {
      res.status(400).json({ error: "Error creating collection" })
    }

    res.status(201).json({
      message: "Collection created successfully",
      collection: newCollection,
    });
  } catch (error) {
    handleError('createCollection', res, error);
  }
};

export const getCollections = async (req, res) => {
  try {
    const collections = await query("SELECT * FROM collections order by sr_no asc");
    res.status(200).json({ collections });
  } catch (error) {
    handleError('getCollections', res, error);
  }
};

export const updateCollection = async (req, res) => {
  try {
    const { collection_id } = req.params;
    const { collection_name } = req.body;
    const [updatedCollection] = await query(
      "UPDATE collections SET collection_name=$1 WHERE collection_id=$2 RETURNING *",
      [collection_name, collection_id]
    );
    if (!updatedCollection) {
      res.status(404).json({ error: "Collection not found" });
    }
    res.status(200).json({
      message: "Collection updated successfully",
      collection: updatedCollection,
    });
  } catch (error) {
    handleError('updateCollection', res, error);
  }
}