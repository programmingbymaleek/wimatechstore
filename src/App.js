import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./components/landing-page-component/landingpage.component";
import LoginSection from "./components/login-section-component/login-section.component";
import SignupSection from "./components/signup-section-component/signup-section.component";
import Navigation from "./components/navigation-section-component/navigation.component";
import { setCurrentUser } from "./reduxtoolkit/features/user/userSlice";
import { useDispatch } from "react-redux";
import Shop from "./components/shop/shopComponent";
import CheckoutWrapper from "./components/checkoutWrapper/checkoutWrapper";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocumentFromFireBase,
} from "./utilis/firebase.utils";
import { setProducts } from "./reduxtoolkit/features/products/productSlice";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  getUserDocumentFromFireBase,
} from "./utilis/firebase.utils";
import CartComponent from "./components/cart/cart.component";
import ErrorPage from "./components/error-page-component/error-page.component";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const dispatch = useDispatch();

  // Initialize Stripe with your publishable API key
  const stripePromise = loadStripe("your_stripe_publishable_key_here");

  // Fetching shoe collections from Firebase
  useEffect(() => {
    const getShoeGroups = async () => {
      const groupMaps = await getCategoriesAndDocumentFromFireBase();
      dispatch(setProducts(groupMaps));
    };
    getShoeGroups();
  }, [dispatch]);

  const fetchUserData = async (uid) => {
    try {
      const userData = await getUserDocumentFromFireBase(uid);
      return userData ? userData : null;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
        const userData = await fetchUserData(user.uid);
        if (userData) {
          const { displayName, email } = userData;
          dispatch(setCurrentUser({ displayName, email }));
        }
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    // Cleanup subscription on unmount
    return () => {
      unSubscribe();
    };
  }, [dispatch]);

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
        </Route>
      </Routes>
    </Elements>
  );
}

export default App;
