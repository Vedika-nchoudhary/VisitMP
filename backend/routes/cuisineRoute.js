const express = require("express");
const cRouter = express.Router();
const Cuisine = require("../models/cuisine");
const cusinesController = require("../controllers/cuisines.js");

//get all cuisines
cRouter.get("/", cusinesController.allCusines);

cRouter.get("/:id", cusinesController.showCuisine);

module.exports = cRouter;