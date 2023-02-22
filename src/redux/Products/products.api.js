import axios from "axios"


export const getProductsDataAPI = async () => {
    let res = await axios.get(`https://smart-shop-render.onrender.com/products`);
    return res.data;
}

export const updateAddProductAPI = async (data) => {
    let res = await axios.patch(`https://smart-shop-render.onrender.com/products/${data.id}`, {
        ...data, isAdded: true, orderedQuantity: 1, avilableQuantity: data.avilableQuantity - 1,
    });
    return res.data;
}

export const updateRemoveProductAPI = async(data) => {
    let res = await axios.patch(`https://smart-shop-render.onrender.com/products/${data.id}`, {
        ...data, isAdded: false, orderedQuantity: 0, avilableQuantity: data.avilableQuantity + 1,
    });
    return res.data;
}