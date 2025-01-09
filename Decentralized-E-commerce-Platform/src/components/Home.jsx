import React from "react";

const Home = () => {
  const products = [
    {
      id: 1,
      category: "Men",
      name: "T-Shirt Name 10",
      price: "$33.00 - $36.00",
      image:
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      category: "Women",
      name: "T-Shirt Name 11",
      price: "$21.00 - $25.00",
      image:
        "https://images.unsplash.com/photo-1544274270-3e0f956a2556?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      category: "Women",
      name: "T-Shirt Name 12",
      price: "$23.00 - $28.00",
      image:
        "https://plus.unsplash.com/premium_photo-1668319915433-7a35eefa1fad?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      category: "Men",
      name: "T-Shirt Name 13",
      price: "$21.00 - $25.00",
      image:
        "https://images.unsplash.com/photo-1564628175829-afb5078c0779?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-pink-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-gray-500 text-sm uppercase mb-2">Women</h3>
            <h1 className="text-4xl font-bold mb-4">
              Slick. Modern.
              <br />
              Awesome.
            </h1>
            <p className="text-gray-600 mb-6">
              Discover the latest collection of modern and stylish T-shirts.
            </p>
            <button className="px-6 py-3 bg-black text-white text-sm font-medium uppercase rounded hover:bg-gray-800">
              Shop Collection
            </button>
          </div>
          {/* Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1503342452485-86b7f54527ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Model wearing T-shirt"
              className="rounded-full mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-gray-500 text-center text-sm uppercase mb-2">
          Summer Collection
        </h3>
        <h2 className="text-3xl font-bold text-center mb-10">Popular T-Shirts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
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
      </section>
    </div>
  );
};

export default Home;
