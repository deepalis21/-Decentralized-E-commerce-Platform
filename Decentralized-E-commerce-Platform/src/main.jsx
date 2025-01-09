import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CartProvider } from './components/CartContext.jsx'; // Import the CartProvider
import { ProductProvider } from "./components/ProductContext";
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ProductProvider>
   <CartProvider> 
      <App />
    </CartProvider>
    </ProductProvider>
  </StrictMode>
);
