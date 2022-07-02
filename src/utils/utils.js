//take answer from addDepartmentQuestions in index.js to add it to the table
const addNewDepartment = (db, addDepartmentAnswers) => {
  db.query(
    `INSERT INTO departments (department_name) VALUES ("${addDepartmentAnswers.newDepartment}")`
  );
};

module.exports = {
  addNewDepartment,
};
