const express = require("express");
const irouter = express.Router();
const {generateItinerary,} = require("../controllers/itinerary");

irouter.post("/generate-itinerary",generateItinerary);

module.exports = irouter;
