import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing-page-component/landingpage.component";
import LoginSection from "./components/login-section-component/login-section.component";
import SignupSection from "./components/signup-section-component/signup-section.component";
import Navigation from "./components/navigation-section-component/navigation.component";
import { setCurrentUser } from "./reduxtoolkit/features/user/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  getUserDocumentFromFireBase,
} from "./utilis/firebase.utils";

function App() {
  const dispatch = useDispatch();

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
          <Route path="login" element={<LoginSection />} />
          <Route path="signup" element={<SignupSection />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
