const mysql = require("mysql2");
const db = require("../lib/db");

const getDepartments = async (db) => {
  const departments = await db.query("SELECT * FROM departments");
  console.table(departments);
};

const employeeList = async (db) => {
  const employees = await db.query(`SELECT * FROM employees`);
  console.table(employees);
};

const getRoles = async (db) => {
  const roles = await db.query(`SELECT * FROM roles`);
  console.table(roles);
};

module.exports = {
  getDepartments,
  employeeList,
  getRoles,
};
