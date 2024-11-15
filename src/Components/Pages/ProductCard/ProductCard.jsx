import React, { useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ProductModal from "./../ProductModal/ProductModal";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductCard = ({ product }) => {
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const viewProductDetails = (id) => {
    setIsOpenProductModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenProductModal(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      
      className="productCard w-80 m-3 transition-all cursor-pointer"
    >
      <div
        className="image h-80 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="h-full w-full object-cover"
          src={isHovered ? `data:image/png;base64,${product.image2}` : `data:image/png;base64,${product.image1}`}
          alt=""
        />

        <div className="actions absolute flex flex-col items-center top-8 right-0 gap-3">
          <Button onClick={() => viewProductDetails(1)}>
            <RemoveRedEyeIcon />
          </Button>
          <Button>
            <FavoriteIcon />
          </Button>
        </div>
      </div>
      <div className="productInfo m-4 ml-2 space-y-2">
        <div className="productName">
          <p className="text-lg font-bold">{product.title}</p>
        </div>
        <div className="price flex items-center gap-8">
          <p className="font-semibold text-green-500 text-xl">Tk {product.price}</p>
          <p className="line-through opacity-60 font-semibold text-red-500">Tk {product.oldPrice}</p>
        </div>
      </div>

      {isOpenProductModal && (
        <ProductModal
          props={{ closeProductModal: handleCloseModal }}
          products={product}
        />
      )}
    </div>
  );
};

export default ProductCard;
