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
import Payment from "../pages/Payment";
import Cart from '../pages/Cart';


const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mensclothing" element={<MensClothing />} />
      <Route path="/admin" element={<Admin />} />
      <Route
        path="/admin/users"
        element={
          <ReqAuth>
            <AdminUsers />
          </ReqAuth>
        }
      />
      <Route
        path="/admin/products"
        element={
          <ReqAuth>
            <AdminProducts />
          </ReqAuth>
        }
      />
      <Route path="/mensclothing/:productId" element={<SingleProduct />} />
      <Route path="/address" element={<Address />} />
      <Route path="/payment" element={<Payment />} />
      <Route path= "/cart" element={<Cart />} />
    </Routes>
  );
};

export default Allroutes;
