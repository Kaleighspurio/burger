const connection = require("./connection");

const orm = {
    selectAll: (table) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: (table, colToInsert, value) => {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, colToInsert, value], (err, result) => {
            if (err) throw err;
        });
    },
    updateOne: (table, id, colToChange, value) => {
        const queryString = "UPDATE ?? WHERE id=? SET ??=?";
        connection.query(queryString, [table, id, colToChange, value], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;