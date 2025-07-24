import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useContext(AuthContext);

  if (isAdmin === null) return null; // Optional loading fallback

  return isAdmin ? children : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
