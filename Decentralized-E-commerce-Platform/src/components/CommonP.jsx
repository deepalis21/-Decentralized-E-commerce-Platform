 
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const CommonP = () => {
  // Sample product data

  const products = [
    {
      id: 1,
      name: "T-Shirt Name 1",
      price: "$18.00 - $20.00",
      category: "Men",
      image:
        "https://images.pexels.com/photos/2897529/pexels-photo-2897529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      discount: "14%",
    },
    {
      id: 2,
      name: "T-Shirt Name 10",
      price: "$33.00 - $36.00",
      category: "Women",
      image:
        "https://images.unsplash.com/photo-1564038079594-99ba184fd036?q=80&w=2786&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "T-Shirt Name 2",
      price: "$22.00 - $27.00",
      category: "Women",
      image:
        "https://images.pexels.com/photos/2073302/pexels-photo-2073302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "T-Shirt Name 3",
      price: "$32.00 - $34.00",
      category: "Men",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2786&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "T-Shirt Name 5",
      price: "$18.00 - $20.00",
      category: "Women",
      image:
        "https://images.pexels.com/photos/2073280/pexels-photo-2073280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      discount: "14%",
    },
    {
      id: 6,
      name: "T-Shirt Name 6",
      price: "$33.00 - $36.00",
      category: "Men",
      image:
        "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 7,
      name: "T-Shirt Name 7",
      price: "$22.00 - $27.00",
      category: "Men",
      image:
        "https://images.unsplash.com/photo-1552168212-9ceb61083ba0?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "T-Shirt Name 8",
      price: "$32.00 - $34.00",
      category: "Women",
      image:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
   
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
        <p className="text-gray-500 mb-6">Showing 1–8 of 10 results</p>

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
                <div className="flex mt-4 gap-2">
                  <span className="w-4 h-4 bg-black rounded-full"></span>
                  <span className="w-4 h-4 bg-pink-300 rounded-full"></span>
                  <span className="w-4 h-4 bg-white border rounded-full"></span>
                </div>
                <div className="flex mt-2 gap-2 text-gray-700">
                  <span className="border px-3 py-1 rounded text-xs">XS</span>
                  <span className="border px-3 py-1 rounded text-xs">S</span>
                  <span className="border px-3 py-1 rounded text-xs">M</span>
                  <span className="border px-3 py-1 rounded text-xs">L</span>
                  <span className="border px-3 py-1 rounded text-xs">XL</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default CommonP;
