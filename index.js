const inquirer = require("inquirer");
const { db } = require("./config/connection");

const {
  selectAll,
  departments,
  employees,
  roles,
} = require("./scripts/select_all_queries");

const {
  addDepartment,
  addRole,
  addEmployee,
} = require("./scripts/add_queries");

const { updateEmployee } = require("./scripts/update_queries");

const { joinEmployee, joinRoles } = require("./scripts/join_queries");

// Options array used in questions choices
const options = [
  "View All Employees",
  "Add Employee",
  "Update Employee Role",
  "View All Roles",
  "Add Role",
  "View All Departments",
  "Add Department",
  "Quit",
];

// Questions array used in inquirer prompt for all options
const questions = [
  {
    type: "list",
    name: "options",
    choices: options,
    message: "What would you like to do?",
  },
  // Add new department
  {
    type: "input",
    name: "newDepartment",
    message: "What department would you like to add?",
    when: (answers) => answers.options === "Add Department",
    validate: (newDepartment) => {
      return !newDepartment ? "Please enter a department." : true;
    },
  },
  // Add new role
  {
    type: "input",
    name: "newRole",
    message: "What role would you like to add?",
    when: (answers) => answers.options === "Add Role",
    validate: (newRole) => {
      return !newRole ? "Please enter a role." : true;
    },
  },
  {
    type: "input",
    name: "salary",
    message: "What is the salary of this role?",
    when: (answers) => answers.options === "Add Role",
    validate: (salary) => {
      return !salary ? "Please enter a salary." : true;
    },
  },
  {
    type: "input",
    name: "departmentId",
    message: "What is the department id of this role?",
    when: (answers) => answers.options === "Add Role",
    validate: (departmentId) => {
      return !departmentId ? "Please enter a department id." : true;
    },
  },
  // Add or Update a new employee
  {
    type: "input",
    name: "firstName",
    message: "What is this employee's first name?",
    when: (answers) =>
      answers.options === "Add Employee" ||
      answers.options === "Update Employee Role",
    validate: (firstName) => {
      return !firstName ? "Please enter a first name." : true;
    },
  },
  {
    type: "input",
    name: "lastName",
    message: "What is this employee's last name?",
    when: (answers) =>
      answers.options === "Add Employee" ||
      answers.options === "Update Employee Role",
    validate: (lastName) => {
      return !lastName ? "Please enter a last name." : true;
    },
  },
  {
    type: "input",
    name: "roleId",
    message: "What is this employee's updated role id?",
    when: (answers) =>
      answers.options === "Add Employee" ||
      answers.options === "Update Employee Role",
    validate: (roleId) => {
      return !roleId ? "Please enter a role id." : true;
    },
  },
  {
    type: "input",
    name: "managerId",
    message: "What is this employee's manager id?",
    when: (answers) =>
      answers.options === "Add Employee" ||
      answers.options === "Update Employee Role",
    validate: (managerId) => {
      return !managerId ? "Please enter a manager id." : true;
    },
  },
];

console.log(
  `
  #####                 ##                                       #####                       #                   
  #                      #                                         #                         #                   
  #      ## #   # ##     #     ###   #   #   ###    ###            #    # ##    ###    ###   #   #   ###   # ##  
  ####   # # #  ##  #    #    #   #  #   #  #   #  #   #           #    ##  #      #  #   #  #  #   #   #  ##  # 
  #      # # #  ##  #    #    #   #  #  ##  #####  #####           #    #       ####  #      ###    #####  #     
  #      # # #  # ##     #    #   #   ## #  #      #               #    #      #   #  #   #  #  #   #      #     
  #####  #   #  #       ###    ###       #   ###    ###            #    #       ####   ###   #   #   ###   #     
                #                    #   #                                                                       
                #                     ###                                                                        
  `
);

const init = () =>
  inquirer.prompt(questions).then((answers) => {
    // Deconstructed answers object for all query properties
    const {
      options,
      newDepartment,
      newRole,
      salary,
      departmentId,
      firstName,
      lastName,
      roleId,
      managerId,
    } = answers;

    // Switch statement for all cases of answers chosen from questions inquirer prompt
    switch (options) {
      case "View All Employees":
        joinEmployee();
        break;
      case "View All Roles":
        joinRoles();
        break;
      case "View All Departments":
        departments();
        break;
      case "Add Department":
        addDepartment(newDepartment);
        break;
      case "Add Role":
        addRole(newRole, salary, departmentId);
        break;
      case "Add Employee":
        addEmployee(firstName, lastName, roleId, managerId);
        break;
      case "Update Employee Role":
        updateEmployee(firstName, lastName, roleId, managerId);
        break;
      case "Quit":
        db.end();
        return console.log("Goodbye!");
    }

    // Sets a delay so tables load correctly in console. Also runs init() after a case is completed
    setTimeout(() => {
      init();
    }, 200);
  });

init();
