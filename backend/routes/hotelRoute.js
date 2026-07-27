const express = require("express");
const hrouter = express.Router();
const hotelController = require("../controllers/hotel");

hrouter.get("/booking",hotelController.allhotels);
hrouter.get("/booking/:id", hotelController.hotelDetails);

module.exports = hrouter;

