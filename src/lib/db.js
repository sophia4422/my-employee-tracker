const mysql = require("mysql2/promise");

const dbOptions = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "workplace_db",
};

const db = mysql.createConnection(dbOptions);

//query the database
//db.query

module.exports = {
  db,
};
