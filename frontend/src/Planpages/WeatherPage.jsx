import React, { useEffect, useState } from "react";
import WeatherHero from "./WeatherHero";
import WeatherForecast from "./WeatherForecast";
import WeeklyForecast from "./WeeklyForecast";
import TravelRecommendations from "./TravelRecommendations";

import { getWeather } from "../api/weatherApi";

function WeatherPage() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Bhopal");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      const data = await getWeather(cityName);
      setWeatherData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // fetch when city changes
  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city]);

  return (
    <div>
      <WeatherHero
        weatherData={weatherData}
        onSearch={(value) => setCity(value)}
      />

      <WeatherForecast weatherData={weatherData} />
      <WeeklyForecast weatherData={weatherData} />
      <TravelRecommendations weatherData={weatherData} />
    </div>
  );
}

export default WeatherPage;
