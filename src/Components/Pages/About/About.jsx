import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/products/all');
  };

  return (
    <div className="bg-gray-50 py-20 mt-[2px]">
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        About EverTrendz
      </h1>

      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 leading-relaxed">
          At EverTrendz, we believe fashion is an art form that allows you to
          express yourself boldly and creatively. Our mission is to bring you
          the latest trends and timeless styles with a blend of affordability
          and quality. We strive to make fashion accessible, no matter who you
          are or where you come from.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Our Mission */}
        <div className="p-6 border rounded-lg bg-white shadow-md hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600">
            Our mission is to create an inclusive fashion community where
            everyone feels empowered to express their personal style. We
            curate a range of collections that embody confidence,
            sustainability, and modern trends.
          </p>
        </div>

        {/* Our Values */}
        <div className="p-6 border rounded-lg bg-white shadow-md hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Values
          </h2>
          <p className="text-gray-600">
            We believe in sustainability, diversity, and innovation. EverTrendz
            is committed to making fashion that not only looks good but also
            does good. From ethically sourced materials to eco-friendly
            packaging, we aim to reduce our environmental footprint.
          </p>
        </div>

        {/* Why Shop With Us */}
        <div className="p-6 border rounded-lg bg-white shadow-md hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Shop With Us?
          </h2>
          <p className="text-gray-600">
            With a wide variety of styles, we offer everything from everyday
            essentials to statement pieces. Our fast shipping, easy returns,
            and exceptional customer service ensure that your shopping
            experience is smooth and enjoyable.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Join the EverTrendz Journey
        </h2>
        <p className="text-lg text-gray-600">
          We’re more than just a fashion brand—we’re a movement. Join us as we
          continue to push the boundaries of style and innovation. Whether
          you’re looking to reinvent your wardrobe or find timeless classics,
          EverTrendz is here to inspire your journey.
        </p>
      </div>
    </div>
  </div>
  );
};

export default AboutUs;

