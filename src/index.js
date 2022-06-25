const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      message: "testing",
      name: "test",
      choices: ["yamom", "bob", "node"],
    },
  ])
  .then((answers) => {
    console.log(answers);
  });
