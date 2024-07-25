import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const { role } = useSelector((state) => state.auth);
  if (role === "provider") return <Navigate to="/provider/dashboard" replace />;
  else if (role === "admin") return <Navigate to="/admin/dashboard" replace />;
  else return <Navigate to="/login" replace />;
};

export default HomePage;
