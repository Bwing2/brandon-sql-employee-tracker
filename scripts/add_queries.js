const mysql = require("mysql2");
const { db } = require("../config/connection");

const addDepartment = (department_name) => {
  db.promise()
    .query(
      `INSERT INTO department (department_name) VALUES ("${department_name}")`
    )
    .then(() => {
      console.log(`Inserted ${department_name} into departments!`);
    })
    .catch(console.log);
};

const addEmployee = (first_name, last_name, manager_id, role_id) => {
  db.promise()
    .query(
      `INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("${first_name}", "${last_name}", "${manager_id}", "${role_id}")`
    )
    .then(([rows]) => {
      console.table(rows);
    })
    .catch(console.log);
};

module.exports = { addDepartment, addEmployee };
