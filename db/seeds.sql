-- Inserts department_name column into department table
-- Values are rows
INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Owner");

-- Inserts job_title, department_id, and salary columns into roles table
INSERT INTO roles (job_title, department_id, salary)
VALUES ("Salesperson", 1, 60000),
       ("Sales Manager", 1, 80000),
       ("Software Engineer", 2, 90000),
       ("Software Engineer Lead", 2, 115000),
       ("Project Manager", 2, 100000),
       ("Financial Analyst", 3, 73000),
       ("Legal Counsel", 4, 91000),
       ("Owner", 5, 120000);

-- Inserts first_name, last_name, role_id, department_name, salary, and manager_id columns into employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Park", 102, 305),
       ("Sam", "Driver", 100, 302),
       ("Alice", "Williams", 101, 308),
       ("Frank", "Davis", 105, 308),
       ("David", "Looper", 106, 308),
       ("Ashton", "Gren", 103, 308),
       ("Jane", "Freedman", 100, 302),
       ("Jay", "Smith", 102, 305),
       ("Mary", "Johnson", 107, NULL);
