import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./../../../Context/AuthProvider";

const Navbar = () => {
  const { getCurrentUser, logOut } = useContext(AuthContext);
  const menuItems = (
    <React.Fragment>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      {getCurrentUser?.uid ? (
        <li>
           <div className="dropdown dropdown-end">
      <div tabIndex={0} className="avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://bluetraincollegeprep.com/testimonialimage/20230106122058710.png" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-36 w-56 p-2 shadow">
        <li>
          <a className="justify-between">
            {getCurrentUser?.displayName}
          </a>
        </li>
        <li><Link to="/dashboard">My Orders</Link></li>
        {/* <li><a>{getCurrentUser.uid}</a></li> */}
        <li onClick={logOut}><a>Logout</a></li>
      </ul>
    </div>
        </li>
        // <li>
        //   <button onClick={logOut}>Log Out</button>
        // </li>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
      {getCurrentUser?.uid && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
    </React.Fragment>
  );

  
  return (
    <div className="sticky top-0 z-50 shadow-md">
      <div className="navbar bg-base-100 justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/">
            <img
              src="/Images/logo-transparent.png"
              alt="logo"
              className="w-32 ms-10"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 text-lg font-semibold">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
