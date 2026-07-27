const Event = require("../models/Event");

// ALL EVENTS
module.exports.allEvents = async (req, res) => {
  try {
    const events = await Event.find({});

    res.json(events);
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch events",
    });
  }
};

// SINGLE EVENT
module.exports.showEvent = async (req, res) => {
  try {
    let { id } = req.params;

    const event = await Event.findById(id);

    res.json(event);
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch event",
    });
  }
};

// EVENTS BY TYPE
module.exports.eventsByType = async (req, res) => {
  try {
    let { type } = req.params;

    const events = await Event.find({
      type: type,
    });

    res.json(events);
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch events",
    });
  }
};