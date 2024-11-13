import { Route, Navigate, Outlet } from "react-router-dom";

import React from "react";
import { useSelector } from "react-redux";
// import { token } from "../redux/auth/authSlice";

const ProtectedRoute = () => {
  const tokens = useSelector((state) => state.user.token);
  // console.log("user", user);
  const t = JSON.parse(localStorage.getItem("user"))?.token;
  console.log("wwwwwwwwwwwwwwwww", t, tokens, tokens || t ? "pppp" : "xxxxx");

  return tokens || t ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
