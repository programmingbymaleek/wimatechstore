import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../nav-bar-component/navbar.component";
import FooterSection from "../footer-section-component/footersection.component";

const Navigation = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <FooterSection/>
    </div>
  );
};

export default Navigation;
