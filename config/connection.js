require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employee_manager_db",
  },
  console.log(
    `Connected to employee_manager_db database.`,
    process.env.DB_PASSWORD
  )
);

module.exports = { db };
