var mysql = require('mysql2')

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "naweesdb"
}).promise()

module.exports = pool;