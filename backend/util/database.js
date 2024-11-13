const mysql = require("mysql2");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'mediconnect',
    password: 'admin'
});

module.exports = pool.promise();