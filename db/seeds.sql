INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO roles (title, department_id, salary)
VALUES ("Salesperson", 01, 60000),
       ("Sales Manager", 01, 80000),
       ("Software Engineer", 02, 90000),
       ("Software Engineer Lead", 02, 115000),
       ("Project Manager", 02, 100000),
       ("Financial Analyst", 03, 73000),
       ("Legal Counsel", 04, 91000);

INSERT INTO employee (first_name, last_name, role_id, department_name, salary, manager_id)
VALUES ("John", "Park", 102, "Engineering", 90000, NULL),
       ("Sam", "Driver", 100, "Sales", 62000, NULL),
       ("Alice", "Williams", 101, "Sales", 80000, 101),
       ("Frank", "Davis", 105, "Finance", 74000, 105),
       ("David", "Looper", 106, "Legal", 91000, 106),
       ("Ashton", "Gren", 103, "Engineering", 115000, 103),
       ("Jane", "Freedman", 100, "Sales", 60000, NULL),
       ("Jay", "Smith", 102, "Engineering", 95000, NULL);
