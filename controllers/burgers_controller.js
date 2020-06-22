const express = require('express');
// create router and export the router
const router = express().route();

const burger = require("../models/burger");

router.get("/", (req, res) =>{});

router.post("/api/burgers", (req,res) => {});



module.export = router;