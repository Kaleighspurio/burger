const connection = require("./connection");

const orm = {
  selectAll: (table) => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM ??";
      connection.query(queryString, [table], (err, result) => {
        if (err) {
            reject(err);
        }
        console.log(result, "this is from the orm");
        resolve(result);
      });
    });
  },
  insertOne: (table, colToInsert, value) => {
    const queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(
      queryString,
      [table, colToInsert, value],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  updateOne: (table, id, colToChange, value) => {
    const queryString = "UPDATE ?? WHERE id=? SET ??=?";
    connection.query(
      queryString,
      [table, id, colToChange, value],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
};

module.exports = orm;
