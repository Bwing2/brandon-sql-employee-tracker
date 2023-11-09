const mysql = require("mysql2");

const password = process.env.PASSWORD;

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: password,
    database: "placeholder",
  },
  console.log(`Connected to ${database} database.`)
);

// module.exports =
