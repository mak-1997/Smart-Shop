import {  useToast } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";

const ReqAuth = ({ children }) => {
  // console.log(isAuthenticated);
  const toast = useToast();

  if (!sessionStorage.getItem("LoginUser")) {
    toast({
      title: "Login Required",
      description: "",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return <Navigate to="/" />;
  }

  // if (!isAdminAuthenticated) {
  //   return <Navigate to={"/admin"} />;
  // }

  return children;
};

export default ReqAuth;
