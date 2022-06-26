const inquirer = require("inquirer");

const questions = [
  {
    type: "list",
    name: "pickAnOption",
    message: "Please select one of the following options to begin",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Quit",
    ],
  },
];

const init = async () => {
  //let in progress = true

  const answers = await inquirer.prompt(questions);
};

init();
