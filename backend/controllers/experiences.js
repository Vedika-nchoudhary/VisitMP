const Arts = require("../models/art");
const Cuisine = require("../models/cuisine");
const Place = require("../models/place");

const getExperiences = async (req, res) => {
  try {
    const artforms = await Arts.find().limit(8);
    const cuisines = await Cuisine.find().limit(8);
    const ecoTourism = await Place.find({
      type: "ecotourism",
    }).limit(8);

    res.json({
      ecoTourism,
      artforms,
      cuisine: cuisines,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getExperienceDetail = async (req, res) => {
  try {
    const { type, id } = req.params;

    let data;

    if (type === "artforms") {
      data = await Arts.findById(id);
    } else if (type === "cuisine") {
      data = await Cuisine.findById(id);
    } else if (type === "ecoTourism") {
      data = await Place.findById(id);
    }

    if (!data) {
      return res.status(404).json({
        message: "Experience not found",
      });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getExperiences,
  getExperienceDetail,
};
