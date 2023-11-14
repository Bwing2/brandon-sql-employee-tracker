-- Gets rid of database if it exists
DROP DATABASE IF EXISTS employee_manager_db;

-- Creates new database with same name
CREATE DATABASE employee_manager_db;

-- Use the database
USE employee_manager_db;

-- Creates a department table
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

-- Creates a roles table
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
) AUTO_INCREMENT = 100;

-- Creates employee table
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager_id INT REFERENCES employee(id),
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
) AUTO_INCREMENT = 300;