import React, { useState } from "react";
import NavItem from "../nav-item-component/navitem.component";
import classes from "./navbar.style.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as WhiteSearchIcon } from "../../assets/icons/white-search.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/shopping_cart.svg";
import { ReactComponent as NewItemCartIcon } from "../../assets/icons/new_cart_item.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/bars.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";

import logo from "../../assets/images/globe-logo.png";

import { useSelector } from "react-redux";
import { SignOutUser } from "../../utilis/firebase.utils";
import { useNavigate } from "react-router-dom";
import Text from "../text-component/text.component";
import InputBox from "../inputbox-component/inputbox.component.jsx";
import Button from "../button-component/button.component.jsx";
import CartDropDown from "../cart-drop-down-component/cartDropDown";
import { setToogleCart } from "../../reduxtoolkit/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import DropDown from "../drop-down-component/drop-down.component.jsx";

const Navbar = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { toggleCart, count } = useSelector((state) => state.cart);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  const navigateToHome = () => {
    SignOutUser();
    console.log("signed user out");
    navigate("/wimatechstore/shop");
  };

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  const toogleCart = () => {
    dispatch(setToogleCart(!toggleCart));
  };

  const categoryData = [
    "iPhone",
    "Samsung",
    "Techno",
    "Huawei",
    "Vivo",
    "Oppo",
    "Xiaomi",
    "Gionee",
    "Itel",
    "Infinix",
  ];

  return (
    <nav className={`py-8 border-b ${classes[`navigation`]}`}>
      <div
        className={`hidden flex-row justify-between w-full items-center px-8 large:px-16  large:flex ${
          classes[`navigation-list`]
        }`}
      >
        <div className="flex flex-row gap-12 items-center">
          <div>
            <img
              src={logo}
              alt="Certified Global Enterprise"
              className="w-12 h-auto"
            />
          </div>
          <div className="flex flex-row gap-8 items-center">
            <Link to={"/wimatechstore"}>
              <Text
                texttype="text-normal"
                textstyles="hover:text-blue-800 text-gray-700 font-medium"
              >
                Home
              </Text>
            </Link>
            <Link to={"/wimatechstore/shop"}>
              <Text
                texttype="text-normal"
                textstyles="hover:text-blue-800 text-gray-700 font-medium"
              >
                Shop
              </Text>
            </Link>
            <div className="relative group">
              <button className="inline-flex items-center">
                <Text
                  texttype="text-normal"
                  textstyles="hover:text-blue-800 text-gray-700 font-medium cursor-pointer"
                >
                  Categories
                </Text>
              </button>
              <div className="group-hover:block hidden h-[30vh] pt-6 absolute">
                <DropDown>
                  {categoryData.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={`category/${item}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </DropDown>
              </div>
            </div>
            <Link to={"/wimatechstore#contact-us-section"}>
              <Text
                texttype="text-normal"
                textstyles="hover:text-blue-800 text-gray-700 font-medium"
              >
                Contact Us
              </Text>
            </Link>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-center w-fit">
          {currentUser && <span>{currentUser.displayName}</span>}
          {showSearch ? (
            <Text textstyles="flex flex-row border border-gray-300 rounded-lg py-2 px-4 gap-2">
              <SearchIcon className="w-5 h-5" />
              <InputBox
                inputstyles="border-0 focus:border-0 focus:outline-0 focus:inset-0"
                placeholder="Search..."
              />
            </Text>
          ) : (
            <SearchIcon
              className="w-5 h-5 cursor-pointer text-[#7b828f] hover:text-gray-600"
              onClick={() => setShowSearch(true)}
            />
          )}
          <Button buttontype="icon-button" buttonstyles="bg-transparent">
            {count === 0 ? (
              <CartIcon
                className="w-5 h-5 text-[#7b828f] hover:text-gray-600"
                onClick={toogleCart}
              />
            ) : (
              <NewItemCartIcon className="w-5 h-5" onClick={toogleCart} />
            )}
          </Button>
          <div className="relative group">
            <Button buttontype="icon-button" buttonstyles="bg-transparent">
              <UserIcon className="w-6 h-6 text-gray-400 hover:text-gray-500" />
            </Button>
            <div className="group-hover:block hidden -left-[140px] h-[30vh] pt-6 absolute">
              <DropDown>
                {currentUser ? (
                  <>
                    <li>
                      <Link
                        to={"/wimatechstore/profile"}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/wimatechstore/cart"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Shopping Cart
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Order History
                      </a>
                    </li>
                    <li>
                      <button
                        className=" px-4 py-2 hover:bg-gray-100 w-full border-0 flex justify-start "
                        onClick={navigateToHome}
                      >
                        <Text texttype="text-normal">Sign Out</Text>
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/wimatechstore/cart"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Shopping Cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/wimatechstore/login"}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        <Text texttype="text-normal">Login</Text>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/wimatechstore/signup"}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        <Text texttype="text-normal">Register</Text>
                      </Link>
                    </li>
                  </>
                )}
              </DropDown>
            </div>
          </div>
        </div>
      </div>

      {/* mobile navigation */}
      <div
        className={`flex flex-row justify-between w-full items-center px-6 large:px-16  large:hidden ${
          classes[`navigation-list`]
        }`}
      >
        <div className="flex flex-row gap-12 items-center w-full">
          <div className="w-full flex flex-row justify-between items-center">
            <img
              src={logo}
              alt="Certified Global Enterprise"
              className="w-8 h-auto"
            />
            <div className="flex flex-row items-center gap-3">
              <div className="relative group">
                <Button buttontype="icon-button" buttonstyles="bg-transparent">
                  <UserIcon className="w-6 h-6 text-gray-400 hover:text-gray-500" />
                </Button>
                <div className="group-hover:block hidden -left-[140px] h-[30vh] pt-6 absolute">
                  <DropDown>
                    {currentUser ? (
                      <>
                        <span>{currentUser.displayName}</span>
                        <li>
                          <Link
                            to={"/wimatechstore/profile"}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/wimatechstore/cart"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Shopping Cart
                          </Link>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Order History
                          </a>
                        </li>
                        <li>
                          <button
                            className=" px-4 py-2 hover:bg-gray-100 w-full border-0 flex justify-start "
                            onClick={navigateToHome}
                          >
                            <Text texttype="text-normal">Sign Out</Text>
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link
                            to="/wimatechstore/cart"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Shopping Cart
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/wimatechstore/login"}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            <Text texttype="text-normal">Login</Text>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/wimatechstore/signup"}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            <Text texttype="text-normal">Register</Text>
                          </Link>
                        </li>
                      </>
                    )}
                  </DropDown>
                </div>
              </div>
              <MenuIcon
                className="w-4.5 h-4.5 cursor-pointer"
                onClick={() => setShowMenu(true)}
              />
            </div>
          </div>
          {showMenu && (
            <div className="w-[100vw] bg-black/50 z-20 absolute top-0 right-0 h-screen flex justify-end">
              <div className="flex flex-col gap-6 items-start   xsmall:w-[18rem] w-10/12  bg-white h-full  xsmall:pl-8 pl-4 xsmall:pt-8 pt-6">
                <div className="w-full flex justify-end xsmall:pr-8 pr-4">
                  <CloseIcon
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => setShowMenu(false)}
                  />
                </div>
                <Link to={"/wimatechstore"} onClick={() => setShowMenu(false)}>
                  <Text
                    texttype="text-normal"
                    textstyles=" hover:text-blue-800 text-gray-700 font-medium"
                  >
                    Home
                  </Text>
                </Link>
                <Link
                  to={"/wimatechstore/shop"}
                  onClick={() => setShowMenu(false)}
                >
                  <Text
                    texttype="text-normal"
                    textstyles=" hover:text-blue-800 text-gray-700 font-medium"
                  >
                    Shop
                  </Text>
                </Link>

                {/* <Link to={"/wimatechstore"}  onClick={() => setShowMenu(false)}>
                  <Text
                    texttype="text-normal"
                    textstyles=" hover:text-blue-800 text-gray-700 font-medium"
                  >
                    Categories
                  </Text>
                </Link> */}
                <Link to={"/wimatechstore"} onClick={() => setShowMenu(false)}>
                  <Text
                    texttype="text-normal"
                    textstyles=" hover:text-blue-800 text-gray-700 font-medium"
                  >
                    Contact Us
                  </Text>
                </Link>
                <div className="flex flex-col gap-8 items-start w-fit">
                  <div className="flex flex-row gap-1">
                    <Text textstyles="flex flex-row border border-gray-400 rounded-sm py-2 px-4 gap-2">
                      <InputBox
                        inputstyles="border-0 focus:border-0 focus:outline-0 focus:inset-0"
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
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {toggleCart && <CartDropDown />}
    </nav>
  );
};

export default Navbar;
