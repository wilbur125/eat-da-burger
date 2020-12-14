var connection = require("./connection.js");

function selectAll() {
    connection.query('SELECT * FROM burgers', function (error, results, fields) {
        if (error) throw error;
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
    });
}

function insertOne(thisBurger_name, thisDevoured) {
    connection.query('INSERT INTO burgers SET ?', {burger_name: thisBurger_name, devoured: thisDevoured}, function (error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
}

function updateOne(thisBurger_id, thisDevoured) {
    connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [thisBurger_id, thisDevoured], function (error, results, fields) {
        if (error) throw error;
        // ... thats it really
    });
}

module.exports = {selectAll, insertOne, updateOne};