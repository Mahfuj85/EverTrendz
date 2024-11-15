import React from "react";
import MainCarousel from "../../HomeCarousel/MainCarousel";
import ProductFilter from "./../ProductFilter/ProductFilter";
import Testimonials from './../../Testimonials/Testimonials';

const Home = () => {
  return (
    <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
      <MainCarousel />
      <ProductFilter />
      <Testimonials />
    </div>
  );
};

export default Home;
