const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({

  name: String,
  city: String,
  type: String,
  price: String,
  rating: Number,
  image: String,
  description: String,
  amenities: [String],
  location: String

});

module.exports = mongoose.model("Hotel",  hotelSchema);