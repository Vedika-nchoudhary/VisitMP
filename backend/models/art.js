const mongoose = require("mongoose");
const artSchema = new mongoose.Schema({
  name: String,

  category: String,
  // dance / music / painting / textile / craft / tribal-art / sculpture

  region: String,

  description: String,

  image: String,
});


module.exports = mongoose.model("Art", artSchema);