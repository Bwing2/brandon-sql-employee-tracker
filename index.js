const inquirer = require("inquirer");
const db = require("./config/connection");
const { selectAll } = require("./scripts/queries");

const options = [
  "View All Employees",
  "Add Employee",
  "Update Employee Role",
  "View All Roles",
  "Add Role",
  "View All Departments",
  "Add Department",
];

const questions = [
  {
    type: "list",
    name: "options",
    choices: options,
    message: "What would you like to do?",
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
  inquirer.prompt(questions).then(function (questions) {
    switch (questions.options) {
      case "View All Employees":
        selectAll();
        init();
        break;
    }
  });

init();
