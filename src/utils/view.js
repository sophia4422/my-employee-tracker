const mysql = require("mysql");
const myDatabase = require("../lib/db");

const departmentQuery = "SELECT * FROM departments";

const employeeList = "SELECT * FROM employees";

const rolesQuery = "SELECT * FROM roles";

module.exports = {
  departmentQuery,
  employeeList,
  rolesQuery,
};
