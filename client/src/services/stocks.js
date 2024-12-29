import axios from "axios";
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = token;
// router.get("/:collection_id/stocks", stocksValidators.validateGetStocks, stocksControllers.getStocksByCollectionId);
// router.post("/:collection_id/products/:product_id/stocks", stocksValidators.validateCreateStock, stocksControllers.createStock);
// router.put("/:collection_id/products/:product_id/stocks/:stock_id", stocksValidators.validateUpdateStock, stocksControllers.updateStockById);

export const getStocksByCollectionId = async ({ activeCollection, pagination, debouncedSearch }) => {
    const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_BACKEND_URL}collections/${activeCollection}/stocks?page=${pagination.pageIndex + 1}&limit=${pagination.pageSize}&search=${debouncedSearch}`,
        params: {
            pageIndex: pagination.pageIndex,
            pageSize: pagination.pageSize,
        },
    });
    return response;
}

export const createStock = async ({ collection_id, product_id, data }) => {
    const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_BACKEND_URL}collections/${collection_id}/products/${product_id}/stocks`,
        data: data,
    });
    return response;
}

export const updateStockById = async ({ collection_id, product_id, stock_id, data }) => {
    const response = await axios({
        method: "PUT",
        url: `${import.meta.env.VITE_BACKEND_URL}collections/${collection_id}/products/${product_id}/stocks/${stock_id}`,
        data: data,
    });
    return response;
}

// router.get("/:collection_id/stocks/:stock_id", stocksControllers.getStockById);

export const getStockById = async ({ collection_id, stock_id }) => {
    const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_BACKEND_URL}collections/${collection_id}/stocks/${stock_id}`,
    });
    return response;
}