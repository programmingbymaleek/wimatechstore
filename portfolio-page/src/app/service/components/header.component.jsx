import BackgroundImageShuffler from "@/app/components/backgroundimageshuffler-component/background-image-shuffler.component";
import { NavBarComponent } from "@/app/components/navbar-component/navbar.component";
import React from "react";

const Header = ({ children }) => {
  return (
    <>
      <BackgroundImageShuffler>
        <NavBarComponent />
        {children}
      </BackgroundImageShuffler>
    </>
  );
};

export default Header;
