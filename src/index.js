console.log("hello");
const inquirer = require("inquirer");

//choices

const choices = [
  // {
  //   type: "list",
  //   name: "pickAChoice",
  //   message: "Please select an option to begin",
  //   choices: [
  //     "View all departments",
  //     "View all roles",
  //     "View all employees",
  //     "Add a department",
  //     "Add a role",
  //     "Add an employee",
  //     "Update an employee role",
  //     "Quit",
  //   ],
  // },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "your mom!!!?",
    name: "testing",
  },
];

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "projectTitle",
    validate(answers) {
      if (!answers) {
        return "Please enter a title.";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "projectDescription",
    validate(answers) {
      if (!answers) {
        return "Please enter a description.";
      }
      return true;
    },
  },
  {
    //confirm installation details
    type: "confirm",
    message: "Would you like to add project installation details?",
    name: "confirmInstall",
  },
  {
    //confirm installation details
    // when: "confirmInstall",
    type: "input",
    message: "Enter installation details here:",
    name: "projectInstall",
    when(answers) {
      return answers.confirmInstall;
    },
  },
];

const init = async () => {
  //const readmeInfo = [];

  const answers = await inquirer.prompt(questions);

  console.log("ReadMe generated!");
};

init();
