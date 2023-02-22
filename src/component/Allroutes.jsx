import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MensClothing from "../pages/MensClothing";



const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mensclothing" element={<MensClothing />} />
    </Routes>
  );
};

export default Allroutes;
