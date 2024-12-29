import axios from "axios";
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = token;

export const getAnalytics = async ({ collection_id }) => {
    const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_BACKEND_URL}collections/${collection_id}/analytics`,
    });
    return response;
}