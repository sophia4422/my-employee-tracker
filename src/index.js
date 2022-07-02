const inquirer = require("inquirer");
const database = require("./lib/db");
const { getDepartments } = require("./utils/view");
const { employeeList } = require("./utils/view");
const { getRoles } = require("./utils/view");

const init = async () => {
  //In progress
  let inProgress = true;
  const db = await database();
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
      //display a table in the console with the id and name columns
      //the id will be 1,2,3,4 and the name will be: engineers, finance, legal, sales
      await getDepartments(db);
    }

    if (pickAnOption === "viewAllRoles") {
      console.log("Here are all the roles...");
      //display a table in the console with the columns id, title, department & salary
      //title will be the roles, eg Sales Lead, Software Engineer, Lawyer etc
      //each role will belong to a department eg SE = Engineering, Lawyer = Legal
      await getRoles(db);
    }

    if (pickAnOption === "viewAllEmployees") {
      console.log("Here are all the employees...");
      //view a table in the console with the id, first_name, last-name, title, department, salary and the employee's manager
      await employeeList(db);
    }

    if (pickAnOption === "addADepartment") {
      console.log("DEPARTMENT ADDED!!");
      //when i choose add a department
      //i am prompted with the question 'what is the name of the department?'
      //once i add a department
      //it will update the departments in the tables
      //i am presented with the pickAnOption list again
    }

    if (pickAnOption === "addARole") {
      console.log("ROLE ADDED!!");
      //when i choose add a role
      //i am prompted with the question 'what is the name of the role?'
      //when i add a role
      //i am prompted with the question 'what is the salary of the role?'
      //when i add the salary
      //i am prompted with the question 'what department does the role belong to?'
      //i am given a list of the roles to choose from
      //it will update the tables with role name and salary and department
      //i am presented with the pickAnOption list again
    }

    if (pickAnOption === "addAnEmployee") {
      console.log("EMPLOYEE ADDED!!");
      //when i choose add an employee
      //i am prompted with the question 'what is the employee's first name?'
      //i enter the fn
      //i am prompted with the question 'what is the employee's last name?'
      //i enter the ln
      //i am prompted with the question 'what is the employee's role?'
      //i am given a list of the roles to choose from
      //i am prompted with the question 'who is the employee's manager?'
      //i am given a list of the managers to choose from
      //it will update the employee in the tables
      //i am presented with the pickAnOption list again
    }

    if (pickAnOption === "updateEmployeeRole") {
      console.log("Employee role updated...");
      //when i choose update employee role
      //i am prompted with the question 'which employee do you want to update?'
      //i am given a list of employees to choose from
      //when i select the employee
      //i am prompted with the question 'Which role do you want to assign to the employee?'
      //i am given a list of roles to choose from
      //once i pick a role
      //the tables update
      //i am presented with the pickAnOption list again
    }

    if (pickAnOption === "quit") {
      console.log("Byeeeeeeee!!");

      //set inProgress to false
      inProgress = false;
    }
  }
};

init();
