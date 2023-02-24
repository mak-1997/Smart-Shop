import axios from "axios";

export const getSingleProduct = async (id) => {
  let res = await axios.get(
    `https://smart-shop-render.onrender.com/products/${id}`
  );
  return res.data;
};
