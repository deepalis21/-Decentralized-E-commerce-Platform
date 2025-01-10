import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeItemFromCart } = useCart();

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      // Parse the price range (e.g., "$33.00 - $36.00") and take the lower value
      const price = parseFloat(item.price.split("-")[0].replace("$", "").trim());
      return total + price;
    }, 0).toFixed(2); // Keep 2 decimal places
  };

  return (
    <div className="pt-28 max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="mb-6 text-right">
            <h2 className="text-xl font-semibold">
              Total: ${calculateTotal()}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p className="text-gray-600 mt-2">{item.price}</p>
                  <button
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    onClick={() => removeItemFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
