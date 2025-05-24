import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../features/user/userSlice";
import { cartReducer } from "../features/cart/cartSlice";
import { productReducer } from "../features/products/productSlice";
import { deliveryDetailsReducer } from "../features/deliveryDetails/deliverySlice";
import orderHistory from "../features/orderHistory/orderHistory";
import { authReducer } from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productReducer,
    deliveryDetails: deliveryDetailsReducer,
    orderHistory: orderHistory,
    authentication: authReducer,
  },
});

export default store;
