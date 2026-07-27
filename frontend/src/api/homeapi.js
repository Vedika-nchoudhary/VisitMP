import axios from "axios";

const BASE_URL = "http://localhost:8080";

export async function getHomeData() {
  const response = await axios.get(BASE_URL);

  return response.data;
}