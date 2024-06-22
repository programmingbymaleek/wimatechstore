import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing-page-component/landingpage.component";
import LoginSection from "./components/login-section-component/login-section.component";
import SignupSection from "./components/signup-section-component/signup-section.component";
import Navigation from "./components/navigation-section-component/navigation.component";
import { setCurrentUser } from "./reduxtoolkit/features/user/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Shop from "./components/shop/shopComponent";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocumentFromFireBase,
} from "./utilis/firebase.utils";
import ShopProduct from "./shop_data_file";
// import { setProducts } from "./reduxtookit/features/products";
import { setProducts } from "./reduxtoolkit/features/products/productSlice";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  getUserDocumentFromFireBase,
} from "./utilis/firebase.utils";

function App() {
  const dispatch = useDispatch();
  //getting shoe collections from fire base
  const getShoeGroups = async () => {
    const groupMaps = await getCategoriesAndDocumentFromFireBase();
    dispatch(setProducts(groupMaps));
  };
  getShoeGroups();

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
    // const dataToAdd = async () => {
    //   await addCollectionAndDocuments("categories", ShopProduct);
    // };
    // dataToAdd();

    const unSubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
        const userData = await fetchUserData(user.uid);
        const { displayName, email } = userData;
        dispatch(setCurrentUser({ displayName, email }));
      } else {
        dispatch(setCurrentUser(null));
      }
    });
    return unSubscribe;
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/wimatechstore" element={<Navigation />}>
          <Route index element={<LandingPage />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="login" element={<LoginSection />} />
          <Route path="signup" element={<SignupSection />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
