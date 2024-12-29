import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
    max: process.env.DB_CONNECTION_LIMIT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false, // Use true with proper certificates
    },
});


export default pool;
