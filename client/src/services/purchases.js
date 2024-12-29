import axios from "axios";
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = token;

// router.get("/:collection_id/purchases", purchaseControllers.getPurchases);
// router.post("/:collection_id/purchases", purchaseControllers.createPurchase);
// router.put("/:collection_id/purchases/:purchase_id", purchaseControllers.updatePurchase);
// router.get("/:collection_id/purchases/:purchase_id", purchaseControllers.getPurchaseById);

export const getPurchases = async ({ activeCollection, pagination, debouncedSearch }) => {
    console.log({ activeCollection, pagination, debouncedSearch });
    const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_BACKEND_URL}collections/${activeCollection}/purchases?page=${pagination.pageIndex + 1}&limit=${pagination.pageSize}&search=${debouncedSearch}`,
        params: {
            pageIndex: pagination.pageIndex,
            pageSize: pagination.pageSize,
        },
    });
    return response;
};

export const createPurchase = async ({ collection_id, data }) => {
    const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_BACKEND_URL}collections/${collection_id}/purchases`,
        data: data,
    });
    return response;
};

export const updatePurchase = async ({ collection_id, data, purchase_id }) => {
    const response = await axios({
        method: "PUT",
        url: `${import.meta.env.VITE_BACKEND_URL}collections/${collection_id}/purchases/${purchase_id}`,
        data,
    });
    return response;
};

export const getPurchaseById = async ({ activeCollection, purchase_id }) => {
    const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_BACKEND_URL}collections/${activeCollection}/purchases/${purchase_id}`,
    });
    return response;
};