import React from "react";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
