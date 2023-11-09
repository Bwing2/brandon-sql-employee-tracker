const inquirer = require("inquirer");
// const "something" = require ("./scripts/queries.js");

require("dotenv").config();

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
