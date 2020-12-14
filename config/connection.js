require('dotenv').config();
const mysql = require("mysql");
var connection;


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "password",
      database: "burgers_db"
    });
  }

connection.connect(function (err) {
    if (err) {
        console.error("\nError connecting: " + err.stack + "\n");
        return;
    }
    console.log("\nConnected as id " + connection.threadId + "\n");
});
  
module.exports = connection;




// const database = process.env.DB_NAME || "burgers_db";

// const connectionConfig = {
//     host: process.env.DB_HOST || "localhost",
//     user: process.env.DB_USER || "root",
//     password: process.env.DB_PASS || "password",
//     database: database
// };

// const con = mysql.createConnection(connectionConfig);

// const connectionForDbInit = mysql.createConnection({
//     host: connectionConfig.host,
//     user: connectionConfig.user,
//     password: connectionConfig.password,
//     multipleStatements: true
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
  

