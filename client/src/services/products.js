import axios from "axios";
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = token;

export const getProductsByCollectionId = async ({ activeCollection, pagination, debouncedSearch = '' }) => {
  const response = await axios({
    method: "GET",
    url: `${import.meta.env.VITE_BACKEND_URL}collections/${activeCollection}/products?page=${pagination?.pageIndex + 1}&limit=${pagination?.pageSize}&search=${debouncedSearch}`,
    params: {
      pageIndex: pagination.pageIndex,
      pageSize: pagination.pageSize,
    },
  });
  return response;
}
export async function createProduct({ activeCollection, data }) {
  const res = await axios({
    method: "POST",
    url: `${import.meta.env.VITE_BACKEND_URL}collections/${activeCollection}/products`,
    data,
  });
  return res;
}
export async function updateProductById({ activeCollection, product_id, data }) {
  const res = await axios({
    method: "PUT",
    url: `${import.meta.env.VITE_BACKEND_URL}collections/${activeCollection}/products/${product_id}`,
    data,
  });
  return res;
}
export async function getProductById({ activeCollection, product_id }) {
  const res = await axios({
    method: "GET",
    url: `${import.meta.env.VITE_BACKEND_URL}collections/${activeCollection}/products/${product_id}`,
  });
  return res;
}
