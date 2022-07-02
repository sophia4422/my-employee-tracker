//take answer from addDepartmentQuestions in index.js to add it to the table
const addNewDepartment = async (db, addDepartmentAnswers) => {
  await db.query(
    `INSERT INTO departments (department_name) VALUES ("${addDepartmentAnswers.newDepartment}")`
  );
};

const addNewRole = async (db, addRoleAnswers) => {
  await db.query(
    `INSERT INTO roles (title, salary) VALUES ("${addRoleAnswers.newRole}", ("${addRoleAnswers.salary}")`
  );
};

const addNewEmployee = async (db, addEmployeeAnswers) => {
  await db.query(
    `INSERT INTO employees (first_name, last_name,) VALUES ("${addEmployeeAnswers.firstName}", ("${addEmployeeAnswers.lastName}")`
  );
};

module.exports = {
  addNewDepartment,
  addNewRole,
  addNewEmployee,
};
