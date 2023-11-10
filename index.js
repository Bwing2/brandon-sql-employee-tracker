const inquirer = require("inquirer");
const { db } = require("./config/connection");
const {
  selectAll,
  departments,
  employees,
  roles,
} = require("./scripts/queries");

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

// const endDb = () => {
//   init().then(() => db.end());
// };

const init = () =>
  inquirer.prompt(questions).then((questions) => {
    switch (questions.options) {
      case "View All Employees":
        employees();
        break;
      case "View All Roles":
        roles();
        break;
      case "View All Departments":
        departments();
        break;
      case "Quit":
        console.log("Goodbye!");
        db.end();
        return;
    }
    setTimeout(() => {
      init();
    }, 200);
  });

init();
