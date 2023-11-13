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

const addRole = (title, salary, department_id) => {
  db.promise()
    .query(
      `INSERT INTO roles (title, department_id, salary) VALUES ("${title}", "${salary}", "${department_id}")`
    )
    .then(() => {
      console.log(`Inserted ${title} into roles!`);
    })
    .catch(console.log);
};

const addEmployee = (first_name, last_name, manager_id, role_id) => {
  db.promise()
    .query(
      `INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("${first_name}", "${last_name}", "${manager_id}", "${role_id}")`
    )
    .then(() => {
      console.log(`Inserted ${first_name} ${last_name} into employees!`);
    })
    .catch(console.log);
};

module.exports = { addDepartment, addRole, addEmployee };
