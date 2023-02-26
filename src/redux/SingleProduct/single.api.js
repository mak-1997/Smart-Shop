import axios from "axios";

export const getSingleProduct = async (id) => {
  let res = await axios.get(
    `https://smart-shop-render.onrender.com/products/${id}`
  );
  return res.data;
};

export const updateSingleProductAPI = async (data,change=1) => {
  let res = await axios.patch(
    `https://smart-shop-render.onrender.com/products/${data.id}`, {
      ...data, isAdded: true, orderedQuantity: data.orderedQuantity+change, avilableQuantity: data.avilableQuantity - change,
  });
  return res.data;
}

