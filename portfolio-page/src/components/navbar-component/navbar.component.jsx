"use client";

import { useEffect, useState } from "react";
import logo from "../../../public/assets/images/globe-logo.png";
import close from "../../assets/icons/close.svg";
import bar from "../../assets/icons/menu-bar.svg";
import flag from "../../assets/icons/flag.svg";

import Image from "next/image";
import Link from "next/link";

export const NavBarComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const stickyPoint = 52;

    const handleScroll = () => {
      if (window.scrollY >= stickyPoint) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-transparent w-full">
      <nav className=" flex flex-col w-full ">
        <div
          className={` bg-white h-[3.3rem] py-2 w-full fixed lg:static shadow-md lg:shadow-none top-0 lg:z-0 z-20`}
        >
          <div className="mx-auto max-w-7xl h-full flex flex-row justify-between items-center md:px-12 px-8">
            <Link href="/" className="h-full flex flex-row gap-3 items-center">
              <span className="sr-only">Your Company</span>
              <Image src={logo} className="h-full w-[2.1rem]" alt="Logo" />
              <p className="capitalize text-smaller font-semibold text-blue-900 w-32 leading-[0.9rem] mt-1">
                Certified Global <br /> Enterprise
              </p>
            </Link>
            <Image
              src={flag}
              className="h-auto w-[1.5rem] lg:block hidden"
              alt="Logo"
            />
            <div className="flex lg:hidden">
              <button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white cursor-pointer hover:bg-white/20">
                <span className="sr-only">Open main menu</span>
                <Image
                  src={bar}
                  width={4}
                  height={4}
                  className="h-5 w-auto"
                  alt="menu bar icon"
                  onClick={toggleMenu}
                />
              </button>
            </div>
          </div>
        </div>
        <div
          className={` w-full transition-all duration-300 z-50 lg:block hidden ${
            isSticky
              ? "fixed top-0 bg-white shadow-md py-2"
              : " bg-transparent py-4"
          }`}
        >
          <div className="lg:flex flex-row hidden justify-between items-center md:px-12 mx-auto max-w-7xl w-full ">
            <Link
              href="/"
              className={`h-full flex-row gap-3 items-center transition-all duration-300 z-50 ${
                isSticky ? "flex" : "hidden"
              }`}
            >
              <Image src={logo} className="h-full w-[2.1rem]" alt="Logo" />
              <p className="capitalize text-smaller font-semibold text-blue-900 w-32 leading-[0.9rem] mt-1">
                Certified Global <br /> Enterprise
              </p>
            </Link>
            <div
              className={`hidden md:flex md:flex-1 md:justify-end md:gap-12 uppercase transition-all duration-300 z-50 ${
                isSticky ? "text-black mt-1" : "text-white mt-0"
              }`}
            >
              <Link
                href="/"
                className="block py-2 text-medium font-medium leading-6 hover:font-semibold"
              >
                Home
              </Link>
              <Link
                href="#"
                className="block py-2 text-medium font-medium leading-6 hover:font-semibold"
              >
                Store
              </Link>
              <Link
                href="/#aboutus"
                className="block py-2 text-medium font-medium leading-6 hover:font-semibold"
              >
                About
              </Link>
              <Link
                href="/#services"
                className="block py-2 text-medium font-medium leading-6 hover:font-semibold"
              >
                Services
              </Link>
              <Link
                href="/#team"
                className="block py-2 text-medium font-medium leading-6 hover:font-semibold"
              >
                Team
              </Link>
              <Link
                href="/#contactus"
                className="block py-2 text-medium font-medium leading-6 hover:font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="lg:hidden">
        <div
          className={`fixed inset-y-0 z-30 w-full overflow-y-auto bg-white px-8 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${
            showMenu ? "right-0" : "-right-[50rem]"
          } `}
        >
          <div className="flex items-center justify-between w-full">
            <a href="#" className="p-1.5 w-fit">
              <span className="sr-only">Your Company</span>
              <Image src={logo} className="h-8 w-auto" alt="Logo" />
            </a>
            <button
              type="button"
              className=" rounded-md text-gray-700 cursor-pointer"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close menu</span>
              <Image src={close} className="h-4 w-auto" alt="close icon" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-normal font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-normal font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Store
                </Link>
                <Link
                  href="/#aboutus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-normal font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  href="/#services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-normal font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </Link>
                <Link
                  href="/#team"
                  className="-mx-3 block rounded-lg px-3 py-2 text-normal font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Team
                </Link>
                <Link
                  href="/#contactus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-normal font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
