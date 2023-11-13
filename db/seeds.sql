-- Inserts department_name column into department table
-- Values are rows
INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

-- Inserts title, department_id, and salary columns into roles table
INSERT INTO roles (title, department_id, salary)
VALUES ("Salesperson", 01, 60000),
       ("Sales Manager", 01, 80000),
       ("Software Engineer", 02, 90000),
       ("Software Engineer Lead", 02, 115000),
       ("Project Manager", 02, 100000),
       ("Financial Analyst", 03, 73000),
       ("Legal Counsel", 04, 91000);

-- Inserts first_name, last_name, role_id, department_name, salary, and manager_id columns into employee table
INSERT INTO employee (first_name, last_name, role_id, department_name, salary, manager_id)
VALUES ("John", "Park", 102, "Engineering", 90000, 103),
       ("Sam", "Driver", 100, "Sales", 62000, 101),
       ("Alice", "Williams", 101, "Sales", 80000, NULL),
       ("Frank", "Davis", 105, "Finance", 74000, NULL),
       ("David", "Looper", 106, "Legal", 91000, NULL),
       ("Ashton", "Gren", 103, "Engineering", 115000, NULL),
       ("Jane", "Freedman", 100, "Sales", 60000, 101),
       ("Jay", "Smith", 102, "Engineering", 95000, 103);
