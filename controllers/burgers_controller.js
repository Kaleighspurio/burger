const express = require("express");
// create router and export the router
const router = require("express").Router();

const burger = require("../models/burger");

// get the data, then render the data to the index handlebars
router.get("/", (req, res) => {
  burger.view().then((data) => {
    const handlebarObject = {
        burgers: data
    };
    console.log(handlebarObject, "this is the handlebar object");
    res.render("index", handlebarObject)
    // TODO still need to have something either here or on handlebar that will list the burgers in separate lists if devoured is true...
});
  
});

// post to add more burgers
router.post("/api/burgers", (req, res) => {
  const newBurger = req.body.name;
  console.log(newBurger);
  burger.create(newBurger).then(() => {
    console.log("Burger added succesfully");
    res.json(newBurger);
  });
});

// update to change the devoured to true
router.put("/api/burgers/:id", (req, res) => {});

module.exports = router;
