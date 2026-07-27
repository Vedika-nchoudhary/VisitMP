const express = require("express");
const Router = express.Router();
const { chatBot} = require("../controllers/chatbot");

Router.post("/chat", chatBot);


module.exports = Router;