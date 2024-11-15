

import React from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import Loading from './../../Shared/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './../ProductCard/ProductCard';


const ProductPage = () => {
  const { category } = useParams();

  const {
    data: products,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:7000/products");
      const data = await res.json();
      return data;
    },
  });


  const filteredProducts = products
    ? category === "All"
      ? products
      : products.filter((product) => product.category === category)
    : [];
  

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4">
      {/* <h2 className="text-2xl font-bold mb-4">Products in {category}</h2> */}
      <h2 className="text-2xl font-semibold mb-4">
        {category === 'all' ? 'All Products' : `${category.charAt(0).toUpperCase() + category.slice(1)} Products`}
      </h2> 
      
      <div className="lg:col-span-4 w-full">
        <div className="flex flex-wrap justify-center bg-white py-5">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;


