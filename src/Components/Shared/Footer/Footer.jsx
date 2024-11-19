import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-900 text-gray-100 p-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Logo and Description */}
        <div className="mb-5">
          <Link>
            <img
              src="/Images/logo-footer.png"
              alt="logo"
              className="cursor-pointer w-32"
            />
          </Link>
          <p className="mt-3 text-gray-400">
            Stay trendy with our exclusive collections, high-quality products,
            and affordable prices. Dress to impress every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <button 
              onClick={() => navigate("/category/All")}
              className="hover:text-gray-300 hover:cursor">
                Shop
              </button>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-gray-300">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-bold text-lg mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="/shipping" className="hover:text-gray-300">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-gray-300">
                Returns
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-300">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-3">
            Subscribe to our Newsletter
          </h3>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 mb-3 text-gray-900 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="border-t border-gray-800 mt-8 pt-5 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook-f">
              <FacebookOutlinedIcon />
            </i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram">
              <InstagramIcon />
            </i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter">
              <TwitterIcon />
            </i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter">
              <YouTubeIcon />
            </i>
          </a>
        </div>
        <p className="text-sm text-gray-500">
          &copy; 2024 EverTrendz. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
