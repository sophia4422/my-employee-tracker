import inquirer from "inquirer";

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
