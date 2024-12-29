// controllers/stocks.js

import { handleError } from "../utils/error.js";
import { query } from "../utils/query.js";

// CREATE TABLE stocks (
//   sr_no SERIAL PRIMARY KEY,
//   stock_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
//   product_id UUID NOT NULL REFERENCES products(product_id),
//   collection_id UUID NOT NULL REFERENCES collections(collection_id),
//   quantity INT NOT NULL,
//   date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMPTZ
// );

export const createStock = async (req, res) => {
  try {
    const { collection_id, product_id } = req.params;
    const { quantity, date } = req.body;
    const product = req.product;
    const [newStock] = await query(
      "INSERT INTO stocks (collection_id, product_id, quantity, date) VALUES ($1, $2, $3, $4) RETURNING *",
      [collection_id, product_id, quantity, date || "NOW()"]
    );
    if (!newStock) {
      throw new Error("Stock creation failed");
    }

    const [updatedProduct] = await query(
      "update products set stock_in_hand = $1, total_stock = $2 where product_id = $3 and collection_id = $4 returning *",
      [product.stock_in_hand + newStock.quantity, product.total_stock + newStock.quantity, product_id, collection_id]
    );
    res.status(201).json({ message: "stock created successfully", stock: newStock, product: updatedProduct, });
  } catch (error) {
    handleError("createStock", res, error);
  }
};

export const getStocksByCollectionId = async (req, res, next) => {
  const { collection_id } = req.params;
  const { page = 1, limit = 10, sortField = "created_at", sortOrder = "desc", search = '' } = req.query;

  const offset = (page - 1) * limit;

  try {
    let stockQuery = `
      SELECT stocks.*, products.product_name FROM stocks
      LEFT JOIN products ON stocks.product_id = products.product_id
      WHERE stocks.collection_id = $1 
    `;
    const stocksParams = [collection_id, parseInt(limit), parseInt(offset)];
    if (search) {
      stockQuery += ` AND products.product_name ILIKE $4`;
      stocksParams.push(`%${search}%`);
    };
    stockQuery += ` ORDER BY ${sortField} ${sortOrder.toUpperCase()}  LIMIT $2 OFFSET $3`

    const stocks = await query(stockQuery, stocksParams);

    let totalCountQuery = `SELECT COUNT(*) as total_count FROM stocks 
    LEFT JOIN products
    ON stocks.product_id = products.product_id
    WHERE stocks.collection_id = $1`;
    const totalCountParams = [collection_id];
    if (search) {
      totalCountQuery += ` AND products.product_name ILIKE $2`;
      totalCountParams.push(`%${search}%`);
    }
    const [totalCountResult] = await query(
      totalCountQuery,
      totalCountParams
    );
    const totalCount = parseInt(totalCountResult?.total_count);
    const totalPages = Math.ceil(totalCount / limit);

    const nextPage = page < totalPages ? parseInt(page) + 1 : null;

    res.status(200).json({ totalStocks: totalCount, page: parseInt(page), limit: parseInt(limit), totalPages, nextPage, stocks });
  } catch (error) {
    handleError("getStocksByCollectionId", res, error);
  }
};
export const updateStockById = async (req, res, next) => {
  try {
    const { collection_id, product_id, stock_id } = req.params;
    const { quantity, date } = req.body;
    const stock = req.stock;
    const product = req.product;
    const [updatedStock] = await query(
      "update stocks set quantity = $1, date = $2, updated_at = NOW() where collection_id = $3 and product_id = $4 and stock_id = $5 returning *",
      [quantity, date || stock.date, collection_id, product_id, stock_id]
    );

    const [updateProduct] = await query(
      "update products set stock_in_hand = $1, total_stock = $2 where product_id = $3 and collection_id =$4 returning *",
      [product.stock_in_hand + quantity - stock.quantity, product.total_stock + quantity - stock.quantity, stock.product_id, collection_id]
    );
    res.status(200).json({ message: "stock updated successfully", stock: updatedStock, product: updateProduct });
  } catch (error) {
    handleError("updateStockById", res, error);
  }
};

export const getStockById = async (req, res) => {
  try {
    const { collection_id, stock_id } = req.params;
    const [stock] = await query(
      `SELECT stocks.*, products.product_name FROM stocks 
       LEFT JOIN products ON stocks.product_id = products.product_id 
       WHERE stocks.collection_id = $1 AND stocks.stock_id = $2`,
      [collection_id, stock_id]
    );
    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }
    res.status(200).json({ stock });
  } catch (error) {
    handleError("getStockById", res, error);
  }
}