import axios from "axios"


export const addToCartAPI = async (payload) => {
    const res = await axios.post(`https://smart-shop-render.onrender.com/cart`, {
        ...payload,isAdded:true, orderedQuantity: 1, avilableQuantity : payload.avilableQuantity - 1,
    });

    return res.data;
}

export const removeFromCartAPI = async (id) => {
    const res = await axios.delete(`https://smart-shop-render.onrender.com/cart/${id}`);
    return res.data;
}

export const changeQuantityAPI = async (payload) => {
    const res = await axios.patch(`https://smart-shop-render.onrender.com/cart/${payload.id}`, {
        ...payload,
    });
    return res.data;
}