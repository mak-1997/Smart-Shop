import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ReqAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state.admin);
  const { isAuth: isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuth);
  console.log(isAuthenticated);

  if (isAuth) {
    return children;
  } else if (isAuthenticated) {
    return children;
  } else {
    alert("Please login First!");
    return <Navigate to={`${!isAuthenticated ? "/" : "/admin"}`} />;
  }
};

export default ReqAuth;
