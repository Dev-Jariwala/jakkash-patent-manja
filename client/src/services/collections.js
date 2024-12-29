import axios from "axios";
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = token;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getCollectionsOptions() {
  const response = await axios({
    method: "GET",
    url: `${BACKEND_URL}collections`,
  });
  return response;
}
