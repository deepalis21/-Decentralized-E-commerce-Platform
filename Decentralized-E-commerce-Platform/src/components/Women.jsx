import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext"; // Import CartContext

const Women = () => {
  const { addItemToCart } = useCart(); // Get the addItemToCart function
  const [notification, setNotification] = useState("");

  // Sample product data
  const products = [
    {
      id: 1,
      name: "T-Shirt Name 10",
      price: "$33.00 - $36.00",
      category: "Women",
      image:
        "https://images.unsplash.com/photo-1564038079594-99ba184fd036?q=80&w=2786&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "T-Shirt Name 2",
      price: "$22.00 - $27.00",
      category: "Women",
      image:
        "https://images.pexels.com/photos/2073302/pexels-photo-2073302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "T-Shirt Name 5",
      price: "$18.00 - $20.00",
      category: "Women",
      image:
        "https://images.pexels.com/photos/2073280/pexels-photo-2073280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      discount: "14%",
    },
    {
      id: 4,
      name: "T-Shirt Name 8",
      price: "$32.00 - $34.00",
      category: "Women",
      image:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  // Handle adding product to cart
  const handleAddToCart = (product) => {
    addItemToCart(product);
    setNotification(`${product.name} has been added to your cart!`);
    setTimeout(() => setNotification(""), 2000); // Clear notification after 2 seconds
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="pt-28 max-w-7xl mx-auto px-4 py-12 flex-grow">
        {/* Breadcrumb */}
        <div className="mb-6 text-gray-600 text-sm">
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
          <span> / </span>
          <span className="font-medium text-black">Shop</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">Shop</h1>
        <p className="text-gray-500 mb-6">Showing {products.length} results</p>

        {/* Notification for added product */}
        {notification && (
          <div className="bg-green-100 text-green-800 p-4 rounded mb-6 shadow">
            <p>{notification}</p>
          </div>
        )}

        {/* Sorting */}
        <div className="flex items-center justify-between mb-10">
          <span className="text-gray-500 text-sm">Default sorting</span>
          <select className="border rounded px-4 py-2 text-sm focus:ring focus:outline-none">
            <option>Sort by popularity</option>
            <option>Sort by rating</option>
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.discount}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm text-gray-500">{product.category}</h3>
                <h2 className="font-bold text-lg">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.price}</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
