const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "test",
    message: "testing",
  },
];

const init = async () = {
  const answers = await inquirer.prompt(questions)
}

init();