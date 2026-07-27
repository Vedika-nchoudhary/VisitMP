const Hotel = require("../models/hotel");

const allhotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

const hotelDetails = async (req, res) => {
  try {
    const hotel = await Hotel.findById(
      req.params.id
    );
    res.json(hotel);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

module.exports = {
  allhotels,
  hotelDetails
};
