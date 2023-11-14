const mysql = require("mysql2");
const { db } = require("../config/connection");

// const employeeList = () =>
//   db
//     .promise()
//     .query(`SELECT CONCAT (first_name, " ", last_name) AS name FROM employee`)
//     .then(([rows]) => {
//       console.log(rows);
//       return rows;
//     })
//     .catch(console.log);

const updateEmployee = (first_name, last_name, role_id, manager_id) => {
  db.promise()
    .query(
      `UPDATE employee SET role_id=${role_id}, manager_id=${manager_id} WHERE first_name="${first_name}" AND last_name="${last_name}"`
    )
    .then(() => {
      console.log(`${first_name} ${last_name}'s role has been updated!`);
    })
    .catch(console.log);
};

module.exports = { updateEmployee };
