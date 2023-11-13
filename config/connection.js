require("dotenv").config();
const mysql = require("mysql2");

// Creates a connection to specific mysql database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

module.exports = { db };
