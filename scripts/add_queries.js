const mysql = require("mysql2");
const { db } = require("../config/connection");

// Inserts department_name into department table
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

// Inserts job title, salary, and department_id into roles table
const addRole = (job_title, salary, department_id) => {
  db.promise()
    .query(
      `INSERT INTO roles (job_title, salary, department_id) VALUES ("${job_title}", "${salary}", "${department_id}")`
    )
    .then(() => {
      console.log(`Inserted ${job_title} into roles!`);
    })
    .catch(console.log);
};

// Inserts first_name, last_name, manager_id, and role_id into employee table
const addEmployee = (first_name, last_name, role_id, manager_id) => {
  db.promise()
    .query(
      `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${first_name}", "${last_name}", "${role_id}", "${manager_id}")`
    )
    .then(() => {
      console.log(`Inserted ${first_name} ${last_name} into employees!`);
    })
    .catch(console.log);
};

module.exports = { addDepartment, addRole, addEmployee };
