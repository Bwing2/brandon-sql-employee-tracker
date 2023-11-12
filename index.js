const inquirer = require("inquirer");
const { db } = require("./config/connection");

const {
  selectAll,
  departments,
  employees,
  roles,
} = require("./scripts/select_all_queries");

const { addDepartment, addEmployee } = require("./scripts/add_queries");

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

const questions = [
  {
    type: "list",
    name: "options",
    choices: options,
    message: "What would you like to do?",
  },
  {
    type: "input",
    name: "newDepartment",
    message: "What department would you like to add?",
    when: (answers) => answers.options === "Add Department",
    validate: (newDepartment) => {
      return !newDepartment ? "Please enter a department." : true;
    },
  },
];

const addEmployeeQ = [
  {
    type: "input",
    name: "firstName",
    message: "What is this employee's first name?",
    validate: (firstName) => {
      return !firstName ? "Please enter a first name." : true;
    },
  },
  {
    type: "input",
    name: "lastName",
    message: "What is this employee's last name?",
    validate: (lastName) => {
      return !lastName ? "Please enter a last name." : true;
    },
  },
  {
    type: "input",
    name: "roleId",
    message: "What is this employee's role id?",
    validate: (roleId) => {
      return !roleId ? "Please enter a role id." : true;
    },
  },
  {
    type: "input",
    name: "managerId",
    message: "What is this employee's manager id?",
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
    switch (answers.options) {
      case "View All Employees":
        employees();
        break;
      case "View All Roles":
        roles();
        break;
      case "View All Departments":
        departments();
        break;
      case "Add Department":
        addDepartment(answers.newDepartment);
        break;
      case "Quit":
        db.end();
        return console.log("Goodbye!");
    }
    setTimeout(() => {
      init();
    }, 200);
  });

init();
