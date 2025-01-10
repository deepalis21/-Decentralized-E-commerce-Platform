import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";

const MenProducts = () => {
  const { products } = useContext(ProductContext);
  const menProducts = products.Men;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {menProducts.map((product) => (
        <div key={product.name} className="bg-white border rounded-lg overflow-hidden shadow">
          <img
            src={`https://ipfs.infura.io/ipfs/${product.image}`}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-sm text-gray-500">{product.category}</h3>
            <h2 className="font-bold text-lg">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenProducts;









// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "./CartContext";

// const Men = () => {
//   const { addItemToCart } = useCart();
//   const [notification, setNotification] = useState("");

//   // Product list
//   const products = [
//     {
//       id: 1,
//       name: "T-Shirt Name 1",
//       price: "$18.00 - $20.00",
//       category: "Men",
//       image:
//         "https://images.pexels.com/photos/2897529/pexels-photo-2897529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       discount: "14%",
//     },
//     {
//       id: 2,
//       name: "T-Shirt Name 3",
//       price: "$32.00 - $34.00",
//       category: "Men",
//       image:
//         "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2786&auto=format&fit=crop",
//     },
//     {
//       id: 3,
//       name: "T-Shirt Name 6",
//       price: "$33.00 - $36.00",
//       category: "Men",
//       image:
//         "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     },
//     {
//       id: 4,
//       name: "T-Shirt Name 7",
//       price: "$22.00 - $27.00",
//       category: "Men",
//       image:
//         "https://images.unsplash.com/photo-1552168212-9ceb61083ba0?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];

//   // Handle adding product to cart
//   const handleAddToCart = (product) => {
//     addItemToCart(product);
//     setNotification(`${product.name} has been added to your cart!`);
//     setTimeout(() => setNotification(""), 2000); // Clear notification after 2 seconds
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Main Content */}
//       <div className="pt-28 max-w-7xl mx-auto px-4 py-12 flex-grow">
//         {/* Breadcrumb */}
//         <div className="mb-6 text-gray-600 text-sm">
//           <Link to="/" className="text-blue-500 hover:underline">
//             Home
//           </Link>
//           <span> / </span>
//           <span className="font-medium text-black">Men's T-Shirts</span>
//         </div>

//         {/* Title */}
//         <h1 className="text-4xl font-bold mb-4">Men's T-Shirts</h1>
//         <p className="text-gray-500 mb-6">Showing {products.length} results</p>

//         {/* Notification for added product */}
//         {notification && (
//           <div className="bg-green-100 text-green-800 p-4 rounded mb-6 shadow">
//             <p>{notification}</p>
//           </div>
//         )}

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
//             >
//               {/* Product Image */}
//               <div className="relative">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-64 object-cover"
//                 />
//                 {product.discount && (
//                   <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//                     {product.discount}
//                   </span>
//                 )}
//               </div>

//               {/* Product Details */}
//               <div className="p-4">
//                 <h3 className="text-sm text-gray-500">{product.category}</h3>
//                 <h2 className="font-bold text-lg">{product.name}</h2>
//                 <p className="text-gray-600 mt-2">{product.price}</p>
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition"
//                   onClick={() => handleAddToCart(product)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Men;
