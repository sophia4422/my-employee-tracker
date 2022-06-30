const mysql = require("mysql");
const myDatabase = require("../lib/db");

const getDepartments = async (db) => {
  const departments = await this.db.query("SELECT * FROM departments");
  console.log(departments);
};

const employeeList = (db) => {
  const employees = "SELECT * FROM employees";
};

const getRoles = (db) => {
  const roles = "SELECT * FROM roles";
};

module.exports = {
  getDepartments,
  employeeList,
  getRoles,
};
