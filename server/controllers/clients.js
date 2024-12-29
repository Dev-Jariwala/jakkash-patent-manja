// CREATE TABLE clients (
// 	sr_no SERIAL PRIMARY KEY,
//     client_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
//     name VARCHAR(100) NOT NULL,
//     mobile VARCHAR(20) NOT NULL UNIQUE,
//     address VARCHAR(255) NOT NULL
// );

import { handleError } from "../utils/error.js";
import { query } from "../utils/query.js";

export const getClients = async (req, res) => {
    const { page = 1, limit = 10, search = '' } = req.query;
    const intPage = page ? parseInt(page) : 1;
    const intLimit = limit ? parseInt(limit) : 10;
    const offset = (intPage - 1) * intLimit;
    try {
        let clientsQuery = `select * from clients`;
        let countQuery = `select count(*) from clients`;
        const queryParams = [];

        if (search) {
            clientsQuery += ` where name ilike $1 or mobile ilike $1 or address ilike $1`;
            countQuery += ` where name ilike $1 or mobile ilike $1 or address ilike $1`;
            queryParams.push(`%${search}%`);
        }

        clientsQuery += ` limit $${queryParams.length + 1} offset $${queryParams.length + 2}`;
        queryParams.push(intLimit, offset);

        const clients = await query(clientsQuery, queryParams);
        const totalClients = await query(countQuery, search ? [`%${search}%`] : []);
        const totalPages = Math.ceil(totalClients[0].count / intLimit);
        const nextPage = intPage < totalPages ? intPage + 1 : undefined;

        res.json({
            clients,
            totalClients: totalClients[0].count,
            totalPages,
            nextPage
        });
    } catch (error) {
        handleError('getClients', res, error);
    }
};