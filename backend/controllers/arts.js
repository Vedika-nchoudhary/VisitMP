const Art = require("../models/art");

module.exports.allArts = async (req, res) => {

  try {
    const arts = await Art.find({});
    res.json(arts);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }

};

module.exports.showArt = async (req, res) => {
  try {
    let { id } = req.params;
    const art = await Art.findById(id);
    if (!art) {
      return res.status(404).json({
        message: "Art not found"
      });
    }
    res.json(art);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });

  }

};