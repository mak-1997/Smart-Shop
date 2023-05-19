
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const ReqAdminAuth = ({ children }) => {
  const toast = useToast();
  const { isAuth } = useSelector((state) => state.admin);

  if (!sessionStorage.getItem("admin")) {
    toast({
      title: "Login Required",
      description: "",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return <Navigate to="/admin" />;
  }

  return children;
};

export default ReqAdminAuth;
