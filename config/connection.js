// Node Dependency
var mysql = require('mysql');
var connection;
// Set up connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot", // Add your password
  database: "burgers_db" // Add your database
});
// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
// Export the Connection
module.exports = connection;