import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../nav-bar-component/navbar.component";

const Navigation = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Navigation;
