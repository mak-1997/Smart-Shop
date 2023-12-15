

import axios from "axios";



export const Register = async (users) => {
  let res = await axios.post(
    `https://nice-teal-swordfish-gear.cyclic.app/users/register`,
    users
  );

  return res.data;
};

export const getUsers = async () => {
  let res = await axios.get(
    "https://nice-teal-swordfish-gear.cyclic.app/users"
  );

  return res.data;
};
