import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import LandingPage from "./components/landing-page-component/landingpage.component";
import LoginSection from "./components/login-section-component/login-section.component";
import Navbar from "./components/nav-bar-component/navbar.component";
import Navigation from "./components/navigation-section-component/navigation.component";
import SignupSection from "./components/signup-section-component/signup-section.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginSection />} />
          <Route path="signup" element={<SignupSection />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
