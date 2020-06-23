const connection = require("./connection");

const orm = {
    // query the database to get all from the burgers_db
    // Use a promise so we can wait for the query results before moving on.
  selectAll: (table) => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM ??";
      connection.query(queryString, [table], (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
//   query the database to insert a new row into the db
  insertOne: (table, colToInsert, value) => {
    return new Promise((resolve, reject) => {
      const queryString = "INSERT INTO ?? (??) VALUES (?)";
      connection.query(
        queryString,
        [table, colToInsert, value],
        (err, result) => {
          if (err) {
            reject(err);
          }
          console.log(result);
          resolve(result);
        }
      );
    });
  },
//   query the database to change one of the values in an existing row
  updateOne: (table, id, colToChange, value) => {
    return new Promise((resolve, reject) => {
      const queryString = "UPDATE ?? WHERE id=? SET ??=?";
      connection.query(
        queryString,
        [table, id, colToChange, value],
        (err, result) => {
          if (err) {
              reject(err);
          }
          console.log(result);
          resolve(result);
        }
      );
    });
  },
};

module.exports = orm;
