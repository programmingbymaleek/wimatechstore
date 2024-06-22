import React from "react";
import { createContext, useState } from "react";

const itemToIncrement = (product_To_Increment_id) => {
  return {
    ...product_To_Increment_id,
    quantity: (product_To_Increment_id.quantity += 1),
  };
};

const itemToDecrement = (productTo_decrement) => {
  return productTo_decrement.quantity > 1
    ? { ...productTo_decrement, quantity: (productTo_decrement.quantity -= 1) }
    : { ...productTo_decrement };
};
export const ProductQuickViewContext = createContext({
  productToView: null,
  setProductToView: () => {},
  size: {},
  setSize: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
});

export const ProductQuickViewProvider = ({ children }) => {
  const [productToView, setProductToView] = useState({});
  const incrementItem = (productToadd_id) => {
    setProductToView(itemToIncrement(productToadd_id));
  };
  const decrementItem = (productTo_decrement) => {
    setProductToView(itemToDecrement(productTo_decrement));
  };
  const value = {
    productToView,
    setProductToView,
    incrementItem,
    decrementItem,
  };
  return (
    <ProductQuickViewContext.Provider value={value}>
      {children}
    </ProductQuickViewContext.Provider>
  );
};
