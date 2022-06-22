const mysql = require("mysql2");
require("dotenv").config();

let pool = null;

if (!pool) {
    pool = mysql.createPool({
        host: "localhost",
        user: "root",
        password: process.env.MYSQL_PASSWORD,
        database: "default",
    });
}

module.exports = pool;
