const mysql = require("mysql2");
const { db } = require("../config/connection");

const selectAll = () =>
  db
    .promise()
    .query(`SELECT * FROM employee`)
    .then(([rows, fields]) => {
      console.table(rows);
    })
    .catch(console.log)
    .then(() => db.end());

module.exports = { selectAll };
