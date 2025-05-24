import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./components/landing-page-component/landingpage.component";
import LoginSection from "./components/login-section-component/login-section.component";
import SignupSection from "./components/signup-section-component/signup-section.component";
import Navigation from "./components/navigation-section-component/navigation.component";
import { useDispatch, useSelector } from "react-redux";
import Shop from "./components/shop/shopComponent";
import CheckoutWrapper from "./components/checkoutWrapper/checkoutWrapper";
import { fetchAllProducts } from "./reduxtoolkit/features/products/productSlice";
import CartComponent from "./components/cart/cart.component";
import ErrorPage from "./components/error-page-component/error-page.component";
import {
  clearAccessToken,
  setAccessToken,
} from "./reduxtoolkit/features/auth/authSlice";
import { setUser, clearUser } from "./reduxtoolkit/features/user/userSlice";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import Category from "./components/category/categoryComponent";
import Profile from "./components/profile-page-component/profile-page.component";
import { setToken, getToken } from "./restapi/tokenService";
import api from "./restapi/apiClient";

function App() {
  // console.log(localStorage.getItem("refresh_token"));
  const { products } = useSelector((state) => state.products);

  const { user } = useSelector((state) => state.user);
  console.log("this is the user");
  console.log(user);
  const dispatch = useDispatch();

  localStorage.removeItem("token");

  // Initialize Stripe with your publishable API key
  // const stripePromise = loadStripe("your_stripe_publishable_key_here");

  console.log("This is the token: " + getToken());
  // Fetching data collections
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    const bootstrapAuth = async () => {
      try {
        const res = await api.post("/auth/refresh-token");
        const { token, user } = res.data;
        setToken(token); // in-memory from tokenServices
        dispatch(setUser(user));
        dispatch(setAccessToken(token));
      } catch (err) {
        dispatch(clearUser());
        dispatch(clearAccessToken());
      }
    };

    bootstrapAuth();
  }, []);

  return (
    // <Elements stripe={stripePromise}>
    <>
      <Routes>
        <Route path="/wimatechstore" element={<Navigation />}>
          <Route index element={<LandingPage />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="login" element={<LoginSection />} />
          <Route path="signup" element={<SignupSection />} />
          <Route path="cart" element={<CartComponent />} />
          <Route path="checkOut" element={<CheckoutWrapper />} />
          <Route path="errorpage" element={<ErrorPage />} />
          <Route path="category/:category" element={<Category />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
