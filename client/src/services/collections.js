import axios from "axios";
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = token;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getCollectionsOptions() {
  const response = await axios({
    method: "GET",
    url: `${BACKEND_URL}collection/options`,
  });
  return response.data.collections;
}
export async function setActiveCollection(collection_id) {
  const response = await axios({
    method: "PUT",
    url: `${
      import.meta.env.VITE_BACKEND_URL
    }collection/set_active/${collection_id}`,
  });
  return response.data;
}
