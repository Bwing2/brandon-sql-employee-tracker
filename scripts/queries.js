const mysql = require("mysql2");
const { db } = require("../config/connection");

const departments = () => selectAll("department");
const employees = () => selectAll("employee");
const roles = () => selectAll("roles");

const selectAll = (table) =>
  db
    .promise()
    .query(`SELECT * FROM ${table}`)
    .then(([rows]) => {
      console.table(rows);
    })
    .catch(console.log);

module.exports = { selectAll, departments, employees, roles };
