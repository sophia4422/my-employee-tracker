const mysql = require("mysql");

const dbOptions = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "workplace_db",
};

const db = mysql.createConnection(dbOptions);

module.exports = {
  db,
};
