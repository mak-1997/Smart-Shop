import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MensClothing from "../pages/MensClothing";
import Admin from "./Admin";


const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mensclothing" element={<MensClothing />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Allroutes;
