const Media = require("../models/Media");
const mongoose = require("mongoose");

// GET PLACE GALLERY

exports.getPlaceGallery = async (req, res) => {
  try {

    const media = await Media.find({
      relatedTo: new mongoose.Types.ObjectId(req.params.id),
      relatedModel: "Place",
    });

    res.status(200).json(media);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to fetch gallery",
    });
  }
};

// GET EXPERIENCE GALLERY

exports.getExperienceGallery = async (req, res) => {
  try {

    const media = await Media.find({
      relatedTo: req.params.id,
      relatedModel: "Experience",
    });

    res.status(200).json(media);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to fetch gallery",
    });
  }
};

// GET DESTINATION GALLERY

exports.getDestinationGallery = async (req, res) => {
  try {

    const media = await Media.find({
      relatedTo: req.params.id,
      relatedModel: "Destination",
    });

    res.status(200).json(media);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to fetch gallery",
    });
  }
};

exports.getFeaturedGallery = async (
  req,
  res
) => {

  try {

    const media = await Media.find({
      featured: true,
    }).limit(8);

    res.status(200).json(media);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Failed to fetch gallery preview",
    });
  }
};