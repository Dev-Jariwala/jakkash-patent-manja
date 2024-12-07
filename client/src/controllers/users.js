import axios from "axios";
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = token;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export async function signIn(data) {
  try {
    const res = await axios({
      method: "post",
      url: `${BACKEND_URL}users`,
      data,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
