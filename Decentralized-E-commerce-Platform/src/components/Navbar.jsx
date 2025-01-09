import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide">
          <Link to="/">
            <h1>
              T-SHIRTS
              <span className="block text-sm text-gray-400">store</span>
            </h1>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-gray-700 text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 md:top-auto md:left-auto bg-white md:bg-transparent w-full md:w-auto shadow-md md:shadow-none p-6 md:p-0 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            to="/buy-tshirts"
            className="text-sm font-medium hover:text-gray-700 text-center"
          >
            BUY T-SHIRTS
          </Link>
          <Link
            to="/women"
            className="text-sm font-medium hover:text-gray-700 text-center"
          >
            WOMEN
          </Link>
          <Link
            to="/men"
            className="text-sm font-medium hover:text-gray-700 text-center"
          >
            MEN
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium hover:text-gray-700 text-center"
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-gray-700 text-center"
          >
            CONTACT
          </Link>

          {/* Right Section for Mobile */}
          <div className="flex items-center justify-center space-x-6 mt-4 md:hidden">
            <Link
              to="/search"
              className="text-lg text-gray-500 hover:text-gray-700"
            >
              🔍
            </Link>
            <Link to="/cart" className="relative">
              🛒
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            </Link>
            <Link
              to="/login"
              className="text-sm font-medium hover:text-gray-700"
            >
              LOG IN
            </Link>
          </div>
        </div>

        {/* Right Section for Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/search"
            className="text-lg text-gray-500 hover:text-gray-700"
          >
            🔍
          </Link>
          <Link to="/upload-product" className="text-sm font-medium hover:text-gray-700 text-center">
  Upload Product
</Link>
          <Link to="/cart" className="relative">
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {cartCount}
            </span>
          </Link>
          <Link
            to="/login"
            className="text-sm font-medium hover:text-gray-700"
          >
            LOG IN
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
