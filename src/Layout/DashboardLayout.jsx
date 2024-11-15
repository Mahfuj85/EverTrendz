import React, { useContext } from "react";

import { Link, Outlet } from "react-router-dom";
import { AuthContext } from './../Context/AuthProvider';
import Navbar from "../Components/Shared/Navbar/Navbar";
import useAdmin from './../Hooks/useAdmin';
import useSeller from './../Hooks/useSeller';



const DashboardLayout = () => {
  const { getCurrentUser } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(getCurrentUser?.email);
  const [isSeller, isSellerLoading] = useSeller(getCurrentUser?.email);
  return (
    <div>
      <div className="sticky top-0 z-50 shadow-md"><Navbar /></div>
      
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-12 bg-[#F1F5F9]">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu text-base-content w-80 p-0">
            {/* Sidebar content here */}
            <li className="rounded-none">
              <Link
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "bg-[#F1F5F9] rounded-none" : "rounded-none"
                }
              >
                My Orders
              </Link>
            </li>
            {isAdmin && (
              <li className="">
              <Link
                to="/dashboard/all-users"
                className={({ isActive }) =>
                  isActive ? "bg-[#F1F5F9] rounded-none" : "rounded-none"
                }
              >
                All Users
              </Link>
            </li>
            )}
            
            {(isSeller || isAdmin)  && (
              <li className="">
              <Link
                to="/dashboard/add-product"
                className={({ isActive }) =>
                  isActive ? "bg-[#F1F5F9] rounded-none" : "rounded-none"
                }
              >
                Add A Product 
              </Link>
            </li>
            )}

            {isAdmin && (
              <li className="">
                <Link
                  to="/dashboard/all-products"
                  className={({ isActive }) =>
                    isActive ? "bg-[#F1F5F9] rounded-none" : "rounded-none"
                  }
                >
                  All Products 
                </Link>
              </li>
            )}
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
