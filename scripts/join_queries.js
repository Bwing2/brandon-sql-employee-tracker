const mysql = require("mysql2");
const { db } = require("../config/connection");

const joinEmployee = () => {
  db.promise()
    .query(
      `SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, roles.job_title, department_id, department.department_name, roles.salary, employee.manager_id FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id ORDER BY employee.id;`
    )
    .then(([rows]) => {
      console.table(rows);
    })
    .catch(console.log);
};

const joinRoles = () => {
  db.promise()
    .query(
      `SELECT roles.id, roles.job_title, department_id, department.department_name, roles.salary FROM roles JOIN department ON roles.department_id = department.id;`
    )
    .then(([rows]) => {
      console.table(rows);
    })
    .catch(console.log);
};

module.exports = { joinEmployee, joinRoles };
