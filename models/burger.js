const orm = require('../config/orm');


const burger = {
    view:() => {
        orm.selectAll("burgers")
    },
    create: () => {
        orm.insertOne("burgers", "burger_name", name);
    },
    update: () => {
        orm.updateOne("burgers", id, "devoured", true);
    }
}
module.exports = burger;