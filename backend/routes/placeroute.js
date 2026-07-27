const express = require("express");
const prouter = express.Router();
const Place = require("../models/place");

prouter.get("/", async (req, res) => {
  try{
  const places = await Place.find();
  res.json(places);
  }catch(error){
     res.status(500).json({
      message: error.message
    });

  }
});


prouter.get("/detail/:id", async (req,res)=>{

  try{
    const place=await Place.findById(req.params.id);
    if(!place){
      return res.status(404).json({
        message: "Place not found"
      });

    }
        res.json(place);
  }catch (error) {
        res.status(500).json({
          message: error.message
      });
  }
});

prouter.get("/category/:category", async (req, res) => {

  try {
    const category = req.params.category;
    const places = await Place.find({
      category: category
    })
  
    res.json(places);
  }catch(error){
    res.status(500).json({
      message: error.message
    })
  }
});

prouter.get("/type/:type", async (req, res) => {
  try {
    const type = req.params.type;

    const places = await Place.find({ type: type });

    res.json(places);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = prouter;