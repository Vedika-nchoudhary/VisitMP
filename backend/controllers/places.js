const Place = require("../models/Place");

module.exports.allPlaces = async (req, res) => {
  // const places = await Place.find();
  // res.json(places);
  res.send("places")
};

module.exports.showPlace = async(req, res) => {
    // let { id } = req.params;
    // const place = await Place.findById(id);

    res.send("places by id");
};