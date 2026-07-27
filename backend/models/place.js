const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: String,
  category: String,
  type:String,
  location: String,
  description: String,
  image: String,
   coordinates: {
    lat: Number,
    lng: Number
 },
  transport: {
    nearestAirport: String,
    nearestRailway: String,
    roadAccess: String
  }
});

module.exports = mongoose.model("Place", placeSchema);