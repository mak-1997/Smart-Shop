import { Heading } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import "../styles/Payment.css";
import Shipping from "../component/shipment/Shipping";

const initAdress = {
  house: "",
  colony: "",
  city: "",
  state: "",
  country: "",
  pincode: "",
  landmark: "",
  phone: "",
};

const Address = () => {
  const [address, setAddress] = useState(initAdress);
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setAddress({ ...address, [e.target.placeholder]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate("/payment");
  // };

  console.log(address);
  return (
    <>
      <Navbar />
      <Shipping />
      <Footer />
    </>
  );
};

export default Address;
