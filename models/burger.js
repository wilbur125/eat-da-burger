var connection = require("../config/connection.js");

const burger = {
    selectAll: function(callback) {
        connection.query('SELECT * FROM burgers', function (error, results, fields) {
            if (error) throw error;
            // error will be an Error if one occurred during the query
            // results will contain the results of the query
            // fields will contain information about the returned results fields (if any)

            callback(results);
        });
    },

    insert: function(thisBurger_name, thisDevoured, callback) {
        connection.query('INSERT INTO burgers SET burger_name = ?, devoured = ?', [thisBurger_name, thisDevoured], function (error, results, fields) {
            if (error) throw error;
            console.log('Inserted burger with ID:', results.insertId);
            callback(results);
        });
    },

    update: function(thisBurger_id, thisDevoured, callback) {
        connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [thisDevoured, thisBurger_id], function (error, results, fields) {
            if (error) throw error;
            callback(results);
        });
    }
}

module.exports = burger;