const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  type: {
    type: String, // festival / fair / cultural
  },

  location: {
    type: String,
  },

  date: {
    type: Date,
    required: true,
  },

  description: {
    type: String,
  },

  image: {
    type: String,
  },
});

module.exports = mongoose.model("Event", eventSchema);
