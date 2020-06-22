const express = require('express');
// create router and export the router
const router = express().route();

const burger = require("../models/burger");

// get to get the data to disply
router.get("/", (req, res) =>{});

// post to add more burgers
router.post("/api/burgers", (req,res) => {});

// update to change the devoured to true
router.put("/api/burgers/:id", (req, res) => {});



module.export = router;