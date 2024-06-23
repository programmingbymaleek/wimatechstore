import React, { useState } from "react";
import NavIcon from "../nav-icon-component/navicon.component";
import NavItem from "../nav-item-component/navitem.component";
import classes from "./navbar.style.module.scss";
import CustomList from "../list-component/list.component";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as WhiteSearchIcon } from "../../assets/icons/white-search.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/shopping_cart.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/bars.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

import { useSelector } from "react-redux";
import { SignOutUser } from "../../utilis/firebase.utils";
import { useNavigate } from "react-router-dom";
import Text from "../text-component/text.component";
import InputBox from "../inputbox-component/inputbox.component.jsx";
import Button from "../button-component/button.component.jsx";
import CartDropDown from "../cart-drop-down-component/cartDropDown";
import { setToogleCart } from "../../reduxtoolkit/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const { toggleCart } = useSelector((state) => state.cart);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();
  const navigateToHome = () => {
    SignOutUser();
    console.log("signed user out");
    navigate("/wimatechstore");
  };

  const toogleCart = () => {
    dispatch(setToogleCart(!toggleCart));
  };

  return (
    <nav className={`py-8 ${classes[`navigation`]}`}>
      <CustomList
        liststyle={`hidden flex-row justify-between w-full items-center px-4 large:px-8  large:flex ${
          classes[`navigation-list`]
        }`}
      >
        <CustomList liststyle="flex flex-row gap-12 items-center">
          <div>
            <LogoIcon className="w-28 h-auto" />
          </div>
          <CustomList liststyle="flex flex-row gap-8 items-center">
            <Link to={"/wimatechstore"}>
              <Text
                texttype="text-normal"
                textstyles=" hover:text-blue-800 text-gray-700 font-medium"
              >
                Home
              </Text>
            </Link>
            <Link to={"/wimatechstore"}></Link>
            <Link
              to={"/wimatechstore/shop"}
              texttype="text-normal"
              textstyles=" hover:text-blue-800 text-gray-700 font-medium"
            >
              Shop
            </Link>
            <Link to={"/wimatechstore"}>
              <Text
                texttype="text-normal"
                textstyles=" hover:text-blue-800 text-gray-700 font-medium"
              >
                Categories
              </Text>
            </Link>
            <Link to={"/wimatechstore"}>
              <Text
                texttype="text-normal"
                textstyles=" hover:text-blue-800 text-gray-700 font-medium"
              >
                Contact Us
              </Text>
            </Link>
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
          <CartIcon className="w-5 h-5" onClick={toogleCart} />
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
              <LogoIcon className="w-20 h-auto" />
            </li>
            <MenuIcon
              className="w-5 h-5 cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          </div>
          {showMenu && (
            <div className="w-[100vw] bg-black/50 z-20 absolute top-0 right-0 h-screen flex justify-end">
              <CustomList liststyle="flex flex-col gap-6 items-start   xsmall:w-[18rem] w-10/12  bg-white h-full  xsmall:pl-8 pl-4 xsmall:pt-8 pt-6">
                <div className="w-full flex justify-end xsmall:pr-8 pr-4">
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
                <Link to={"/wimatechstore"}>
                  <Text
                    texttype="text-normal"
                    textstyles=" hover:text-blue-800 text-gray-700 font-medium"
                  >
                    Shop
                  </Text>
                </Link>
                <Link to={"/wimatechstore"}>
                  <Text
                    texttype="text-normal"
                    textstyles=" hover:text-blue-800 text-gray-700 font-medium"
                  >
                    Categories
                  </Text>
                </Link>
                <Link to={"/wimatechstore"}>
                  <Text
                    texttype="text-normal"
                    textstyles=" hover:text-blue-800 text-gray-700 font-medium"
                  >
                    Contact Us
                  </Text>
                </Link>
                <CustomList liststyle="flex flex-col gap-8 items-start w-fit pt-5">
                  {currentUser ? (
                    <>
                      <span>{currentUser.displayName}</span>
                      <button onClick={navigateToHome}>
                        <NavItem item="Logout" />
                      </button>
                    </>
                  ) : (
                    <div className="flex flex-col gap-6 ">
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
                  <div className="flex flex-row gap-1">
                    <Text textstyles="flex flex-row border border-gray-400 rounded-sm py-2 px-4 gap-2">
                      <InputBox
                        inputstyles="border-0 focus:border-0 focus:ring-0"
                        placeholder="Search..."
                      />
                    </Text>
                    <Button
                      buttontype="primary-button"
                      buttonstyles="px-2 py-2 w-fit"
                    >
                      {" "}
                      <WhiteSearchIcon className="w-5 h-5" />
                    </Button>
                  </div>
                  <Button
                    buttontype="secondary-button"
                    buttonstyles="w-full py-2 px-4"
                    buttonFunc={() => setShowMenu(false)}
                  >
                    Go to Cart
                  </Button>
                </CustomList>
              </CustomList>
            </div>
          )}
        </CustomList>
      </CustomList>
      {toggleCart && <CartDropDown />}
    </nav>
  );
};

export default Navbar;
