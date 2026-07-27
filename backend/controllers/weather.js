const axios = require("axios");

const getWeather = async (req, res) => {
  try {
    const city = req.params.city;

    // CURRENT WEATHER
    const currentWeather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );

    // 5 DAY / 3 HOUR FORECAST
    const forecast = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );

    res.json({
      current: currentWeather.data,
      forecast: forecast.data,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch weather data",
    });
  }
};

module.exports = getWeather;