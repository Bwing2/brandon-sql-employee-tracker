const mysql = require("mysql2");
const { db } = require("../config/connection");

// Selects specific columns to JOIN with the "employee" table that use foreign keys to correctly identify data that correlates
// Foreign key of the "employee" table "role_id" references the "id" of the "roles" table
// Foreign key of the "roles" table "department_id" references the "id" of the "department" table
const joinEmployee = () => {
  db.promise()
    .query(
      `SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, roles.job_title, department_id, department.department_name, roles.salary, employee.manager_id 
      FROM employee JOIN roles ON employee.role_id = roles.id 
      JOIN department ON roles.department_id = department.id ORDER BY employee.id;`
    )
    .then(([rows]) => {
      console.table(rows);
    })
    .catch(console.log);
};

const joinRoles = () => {
  db.promise()
    .query(
      `SELECT roles.id, roles.job_title, department_id, department.department_name, roles.salary 
      FROM roles JOIN department ON roles.department_id = department.id;`
    )
    .then(([rows]) => {
      console.table(rows);
    })
    .catch(console.log);
};

module.exports = { joinEmployee, joinRoles };
