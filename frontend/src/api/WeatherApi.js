import axios from "axios";

export const getWeather = async (city) => {
  const response = await axios.get(
    `http://localhost:8080/weather/${city}`
  );

  return response.data;
};