//take answer from addDepartmentQuestions in index.js to add it to the table
const addNewDepartment = async (db, addDepartmentAnswers) => {
  await db.query(
    `INSERT INTO departments (department_name) VALUES ("${addDepartmentAnswers.newDepartment}")`
  );
};

const addNewRole = async (db, addRoleAnswers) => {
  await db.query(
    `INSERT INTO roles (departments_id, title, salary) VALUES ("${addRoleAnswers.roleDepartment}", "${addRoleAnswers.newRole}", ("${addRoleAnswers.salary}")`
  );
};

const addNewEmployee = async (db, addEmployeeAnswers) => {
  await db.query(
    `INSERT INTO employees (first_name, last_name) VALUES ("${addEmployeeAnswers.firstName}", ("${addEmployeeAnswers.lastName}")`
  );
};

//get a list of the departments
const departmentList = (departments) => {
  return departments.map((department) => ({
    name: department.department_name,
    value: department.id,
  }));
};

module.exports = {
  addNewDepartment,
  addNewRole,
  addNewEmployee,
  departmentList,
};
