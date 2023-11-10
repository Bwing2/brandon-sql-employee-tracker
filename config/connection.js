require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "employee_manager_db",
  },
  console.log(`Connected to employee_manager_db database.`)
);

module.exports = { db };
