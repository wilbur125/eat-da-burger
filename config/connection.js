const mysql = require("mysql");

const database = "burgers_db";

const connectionConfig = {
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: database
};

const con = mysql.createConnection(connectionConfig);

const connectionForDbInit = mysql.createConnection({
    host: connectionConfig.host,
    user: connectionConfig.user,
    password: connectionConfig.password,
    multipleStatements: true
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  

module.exports = {con, connectionForDbInit, database};