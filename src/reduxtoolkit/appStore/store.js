import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../features/user/userSlice";
import { cartReducer } from "../features/cart/cartSlice";
import { productReducer } from "../features/products/productSlice";
import { deliveryDetailsReducer } from "../features/deliveryDetails/deliverySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productReducer,
    deliverDetails: deliveryDetailsReducer,
  },
});

export default store;
