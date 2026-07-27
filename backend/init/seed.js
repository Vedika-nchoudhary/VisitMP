const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const path = require("path")
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const Cuisine = require("../models/cuisine.js");
const cuisineData = require("./cuisineData.js");
const Art = require("../models/art.js");
const artData = require("./artData.js");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const seedData = async () => {
  try {
    await Art.deleteMany();
    await Art.insertMany(artData);

    await Cuisine.deleteMany();
    await Cuisine.insertMany(cuisineData);

    console.log("Data Seeded Successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedData();

