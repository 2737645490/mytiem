// db.js

const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mydb'
});

module.exports = db;