import React, { useContext, useState } from "react";
import Dialog from "@mui/material/Dialog";

import { IoClose } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

import ProductZoom from "../ProductZoom/ProductZoom";
import "./ProductModal.css";

import { useNavigate } from "react-router-dom";
import { AuthContext } from './../../../Context/AuthProvider';
import toast from "react-hot-toast";
import { format } from "date-fns";


const ProductModal = ({ props, products }) => {
  const {getCurrentUser} = useContext(AuthContext)
  console.log(getCurrentUser)
  const { title, oldPrice, price, description, date } = products || {};
  const date1 = format(date, "PP");
  const navigate = useNavigate();


    const handleBooking = () => {
      const booking = {
        name: getCurrentUser.displayName,
        email: getCurrentUser.email,
        title,
        price, 
        id: products._id,
        image: products.image1
      };
      fetch("http://localhost:7000/bookings", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        }, 
        body: JSON.stringify(booking)
      })
      .then((res) => res.json())
      .then((data)=> {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Product Booked Successfully!");
          refetch();
          navigate("/dashboard/my-order");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    };

  return (
    <div className="max-w-[600px] md:max-w-[1200px] py-10">
      <Dialog
        open={true}
        className="productModal relative"
        onClose={() => props.closeProductModal()}
      >
        <button
          className="absolute top-5 right-2 text-black min-w-10 w-10 h-10 rounded-full bg-slate-500 flex justify-center items-center"
          onClick={() => props.closeProductModal()}
        >
          <IoClose style={{ color: "#fff", fontSize: "20px" }} />
        </button>
        <h4 className="mt-5 mb-2 text-2xl font-bold ps-10">{title}</h4>
        <div className="flex items-center my-4 ">
              <span className="ml-10 text-lg font-semibold">Posted on: {date1}</span>
              <span className="newPrice text-green-500 ml-10 text-lg font-semibold">
                Price: Tk {price}
              </span>
              <span className="text-red-500 ml-10 font-semibold">Purchase Price: Tk {oldPrice}</span>
            </div>

        <hr />

        <div className="md:flex justify-center mt-2 gap-4 lg:gap-10 px-4 lg:px-10">
          <div className="mb-5">
            <ProductZoom images={products} />
          </div>
          <div className="">
            <div className="product-info space-y-3 mb-2">
              <h2 className="text-2xl font-bold">About the product</h2>
              <p className="mt-4 opacity-80 text-md md:text-sm lg:text-lg">
                {description}
              </p>
              <p className="py-1 rounded-md text-lg"><b>Condition:</b>  {products.condition}</p>
              <p className="py-1 rounded-md text-lg"><b>Purchase Year:</b>  {products.year}</p>
              <p className="py-1 rounded-md text-lg flex"><span className="font-semibold">Verification:</span>  <span>{products.verification === "Verified" ? <TiTick style={{color: "green", fontSize: "30px"} }/> : ""}</span></p>
            </div> 

            <hr />

            <div className="seller-info space-y-3 mt-5">
            <h2 className="text-2xl font-bold">About the seller</h2>
              <p className="text-lg"><b>Name: </b>{products.name} </p>
              <p className="text-lg"><b>Email: </b>{products.email}</p>
              <p className="text-lg"><b>Location: </b>{products.location}</p>
              <p className="text-lg"><b>Contact Number: </b>{products.number}</p>
            </div>

            {/* <p className="py-1 rounded-md text-lg flex"><span className="font-semibold">Verification:</span>  <span>{users.verify === "Verified" ? <TiTick style={{color: "green", fontSize: "30px"} }/> : ""}</span></p> */}

            <div className="flex items-center mt-5">
              <button
                onClick={handleBooking}
                className="mb-5 bg-[#096feb] text-white text-lg md:text-md lg:text-lg px-8 md:px-2 lg:px-8 py-2 rounded-lg capitalize hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ProductModal;
