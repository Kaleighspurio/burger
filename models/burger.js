const orm = require("../config/orm");

const burger = {
  view: () => {
    return new Promise((resolve, reject) => {
      orm.selectAll("burgers").then((result) => {
        const burgerData = result;
        console.log(burgerData, "burgerData");
        resolve(burgerData);
      });
    });
  },
  create: () => {
    orm.insertOne("burgers", "burger_name", name);
  },
  update: () => {
    orm.updateOne("burgers", id, "devoured", true);
  },
};
module.exports = burger;
