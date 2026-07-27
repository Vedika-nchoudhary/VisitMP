const express = require("express");
const srouter = express.Router();
const Place = require("../models/place");
const Art = require("../models/art");
const Cuisine = require("../models/cuisine");


srouter.get("/:query", async (req, res) => {
  try {
    const query = req.params.query;

    const places = await Place.find({
      $or: [
        {
          name: {
            $regex: query,
            $options: "i"
          }
        },
        {
          category: {
            $regex: query,
            $options: "i"
          }
        },
        {
          type: {
            $regex: query,
            $options: "i"
          }
        },

        {
          location: {
            $regex: query,
            $options: "i"
          }
        }

      ]

    });

    const arts = await Art.find({
      $or: [
        {
          name: {
            $regex: query,
            $options: "i"
          }
        },
        {
          category: {
            $regex: query,
            $options: "i"
          }
        },
        {
          region: {
            $regex: query,
            $options: "i"
          }
        }
      ]

    });

    const cuisines = await Cuisine.find({
      $or: [
        {
          name: {
            $regex: query,
            $options: "i"
          }
        },
        {
          city: {
            $regex: query,
            $options: "i"
          }
        }

      ]

    });



    res.json({
      places,
      arts,
      cuisines
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Search failed"
    });

  }

});

module.exports = srouter;
