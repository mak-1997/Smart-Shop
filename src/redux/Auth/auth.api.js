

import axios from "axios";



export const Register = async (users) => {
  let res = await axios.post(
    `https://smart-shop-render.onrender.com/users`,
    users
  );

  return res.data;
};

export const getUsers = async () => {
  let res = await axios.get("https://smart-shop-render.onrender.com/users");

  return res.data;
};
