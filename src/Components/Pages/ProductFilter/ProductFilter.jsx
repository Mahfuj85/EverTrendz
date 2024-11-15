
import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import Loading from './../../Shared/Loading/Loading';

const ProductFilter = () => {
  
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

  // Create an object to hold the first product image for each category
  const categoryImages = {};
  if (products) {
    products.forEach((product) => {
      if (!categoryImages[product.category]) {
        categoryImages[product.category] = product.image1;
      }
    });
  }

  const categories = products ? [
    "All Products",
    ...new Set(products.map((product) => product.category))
  ] : [];
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4">
      <h3 className="text-3xl font-bold m-4">FEATURED CATEGORIES</h3>
          <p className="text-light text-xl font-medium m-4 ">
            Explore our Featured Categories, showcasing a curated selection of
            top products across various categories, designed to inspire and
            cater to your unique needs and preferences.
          </p>

      <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="flex flex-col items-center p-4 rounded bg-gray-100 text-gray-700 hover:bg-gray-300 hover:shadow-xl"
          >
            <img
              src={
                category === 'All Products'
                  ? '/public/all-products.jpg'
                  : `data:image/png;base64,${categoryImages[category]}`
              }
              alt={`${category} category`}
              className="w-full h-96 object-cover mb-2 rounded "
            />
            <span className="mt-5 text-2xl font-bold text-rose-500">{category}</span>
           
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;




