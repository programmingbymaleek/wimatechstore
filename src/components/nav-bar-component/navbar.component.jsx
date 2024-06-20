import React, { useState } from "react";
import NavIcon from "../nav-icon-component/navicon.component";
import NavItem from "../nav-item-component/navitem.component";
import classes from "./navbar.style.module.scss";
import CustomList from "../list-component/list.component";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/shopping_cart.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/bars.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

import { useSelector } from "react-redux";
import { SignOutUser } from "../../utilis/firebase.utils";
import { useNavigate } from "react-router-dom";
import Text from "../text-component/text.component";
import InputBox from "../inputbox-component/inputbox.component.jsx";
import Button from "../button-component/button.component.jsx";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();
  const navigateToHome = () => {
    SignOutUser();
    console.log("signed user out");
    navigate("/wimatechstore");
  };

  return (
    <nav className={`py-8 ${classes[`navigation`]}`}>
      <CustomList
        liststyle={`hidden flex-row justify-between w-full items-center px-4 large:px-8  large:flex ${
          classes[`navigation-list`]
        }`}
      >
        <CustomList liststyle="flex flex-row gap-12 items-center">
          <li>
            <img alt="company logo" />
          </li>
          <CustomList liststyle="flex flex-row gap-8 items-center">
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
        <CustomList liststyle="flex flex-row gap-8 items-center w-fit">
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
          {showSearch ? (
            <Text textstyles="flex flex-row border border-gray-300 rounded-lg py-2 px-4 gap-2">
              <SearchIcon className="w-5 h-5" />
              <InputBox
                inputstyles="border-0 focus:border-0 focus:ring-0"
                placeholder="Search..."
              />
            </Text>
          ) : (
            <SearchIcon
              className="w-5 h-5 cursor-pointer"
              onClick={() => setShowSearch(true)}
            />
          )}
          <CartIcon className="w-5 h-5" />
          {/* <NavIcon></NavIcon>
          <NavIcon></NavIcon> */}
        </CustomList>
      </CustomList>

      {/* mobile navigation */}
      <CustomList
        liststyle={`flex flex-row justify-between w-full items-center px-6 large:px-16  large:hidden ${
          classes[`navigation-list`]
        }`}
      >
        <CustomList liststyle="flex flex-row gap-12 items-center w-full">
          <div className="w-full flex flex-row justify-between items-center">
            <li>
              <img alt="company logo" />
            </li>
            <MenuIcon
              className="w-5 h-5 cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          </div>
          {showMenu && (
            <div className="w-[100vw] bg-black/50 z-80 absolute top-0 right-0 h-screen flex justify-end">
              <CustomList liststyle="flex flex-col gap-8 items-start   w-[40vw] bg-white h-[full]  pl-8 pt-8">
                <div className="w-full flex justify-end pr-8">
                  <CloseIcon
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => setShowMenu(false)}
                  />
                </div>
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
                <CustomList liststyle="flex flex-col gap-8 items-start w-fit pt-5">
                  {currentUser ? (
                    <>
                      <span>{currentUser.displayName}</span>
                      <button onClick={navigateToHome}>
                        <NavItem item="Logout" />
                      </button>
                    </>
                  ) : (
                    <div className="flex flex-col gap-8 ">
                      <Link
                        to={"/wimatechstore/login"}
                        className="hover:text-blue-800 font-hover:text-blue-800 text-gray-700 font-medium"
                      >
                        <Text texttype="text-normal">Login</Text>
                      </Link>
                      <Link
                        to={"/wimatechstore/signup"}
                        className="hover:text-blue-800 font-hover:text-blue-800 text-gray-700 font-medium"
                      >
                        <Text texttype="text-normal">Register</Text>
                      </Link>
                    </div>
                  )}
                  <Text textstyles="flex flex-row border border-gray-400 rounded-sm py-2 px-4 gap-2">
                    <SearchIcon className="w-5 h-5" />
                    <InputBox
                      inputstyles="border-0 focus:border-0 focus:ring-0"
                      placeholder="Search..."
                    />
                  </Text>

                  <Button
                    buttontype="primary-button"
                    buttonstyles="px-4 py-2 w-full"
                  >
                    {" "}
                    Go to Cart
                  </Button>
                </CustomList>
              </CustomList>
            </div>
          )}
        </CustomList>
      </CustomList>
    </nav>
  );
};

export default Navbar;
