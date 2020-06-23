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
  create: () => {
      return new Promise((resolve, reject) => {
          orm.insertOne("burgers", "burger_name", name).then();
      });
    
  },
  update: () => {
    orm.updateOne("burgers", id, "devoured", true).then();
  },
};
module.exports = burger;
