const orm = require("../config/orm");

const burger = {
    // make the query using the orm, then get the results
  view: () => {
    return new Promise((resolve, reject) => {
        // use orm to query, pass in "burgers" as the table name
      orm.selectAll("burgers").then((result) => {
        resolve(result);
      });
    });
  },
  create: (name) => {
      return new Promise((resolve, reject) => {
          orm.insertOne("burgers", "burger_name", name).then((result) => {
            resolve(result);
          });
      });
    
  },
  update: (id) => {
    return new Promise((resolve, reject) => {
     orm.updateOne("burgers", "devoured", true, id).then(
      (result) => {
        resolve(result);
      }
    );     
    })
  },
};
module.exports = burger;
