// controllers/product.js
import { handleError } from "../utils/error.js";
import { query } from "../utils/query.js";

/*
-- Table: products
CREATE TABLE products (
    sr_no SERIAL PRIMARY KEY,
    product_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
    collection_id UUID NOT NULL REFERENCES collections(collection_id),
    product_name VARCHAR(50) NOT NULL,
    wholesale_price FLOAT,
    retail_price FLOAT,
    stock_in_hand INT NOT NULL,
    total_stock INT NOT NULL,
    is_labour BOOLEAN DEFAULT FALSE,
    is_delete BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
);
*/

export const createProduct = async (req, res, next) => {
  try {
    const { collection_id } = req.params;
    const { product_name, wholesale_price, retail_price, is_labour = 0, } = req.body;
    const [newProduct] = await query(
      "INSERT INTO products (collection_id, product_name, wholesale_price, retail_price, stock_in_hand, total_stock, is_labour) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [collection_id, product_name, wholesale_price, retail_price, 0, 0, is_labour]);
    if (!newProduct) {
      throw new Error("Product creation failed");
    }

    res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    handleError("createProduct", res, error);
  }
};
export const getProductsByCollectionId = async (req, res, next) => {
  const { collection_id } = req.params;
  const { page = 1, limit = 10, sortField = "created_at", sortOrder = "desc", search = "", } = req.query;

  const offset = (page - 1) * limit;
  const searchQuery = `%${search?.toLowerCase()}%`;

  console.log({ page, limit, sortField, sortOrder, searchQuery });

  try {
    let productQuery = `
      SELECT * FROM products
      WHERE collection_id = $1
      AND product_name ILIKE $2
      ORDER BY ${sortField} ${sortOrder.toUpperCase()}
    `;
    const productsParams = [collection_id, searchQuery];
    if (parseInt(page) !== -1) {
      productQuery += ` LIMIT $3 OFFSET $4`;
      productsParams.push(parseInt(limit), parseInt(offset));
    }

    const products = await query(productQuery, productsParams);

    const [totalCountResult] = await query(
      "SELECT COUNT(*) as total_count FROM products WHERE collection_id = $1 AND product_name ILIKE $2",
      [collection_id, searchQuery]
    );
    const totalCount = parseInt(totalCountResult?.total_count);
    const totalPages = Math.ceil(totalCount / limit);

    const nextPage = page < totalPages ? parseInt(page) + 1 : null;

    res.status(200).json({ total: totalCount, page: parseInt(page), limit: parseInt(limit), totalPages, totalProducts: totalCount, nextPage, products, });
  } catch (error) {
    handleError("getProductsByCollectionId", res, error);
  }
};

export const updateProductById = async (req, res, next) => {
  try {
    const { product_id } = req.params;
    const { product_name, wholesale_price, retail_price, is_labour, } = req.body;
    const [updatedProduct] = await query(
      "UPDATE products SET product_name = $1, wholesale_price = $2, retail_price = $3, is_labour = $4, updated_at = NOW() WHERE product_id = $5 RETURNING *",
      [product_name, wholesale_price, retail_price, is_labour, product_id]
    );
    if (!updatedProduct) {
      res.status(400).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    handleError("updateProductById", res, error);
  }
};
export const deleteProductById = async (req, res, next) => {
  try {
    const { product_id, collection_id } = req.params;
    const product = req.product;
    const [updatedProduct] = await query("UPDATE products SET is_delete = $1 WHERE product_id = $2 AND collection_id = $3 RETURNING *", [!product.is_delete, product_id, collection_id]);

    res.status(200).json({ message: `product ${product.is_delete ? "restored" : "deleted"} successfuly`, product: updatedProduct });
  } catch (error) {
    handleError("deleteProductById", res, error)
  }
};
export const getProductById = async (req, res, next) => {
  try {
    const { product_id } = req.params;
    const [product] = await query(
      "SELECT * FROM products WHERE product_id =$1",
      [product_id]
    );
    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }
    res.status(200).json({ product });
  } catch (error) {
    handleError("getProductById", res, error);
  }
};
