import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      src={item.image}
      alt=""
      role="presentation"
      className="cursor-pointer h-[500px] w-[1650px] mt-2"
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
};

export default MainCarousel;
