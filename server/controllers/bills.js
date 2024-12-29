// controllers/bill.js

import { handleError } from "../utils/error.js";
import { query } from "../utils/query.js";

// CREATE TABLE bills (
// 	   sr_no SERIAL PRIMARY KEY,
//     bill_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
//     collection_id UUID NOT NULL REFERENCES collections(collection_id),
//     bill_no INT NOT NULL,
//     bill_type VARCHAR(50) CHECK (bill_type IN ('retail','wholesale')),
//     UNIQUE (collection_id, bill_no, bill_type),
//     mobile VARCHAR(20) NOT NULL,
//     name VARCHAR(100) NOT NULL,
//     address VARCHAR(500) NOT NULL,
//     order_date TIMESTAMPTZ NOT NULL,
//     delivery_date TIMESTAMPTZ NOT NULL,
//     notes TEXT,
//     total_firki INT NOT NULL,
//     sub_total FLOAT NOT NULL,
//     discount FLOAT NOT NULL,
//     advance FLOAT NOT NULL,
//     total_due FLOAT NOT NULL
// );

// CREATE TABLE bill_items (
// 	   sr_no SERIAL PRIMARY KEY,
//     bill_item_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
//     bill_id UUID NOT NULL REFERENCES bills(bill_id),
//     product_id UUID NOT NULL REFERENCES products(product_id),
//     quantity INT NOT NULL,
//     price FLOAT NOT NULL,
//     UNIQUE (bill_id , product_id)
// );

// CREATE TABLE clients (
// 	sr_no SERIAL PRIMARY KEY,
//     client_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
//     name VARCHAR(100) NOT NULL,
//     mobile VARCHAR(20) NOT NULL UNIQUE,
//     address VARCHAR(255) NOT NULL
// );

export const createBill = async (req, res, next) => {
  const { bill_no, bill_type, name, address, mobile, notes, total_firki, sub_total, advance, discount, total_due, order_date, delivery_date, bill_items, } = req.body;
  const products = req.products || [];
  const { collection_id } = req.params;
  try {
    const [newBill] = await query(
      `insert into bills 
        (collection_id, bill_no, bill_type, mobile, name, address, order_date, delivery_date, notes, total_firki, sub_total, discount, advance, total_due)
        values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning *`,
      [collection_id, bill_no, bill_type, mobile, name, address, order_date, delivery_date, notes, total_firki, sub_total, discount, advance, total_due]
    );
    if (!newBill) {
      return res.status(400).json({ message: 'Error creating bill', error: 'Error creating bill' })
    }
    const billItems = await Promise.all(bill_items.map(async (bill_item) => {
      const prod = products?.find(prod => prod.product_id === bill_item.product_id);
      const price = prod[`${bill_type}_price`];
      const [newBillItem] = await query(
        `insert into bill_items 
              ( bill_id, product_id, quantity, price)
              values ($1, $2, $3, $4) returning *`,
        [newBill?.bill_id, bill_item.product_id, bill_item.quantity, price]
      );
      if (!newBillItem) {
        return res.status(400).json({ message: 'Error creating bill item', error: 'Error creating bill item' })
      }
      const [updatedProduct] = await query(
        "update products set stock_in_hand = $1 where product_id = $2 and collection_id =$3 returning *",
        [prod.stock_in_hand - bill_item.quantity, bill_item.product_id, collection_id]
      );
      if (!updatedProduct) {
        console.log({ message: `Error updating stock in createBill ${newBill?.bill_id}`, error: `Error updating stock in createBill ${newBill?.bill_id}` })
      }
      let [client] = await query(
        "select * from clients where mobile = $1",
        [mobile]
      );
      if (!client) {
        // create client
        const [newClient] = await query(
          "insert into clients (name, mobile, address) values ($1, $2, $3) returning *",
          [name, mobile, address]
        );
        client = newClient;
      } else {
        //   update client
        const [updatedClient] = await query(
          "update clients set name =$1, address =$2 where client_id =$3 returning *",
          [name || client?.name, address || client?.address, client.client_id]
        );
        client = updatedClient;
      }
      return { billItem: newBillItem, product: updatedProduct, client };
    }))
    res.status(201).json({ message: "Bill created successfully", bill: newBill, billItems });
  } catch (error) {
    handleError('createBill', res, error);
  }
};

export const getBills = async (req, res) => {
  const { collection_id } = req.params;
  const { page = 1, limit = 10, sortField = "bill_no", sortOrder = "desc", search = "", bill_type } = req.query;
  const offset = (page - 1) * limit;
  if (!bill_type) {
    return res.status(400).json({ message: 'Error fetching bills', error: 'Bill type is required' })
  }

  try {
    // Build the base query
    let billsQuery = `
      SELECT b.*, c.name AS client_name
      FROM bills b
      LEFT JOIN clients c ON b.mobile = c.mobile
      WHERE b.collection_id = $1 
      AND bill_type = $2
    `;

    // Add search filter (assuming search applies to bill_no, name, or mobile)
    let billsParams = [collection_id, bill_type];
    if (search) {
      billsQuery += ` AND ( c.name ILIKE $3 OR b.mobile ILIKE $3)`;
      billsParams.push(`%${search}%`);
    }

    // Add sorting
    billsQuery += ` ORDER BY ${sortField} ${sortOrder}  LIMIT ${limit} OFFSET ${offset}`;

    // Execute the billsQuery
    const bills = await query(billsQuery, billsParams);

    // Get total count (optional, for pagination info)
    let totalCountQuery = `SELECT COUNT(*) as total_count FROM bills WHERE collection_id =$1 AND bill_type = $2`;
    const totalCountParams = [collection_id, bill_type]
    if (search) {
      totalCountQuery += ` AND ( name ILIKE $3 OR mobile ILIKE $3)`;
      totalCountParams.push(`%${search}%`);
    }
    const [{ total_count }] = await query(totalCountQuery, totalCountParams);

    res.status(200).json({ message: "Bills retrieved successfully", pagination: { page: parseInt(page), limit: parseInt(limit), totalPages: Math.ceil(parseInt(total_count) / limit), totalItems: parseInt(total_count), }, bills, });
  } catch (error) {
    handleError('getBills', res, error);
  }
};

export const getBillById = async (req, res) => {
  const { bill_id, collection_id } = req.params;

  try {
    const [bill] = await query(`SELECT b.*, c.name AS client_name FROM bills b LEFT JOIN clients c ON b.mobile = c.mobile WHERE b.bill_id = $1 AND b.collection_id =$2`, [bill_id, collection_id]);

    if (!bill) {
      return res.status(404).json({ message: 'Bill not found' });
    }

    const billItems = await query(`SELECT bill_items.*, products.product_name FROM bill_items left join products on bill_items.product_id = products.product_id WHERE bill_id = $1`, [bill_id]);

    res.status(200).json({ message: 'Bill retrieved successfully', bill, billItems });
  } catch (error) {
    handleError('getBillById', res, error);
  }
};

export const getNextBillNo = async (req, res) => {
  const { collection_id } = req.params;
  const { bill_type } = req.query;
  try {
    const [bill] = await query(`SELECT max(bill_no) as bill_no FROM bills WHERE collection_id = $1 AND bill_type = $2`, [collection_id, bill_type]);
    res.status(200).json({ message: 'Bill number retrieved successfully', bill_no: bill?.bill_no + 1 || 0 });
  } catch (error) {
    handleError('getNextBillNo', res, error);
  }
};

export const updateBillById = async (req, res) => {
  const { bill_id, collection_id } = req.params;
  const { bill_no, bill_type, name, address, mobile, notes, total_firki, sub_total, advance, discount, total_due, order_date, delivery_date, bill_items, } = req.body;
  const products = req.products || [];
  try {
    const [updatedBill] = await query(
      `update bills set bill_no = $1, bill_type = $2, mobile = $3, name = $4, address = $5, order_date = $6, delivery_date = $7, notes = $8, total_firki = $9, sub_total = $10, discount = $11, advance = $12, total_due = $13 where bill_id = $14 and collection_id = $15 returning *`,
      [bill_no, bill_type, mobile, name, address, order_date, delivery_date, notes, total_firki, sub_total, discount, advance, total_due, bill_id, collection_id]
    );
    if (!updatedBill) {
      return res.status(400).json({ message: 'Error updating bill', error: 'Error updating bill' });
    }

    const previousBillItems = await query(`SELECT * FROM bill_items WHERE bill_id = $1`, [bill_id]);

    // Delete bill items that are not in the new bill_items
    const previousBillItemIds = previousBillItems.map(item => item.product_id);
    const newBillItemIds = bill_items.map(item => item.product_id);
    const itemsToDelete = previousBillItemIds.filter(id => !newBillItemIds.includes(id));

    await Promise.all(itemsToDelete.map(async (product_id) => {
      const [deletedBillItem] = await query(`DELETE FROM bill_items WHERE bill_id = $1 AND product_id = $2 returning *`, [bill_id, product_id]);
      if (deletedBillItem) {
        const prod = products.find(prod => prod.product_id === product_id);
        await query("update products set stock_in_hand = $1 where product_id = $2 and collection_id =$3", [prod.stock_in_hand + deletedBillItem.quantity, product_id, collection_id]);
      }
    }));

    const billItems = await Promise.all(bill_items.map(async (bill_item) => {
      const prod = products?.find(prod => prod.product_id === bill_item.product_id);
      const price = prod[`${bill_type}_price`];
      const previousBillItem = previousBillItems.find(bi => bi.product_id === bill_item.product_id);

      if (!previousBillItem) {
        const [newBillItem] = await query(
          `insert into bill_items (bill_id, product_id, quantity, price) values ($1, $2, $3, $4) returning *`,
          [bill_id, bill_item.product_id, bill_item.quantity, price]
        );
        if (!newBillItem) {
          return res.status(400).json({ message: 'Error creating bill item', error: 'Error creating bill item' });
        }
        await query("update products set stock_in_hand = $1 where product_id = $2 and collection_id =$3", [prod.stock_in_hand - bill_item.quantity, bill_item.product_id, collection_id]);
        return { billItem: newBillItem, product: prod };
      }

      if (previousBillItem.quantity !== bill_item.quantity) {
        const [updatedBillItem] = await query(
          `update bill_items set quantity = $1 where bill_id = $2 and product_id = $3 returning *`,
          [bill_item.quantity, bill_id, bill_item.product_id]
        );
        if (!updatedBillItem) {
          return res.status(400).json({ message: 'Error updating bill item', error: 'Error updating bill item' });
        }
        await query("update products set stock_in_hand = $1 where product_id = $2 and collection_id =$3", [prod.stock_in_hand - (bill_item.quantity - previousBillItem.quantity), bill_item.product_id, collection_id]);
        return { billItem: updatedBillItem, product: prod };
      }

      return { billItem: previousBillItem, product: prod };
    }));

    res.status(200).json({ message: "Bill updated successfully", bill: updatedBill, billItems });
  } catch (error) {
    handleError('updateBillById', res, error);
  }
};

export const getAllBills = async (req, res) => {
  const { collection_id } = req.params;
  try {
    const bills = await query(`SELECT * FROM bills WHERE collection_id = $1`, [collection_id]);
    res.status(200).json({ message: 'Bills retrieved successfully', bills });
  } catch (error) {
    handleError('getAllBills', res, error);
  }
};

export const getBillReport = async (req, res) => {
  const { collection_id, bill_type } = req.params;
  const { fromBillNo, toBillNo } = req.query;
  console.log({ collection_id, bill_type, fromBillNo, toBillNo });
  try {
    let billsQuery = `
      select bill_no, name, total_firki from bills where collection_id = $1 AND bill_type = $2
    `;
    let billsParams = [collection_id, bill_type];
    if (fromBillNo && toBillNo) {
      billsQuery += ` AND bill_no >= $3 AND bill_no <= $4`;
      billsParams.push(fromBillNo, toBillNo);
    }
    const bills = await query(billsQuery, billsParams);
    res.status(200).json({ message: 'Bills retrieved successfully', bills });
  } catch (error) {
    handleError('getBillReport', res, error);
  }
};