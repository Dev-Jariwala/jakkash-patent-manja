// create table purchases (
// 	sr_no serial primary key,
// 	purchase_id uuid not null unique default gen_random_uuid(),
// 	collection_id UUID not null references collections(collection_id),
// 	purchase_date timestamptz not null,
// 	invoice_no varchar(255),
// 	supplier_name varchar(255),
// 	item_description TEXT,
// 	rate int not null,
// 	quantity int not null
// );

import { handleError } from "../utils/error.js";
import { query } from "../utils/query.js";

export const getPurchases = async (req, res) => {
    const { collection_id } = req.params;
    const { page = 1, limit = 10, search = '' } = req.query;
    const intPage = page ? parseInt(page) : 1;
    const intLimit = limit ? parseInt(limit) : 10;
    const offset = (intPage - 1) * intLimit;
    try {
        let purchasesQuery = `select * from purchases where collection_id = $1`;
        let countQuery = `select count(*) from purchases where collection_id = $1`;
        const queryParams = [collection_id];

        if (search) {
            purchasesQuery += ` and (invoice_no ilike $2 or supplier_name ilike $2 or item_description ilike $2)`;
            countQuery += ` and (invoice_no ilike $2 or supplier_name ilike $2 or item_description ilike $2)`;
            queryParams.push(`%${search}%`);
        }

        purchasesQuery += ` limit $${queryParams.length + 1} offset $${queryParams.length + 2}`;
        queryParams.push(intLimit, offset);

        const purchases = await query(purchasesQuery, queryParams);
        const totalPurchases = await query(countQuery, search ? [collection_id, `%${search}%`] : [collection_id]);
        const totalPages = Math.ceil(totalPurchases[0].count / intLimit);
        const nextPage = intPage < totalPages ? intPage + 1 : undefined;

        res.json({
            purchases,
            totalPurchases: totalPurchases[0].count,
            totalPages,
            nextPage
        });
    } catch (error) {
        handleError('getPurchases', res, error);
    }
};

export const createPurchase = async (req, res) => {
    const { collection_id } = req.params;
    const { purchase_date, invoice_no, supplier_name, item_description, rate, quantity } = req.body;
    try {
        const purchase = await query(`insert into purchases(collection_id, purchase_date, invoice_no, supplier_name, item_description, rate, quantity) values($1, $2, $3, $4, $5, $6, $7) returning *`, [collection_id, purchase_date, invoice_no, supplier_name, item_description, rate, quantity]);
        res.json(purchase[0]);
    } catch (error) {
        handleError('createPurchase', res, error);
    }
};

export const updatePurchase = async (req, res) => {
    const { collection_id, purchase_id } = req.params;
    const { purchase_date, invoice_no, supplier_name, item_description, rate, quantity } = req.body;
    const [purchase] = await query(`select * from purchases where purchase_id = $1 and collection_id = $2`, [purchase_id, collection_id]);
    if (!purchase) {
        return res.status(404).json({ message: 'Purchase not found' });
    }
    try {
        const purchase = await query(`update purchases set purchase_date = $1, invoice_no = $2, supplier_name = $3, item_description = $4, rate = $5, quantity = $6 where purchase_id = $7 returning *`, [purchase_date, invoice_no, supplier_name, item_description, rate, quantity, purchase_id]);
        res.json(purchase[0]);
    } catch (error) {
        handleError('updatePurchase', res, error);
    }
}

export const getPurchaseById = async (req, res) => {
    try {
        const { collection_id, purchase_id } = req.params;
        const [purchase] = await query(`select * from purchases where purchase_id = $1 and collection_id = $2`, [purchase_id, collection_id]);
        if (!purchase) {
            return res.status(404).json({ message: 'Purchase not found' });
        }
        res.status(200).json({ purchase });
    } catch (error) {
        handleError('getPurchaseById', res, error);

    }
}