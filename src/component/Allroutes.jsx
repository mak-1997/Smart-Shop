import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import MensClothing from "../pages/MensClothing";
import Products from "../pages/Products";
import Users from "../pages/Users";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mensclothing" element={<MensClothing />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/products" element={<Products />} />
    </Routes>
  );
};

export default Allroutes;
