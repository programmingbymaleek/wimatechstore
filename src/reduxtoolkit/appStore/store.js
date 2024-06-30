import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../features/user/userSlice";
import { cartReducer } from "../features/cart/cartSlice";
import { productReducer } from "../features/products/productSlice";
import { deliveryDetailsReducer } from "../features/deliveryDetails/deliverySlice";
import orderHistory from "../features/orderHistory/orderHistory";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productReducer,
    deliveryDetails: deliveryDetailsReducer,
    orderHistory: orderHistory,
  },
});

export default store;
