const mysql = require("mysql2");
const { db } = require("../config/connection");

// Select all tables as functions
const departments = () => selectAll("department");
const employees = () => selectAll("employee");
const roles = () => selectAll("roles");

// Queries from database to select all from a specific table
const selectAll = (table) =>
  db
    .promise()
    .query(`SELECT * FROM ${table}`)
    .then(([rows]) => {
      console.table(rows);
    })
    .catch(console.log);

module.exports = { selectAll, departments, employees, roles };
