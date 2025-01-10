import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({
    Men: [],
    Women: [],
  });

  const addProduct = (product) => {
    setProducts((prevProducts) => ({
      ...prevProducts,
      [product.category]: [...prevProducts[product.category], product],
    }));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
