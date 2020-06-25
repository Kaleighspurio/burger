const express = require("express");
// create router and export the router
const router = require("express").Router();

const burger = require("../models/burger");

// get the data, then render the data to the index handlebars
router.get("/", (req, res) => {
  burger.view().then((data) => {
    // separate the burgers by whether they are devoured or not
    let devoured = data.filter((burger) => burger.devoured == true);
    let notDevoured = data.filter((burger) => burger.devoured == false);
    // put them in an object for the handlebars
    const handlebarObject = {
      devoured: devoured,
      notDevoured: notDevoured,
    };
    res.render("index", handlebarObject);
  });
});

// post to add more burgers
router.post("/api/burgers", (req, res) => {
  const newBurger = req.body.name;
  burger.create(newBurger).then(() => {
    console.log("Burger added succesfully");
    res.json(newBurger);
  });
});

// update to change the devoured to true
router.put("/api/burgers/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  burger.update(id);
});

module.exports = router;
