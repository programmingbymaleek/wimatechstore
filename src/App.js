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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Category from "./components/category/categoryComponent";
import Profile from "./components/profile-page-component/profile-page.component";
import { setToken, logout } from "./reduxtoolkit/features/user/userSlice";
import api from "./restapi/apiClient";

function App() {
  // console.log(localStorage.getItem("refresh_token"));
  const { products } = useSelector((state) => state.products);
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log("From Local Storage: ", localStorage.getItem("token"));
  console.log("From redux", token);

  // Initialize Stripe with your publishable API key
  const stripePromise = loadStripe("your_stripe_publishable_key_here");

  // Fetching data collections
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  // useEffect(() => {
  //   const tryRefresh = async () => {
  //     try {
  //       const res = await api.post(
  //         "/auth/refresh-token",
  //         {},
  //         { withCredentials: true }
  //       );
  //       console.log("this is the responds:", res);
  //       dispatch(setToken(res.data.token));
  //     } catch (err) {
  //       console.log("Error page..");
  //       console.warn("Refresh failed. Logging out.");
  //       dispatch(logout());
  //     }
  //   };
  //   if (!token && !sessionStorage.getItem("triedRefresh")) {
  //     console.log("here!............");
  //     sessionStorage.setItem("triedRefresh", "true");
  //     tryRefresh();
  //     console.log("here!............");
  //   }
  // }, []);

  return (
    <Elements stripe={stripePromise}>
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
    </Elements>
  );
}

export default App;
