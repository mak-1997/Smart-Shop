import { Heading } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import "../styles/Payment.css";

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

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.placeholder]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  console.log(address);
  return (
    <>
      <div>
        <Heading mt={20} textAlign="center">
          Delivery Address
        </Heading>

        <form
          id="form"
          onSubmit={handleSubmit}
          style={{ margin: "auto", marginTop: "3rem" }}
          action=""
        >
          <div style={{ display: "flex", gap: "1rem" }}>
            <input
              type="text"
              value={address.house}
              onChange={handleChange}
              placeholder="house"
              required
            />
            <input
              type="text"
              value={address.city}
              onChange={handleChange}
              placeholder="city"
              required
            />
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <input
              type="text"
              value={address.colony}
              onChange={handleChange}
              placeholder="colony"
              required
            />
            <input
              type="text"
              value={address.state}
              onChange={handleChange}
              placeholder="state"
              required
            />
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <input
              type="text"
              value={address.country}
              onChange={handleChange}
              placeholder="country"
              required
            />
            <input
              type="text"
              value={address.pincode}
              onChange={handleChange}
              placeholder="pincode"
              required
            />
          </div>

          <input
            type="text"
            value={address.landmark}
            onChange={handleChange}
            placeholder="landmark"
            required
          />
          <input
            type="text"
            value={address.phone}
            onChange={handleChange}
            placeholder="phone"
            required
          />
          <button ml={0} colorScheme="blue" size="sm" fontSize="sm">
            use this address
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Address;
