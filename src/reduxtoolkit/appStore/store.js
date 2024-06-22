import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../features/user/userSlice";
import { cartReducer } from "../features/cart/cartSlice";
import { productReducer } from "../features/products/productSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;
