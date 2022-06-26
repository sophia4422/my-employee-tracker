const inquirer = require("inquirer");

const init = async () => {
  //In progress
  let inProgress = true;

  while (inProgress) {
    const options = [
      {
        type: "list",
        name: "pickAnOption",
        message: "Please select one of the following options to begin",
        choices: [
          {
            name: "View all departments",
            value: "viewAllDepartments",
          },
          {
            name: "View all roles",
            value: "viewAllRoles",
          },
          {
            name: "View all employees",
            value: "viewAllEmployees",
          },
          {
            name: "Add a department",
            value: "addADepartment",
          },
          {
            name: "Add a role",
            value: "addARole",
          },
          {
            name: "Add an employee",
            value: "addAnEmployee",
          },
          {
            name: "Update an employee role",
            value: "updateEmployeeRole",
          },
          {
            name: "Quit",
            value: "quit",
          },
        ],
      },
    ];
    const { pickAnOption } = await inquirer.prompt(options);

    if (pickAnOption === "viewAllDepartments") {
      console.log("Here are the departments...");
    }

    if (pickAnOption === "viewAllRoles") {
      console.log("Here are all the roles...");
    }

    if (pickAnOption === "viewAllEmployees") {
      console.log("Here are all the employees...");
    }

    if (pickAnOption === "addADepartment") {
      console.log("DEPARTMENT ADDED!!");
    }

    if (pickAnOption === "addARole") {
      console.log("ROLE ADDED!!");
    }

    if (pickAnOption === "addAnEmployee") {
      console.log("EMPLOYEE ADDED!!");
    }

    if (pickAnOption === "updateEmployeeRole") {
      console.log("Employee role updated...");
    }

    if (pickAnOption === "quit") {
      console.log("Byeeeeeeee!!");
    }
  }

  //if you pick quit, set inProgress to false
};

init();
