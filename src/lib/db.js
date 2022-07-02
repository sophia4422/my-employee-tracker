const mysql = require("mysql2/promise");

const dbOptions = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "workplace_db",
};

const initDatabase = async () => {
  const db = await mysql.createConnection(dbOptions);
  return db;
};

//query the database
//db.query

module.exports = initDatabase;
