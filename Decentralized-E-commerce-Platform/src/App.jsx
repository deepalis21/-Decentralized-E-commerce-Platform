import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CommonP from "./components/CommonP";
import Footer from "./components/Footer";
import Women from "./components/Women";
import Men from "./components/Men";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Cart from "./components/Cart";
import ProductUpload from "./components/ProductUpload";
import { CartProvider } from "./components/CartContext";
import { ProductProvider } from "./components/ProductContext"; // Import ProductProvider

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/buy-tshirts" element={<CommonP />} />
                <Route path="/women" element={<Women />} />
                <Route path="/men" element={<Men />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/upload-product" element={<ProductUpload />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
