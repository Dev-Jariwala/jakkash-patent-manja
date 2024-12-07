//db.js
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "Jari@529008",
  database: "jakkash_db",
});
module.exports = pool.promise();
