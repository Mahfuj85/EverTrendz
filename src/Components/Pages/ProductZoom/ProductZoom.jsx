import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
// import "./ProductZoom.css"

const ProductZoom = ({ images }) => {
  const { image1, image2, image3 } = images;
  const zoomSlider = useRef();
  const zoomSliderBig = useRef();

  const [selectedImage, setSelectedImage] = useState(0);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: 1,
    arrows: false,
  };

  const goto = (index) => {
    setSelectedImage(index);
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };

  return (
    <div className="productZoom">
      <div className="productZoom w-96 md:w-[500px] h-[500px] p-0 overflow-hidden rounded-md relative">
        
        <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src={`data:image/png;base64,${image1}`}
              alt=""
            />
          </div>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src={`data:image/png;base64,${image2}`}
              alt=""
            />
          </div>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src={`data:image/png;base64,${image3}`}
              alt=""
            />
          </div>
        </Slider>
      </div>

      <div className="w-full">
        <Slider {...settings} className="zoomSlider pt-8" ref={zoomSlider}>
          <div className="item cursor-pointer mr-5">
            <img
              src={`data:image/png;base64,${image1}`}
              alt=""
              className={`w-32 md:w-40 h-28 object-cover rounded-lg border-2 ${
                selectedImage === 0 ? "border-black" : "border-lime-400"
              }`}
              onClick={() => goto(0)}
            />
          </div>
          <div className="item cursor-pointer">
            <img
              src={`data:image/png;base64,${image2}`}
              alt=""
              className={`w-32 md:w-40 h-28 object-cover rounded-lg ml-0 md:ml-4 border-2 ${
                selectedImage === 1 ? "border-black" : "border-lime-400"
              }`}
              onClick={() => goto(1)}
            />
          </div>
          <div className="item cursor-pointer">
            <img
              src={`data:image/png;base64,${image3}`}
              alt=""
              className={`w-32 md:w-40 h-28 object-cover rounded-lg ml-0 md:ml-4 border-2 ${
                selectedImage === 2 ? "border-black" : "border-lime-400"
              }`}
              onClick={() => goto(2)}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ProductZoom;
