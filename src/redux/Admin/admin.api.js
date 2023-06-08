import axios from "axios";

export const getAdminProduct = async () => {
  let res = await axios.get(`https://smart-shop-render.onrender.com/products`);
  return res.data;
};

export const getAdminUser = async () => {
  let res = await axios.get("https://joyous-pig-stockings.cyclic.app/users");
  return res.data;
};

export const deleteProduct = async (id) => {
  let res = await axios.delete(
    `https://smart-shop-render.onrender.com/products/${id}`
  );
  return res.data;
};

export const deleteUser = async (id) => {
  let res = await axios.delete(
    `https://joyous-pig-stockings.cyclic.app/users/${id}`
  );
  return res.data;
};

export const AddProudctAdmin = async (data) => {
  let res = await axios.post(
    `https://smart-shop-render.onrender.com/products`,
    data
  );
  return res.data;
};

export const updateProductAdmin = async (id, data) => {
  let res = await axios.patch(
    `https://smart-shop-render.onrender.com/products/${id}`,
    data
  );
  return res.data;
};
