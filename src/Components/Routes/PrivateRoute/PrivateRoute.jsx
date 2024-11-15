import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { AuthContext } from './../../../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
  //  GET THE CURRENT USER FROM AUTH CONTEXT
  const { getCurrentUser, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <Loading />
    );
  }

  if (getCurrentUser) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
