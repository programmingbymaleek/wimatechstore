import React from "react";
import NavIcon from "../nav-icon-component/navicon.component";
import NavItem from "../nav-item-component/navitem.component";
import classes from "./navbar.style.module.scss";
import CustomList from "../list-component/list.component";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/shopping_cart.svg";
import { useSelector } from "react-redux";
import { SignOutUser } from "../../utilis/firebase.utils";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const navigateToHome = () => {
    SignOutUser();
    console.log("signed user out");
    navigate("/wimatechstore");
  };

  return (
    <nav className={`py-10 ${classes[`navigation`]}`}>
      <CustomList
        liststyle={`flex flex-row justify-between w-full items-center  ${
          classes[`navigation-list`]
        }`}
      >
        <CustomList liststyle="flex-row gap-10 items-center">
          <li>
            <img alt="company logo" />
          </li>
          <CustomList liststyle="flex-row gap-4 items-center">
            <Link to={"/wimatechstore"}>
              <NavItem item="Home" />
            </Link>
            <NavItem item="Shop" />
            <NavItem item="Categories" />
            <NavItem item="Contact Us" />
          </CustomList>
        </CustomList>
        <CustomList liststyle="flex-row gap-4 items-center w-fit">
          {currentUser ? (
            <>
              <span>{currentUser.displayName}</span>
              <button onClick={navigateToHome}>
                <NavItem item="Logout" />
              </button>
            </>
          ) : (
            <>
              {" "}
              <Link to={"/wimatechstore/login"}>
                {" "}
                <NavItem item="Login" />
              </Link>
              <span>/</span>
              <Link to={"/wimatechstore/signup"}>
                {" "}
                <NavItem item="Register" />
              </Link>
            </>
          )}
          <SearchIcon className="w-5 h-5" />
          <CartIcon className="w-5 h-5" />
          {/* <NavIcon></NavIcon>
          <NavIcon></NavIcon> */}
        </CustomList>
      </CustomList>
    </nav>
  );
};

export default Navbar;
