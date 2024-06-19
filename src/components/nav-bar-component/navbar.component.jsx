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
import Text from "../text-component/text.component";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const navigateToHome = () => {
    SignOutUser();
    console.log("signed user out");
    navigate("/wimatechstore");
  };

  return (
    <nav className={`py-8 ${classes[`navigation`]}`}>
      <CustomList
        liststyle={`flex flex-row justify-between w-full items-center  ${
          classes[`navigation-list`]
        }`}
      >
        <CustomList liststyle="flex-row gap-12 items-center">
          <li>
            <img alt="company logo" />
          </li>
          <CustomList liststyle="flex-row gap-8 items-center">
            <Link to={"/wimatechstore"}>
              <Text
                texttype="text-normal"
                textstyles=" hover:text-blue-800 text-gray-700 font-medium"
              >
                Home
              </Text>
            </Link>
            <Text
              texttype="text-normal"
              textstyles=" hover:text-blue-800 text-gray-700 font-medium"
            >
              Shop
            </Text>
            <Text
              texttype="text-normal"
              textstyles=" hover:text-blue-800 text-gray-700 font-medium"
            >
              Categories
            </Text>
            <Text
              texttype="text-normal"
              textstyles=" hover:text-blue-800 text-gray-700 font-medium"
            >
              Contact Us
            </Text>
          </CustomList>
        </CustomList>
        <CustomList liststyle="flex-row gap-8 items-center w-fit">
          {currentUser ? (
            <>
              <span>{currentUser.displayName}</span>
              <button onClick={navigateToHome}>
                <NavItem item="Logout" />
              </button>
            </>
          ) : (
            <div className="flex flex-row gap-4 ">
              <Link
                to={"/wimatechstore/login"}
                className="hover:text-blue-800 font-hover:text-blue-800 text-gray-700 font-medium"
              >
                <Text texttype="text-normal">Login</Text>
              </Link>
              <span>/</span>
              <Link
                to={"/wimatechstore/signup"}
                className="hover:text-blue-800 font-hover:text-blue-800 text-gray-700 font-medium"
              >
                <Text texttype="text-normal">Register</Text>
              </Link>
            </div>
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
