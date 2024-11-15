// SellerAdminRoute.js
import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from './../../Context/AuthProvider';
import useAdmin from './../../Hooks/useAdmin';
import useSeller from './../../Hooks/useSeller';

const SellerAdminRoute = ({ children }) => {
  const { getCurrentUser } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(getCurrentUser?.email);
  const [isSeller, isSellerLoading] = useSeller(getCurrentUser?.email);

  if (isAdminLoading || isSellerLoading) return <div>Loading...</div>;

  // Allow access if the user is either an admin or a seller
  if (isAdmin || isSeller) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default SellerAdminRoute;
