const express = require("express");
const arouter = express.Router();


const {
  signup,
  login,
} = require("../controllers/auth");

arouter.post("/signup", signup);

arouter.post("/login", login);


module.exports = arouter;