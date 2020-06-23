const orm = require("../config/orm");

const burger = {
  view: () => {
    return new Promise((resolve, reject) => {
      orm.selectAll("burgers").then((result) => {
        // console.log(result, "burgerData");
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
