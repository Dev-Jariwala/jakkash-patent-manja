import axios from "axios";
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = token;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getProductsByCollectionId({ queryKey }) {
  const [_key, { collectionId, page, limit, sortField, sortOrder, search }] =
    queryKey;
  const { data } = await axios({
    method: "GET",
    url: `${BACKEND_URL}products/${collectionId}`,
    params: { page, limit, sortField, sortOrder, search },
  });
  return data;
}
export async function createProduct(data) {
  const res = await axios({
    method: "POST",
    url: `${BACKEND_URL}products`,
    data,
  });
  return res;
}
export async function updateProductById(data) {
  const res = await axios({
    method: "PUT",
    url: `${BACKEND_URL}products`,
    data,
  });
  return res;
}
export async function getProductById(product_id) {
  const res = await axios({
    method: "GET",
    url: `${BACKEND_URL}products/by_product_id/${product_id}`,
  });
  return res;
}
