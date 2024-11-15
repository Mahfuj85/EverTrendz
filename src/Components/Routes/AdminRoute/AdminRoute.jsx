import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from './../../../Context/AuthProvider';
import useAdmin from './../../../Hooks/useAdmin';
import Loading from './../../Shared/Loading/Loading';

const AdminRoute = ({ children }) => {
  //  GET THE CURRENT USER FROM AUTH CONTEXT
  const { getCurrentUser, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(getCurrentUser?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loading />;
  }

  if (getCurrentUser && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
