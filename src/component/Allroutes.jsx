import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "./Admin";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Allroutes;
