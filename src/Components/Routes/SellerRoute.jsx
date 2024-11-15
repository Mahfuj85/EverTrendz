import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from './../../Context/AuthProvider';
import useSeller from './../../Hooks/useSeller';
import Loading from './../Shared/Loading/Loading';

const SellerRoute = ({ children }) => {
  //  GET THE CURRENT USER FROM AUTH CONTEXT
  const { getCurrentUser, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(getCurrentUser?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return <Loading />;
  }

  if (getCurrentUser && isSeller) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;