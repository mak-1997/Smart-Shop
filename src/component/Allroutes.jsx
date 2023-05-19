import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "../HOC/ReqAuth";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import MensClothing from "../pages/MensClothing";
import AdminProducts from "../pages/AdminProducts";
import AdminUsers from "../pages/AdminUsers";
import SingleProduct from "../pages/SingleProduct";
import Address from "../pages/Address";
import Cart from "../pages/Cart";
import Footer from "./Footer";
import ReqAdminAuth from "../HOC/ReqAdminAuth";
import AdminHome from "../pages/AdminHome";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/mensclothing"
        element={
          <ReqAuth>
            <MensClothing />
            <Footer />
          </ReqAuth>
        }
      />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/adminhome" element={<AdminHome />} />
      <Route
        path="/admin/users"
        element={
          <ReqAdminAuth>
            <AdminUsers />
          </ReqAdminAuth>
        }
      />
      <Route
        path="/admin/products"
        element={
          <ReqAdminAuth>
            <AdminProducts />
          </ReqAdminAuth>
        }
      />
      <Route path="/mensclothing/:productId" element={<SingleProduct />} />
      <Route path="/address" element={<Address />} />
      <Route
        path="/cart"
        element={
          <>
            <Cart />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default Allroutes;
