import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-100 w-full">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center md:text-left">
        <h3 className="text-xl font-bold mb-2">
          Subscribe To Get Offers In Your Inbox
        </h3>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod
          condimentum.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="#buy-tshirts" className="text-gray-700 hover:underline">
              Buy T-Shirts
            </a>
            <a href="#women" className="text-gray-700 hover:underline">
              Women
            </a>
            <a href="#men" className="text-gray-700 hover:underline">
              Men
            </a>
            <a href="#about" className="text-gray-700 hover:underline">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:underline">
              Contact
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="#facebook"
              className="bg-white p-3 rounded shadow-md hover:shadow-lg transition"
            >
              <FaFacebookF className="text-black text-xl" />
            </a>
            <a
              href="#twitter"
              className="bg-white p-3 rounded shadow-md hover:shadow-lg transition"
            >
              <FaTwitter className="text-black text-xl" />
            </a>
            <a
              href="#instagram"
              className="bg-white p-3 rounded shadow-md hover:shadow-lg transition"
            >
              <FaInstagram className="text-black text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black text-white py-4 text-center w-full">
        <p className="text-sm">
          Copyright © 2025 T-Shirts Store | Powered by T-Shirts Store
        </p>
      </div>
    </footer>
  );
};

export default Footer;
