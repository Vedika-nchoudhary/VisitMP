const express = require("express");

const eRouter = express.Router();

const eventsController = require("../controllers/events.js");

// ALL EVENTS
eRouter.get("/", eventsController.allEvents);

// EVENTS BY TYPE
eRouter.get("/type/:type", eventsController.eventsByType);

// SINGLE EVENT
eRouter.get("/detail/:id", eventsController.showEvent);

module.exports = eRouter;