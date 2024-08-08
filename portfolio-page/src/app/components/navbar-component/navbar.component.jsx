"use client";

import { useEffect, useState } from "react";
import logo from "../../../../public/assets/images/globe-logo.png";
import close from "../../../../public/assets/icons/close.svg";
import bar from "../../../../public/assets/icons/menu-bar.svg";
import flag from "../../../../public/assets/icons/flag.svg";

import Image from "next/image";

export const NavBarComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");
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
      <nav className=" flex flex-col w-full " aria-label="Global">
        <div className=" bg-white h-[3.3rem] py-2 w-full ">
          <div className="mx-auto max-w-7xl h-full flex flex-row justify-between items-center md:px-12 ">
            <a href="#home" className="h-full flex flex-row gap-3 items-center">
              <span className="sr-only">Your Company</span>
              <Image src={logo} className="h-full w-[2.1rem]" alt="Logo" />
              <p className="capitalize text-smaller font-semibold text-blue-900 w-24 leading-[0.9rem] mt-1">
                Certified Global Enterprise
              </p>
            </a>
            <Image src={flag} className="h-auto w-[1.5rem]" alt="Logo" />
          </div>
        </div>
        <div
          className={` w-full transition-all duration-300 z-50 ${
            isSticky
              ? "fixed top-0 bg-white shadow-md pb-3 pt-2"
              : " bg-transparent py-4"
          }`}
        >
          <div className="flex flex-row justify-between items-center md:px-12 mx-auto max-w-7xl w-full ">
            <a
              href="#home"
              className={`h-full flex-row gap-3 items-center transition-all duration-300 z-50 ${
                isSticky ? "flex" : "hidden"
              }`}
            >
              <span className="sr-only">Your Company</span>
              <Image src={logo} className="h-full w-[2.1rem]" alt="Logo" />
              <p className="capitalize text-smaller font-semibold text-blue-900 w-24 leading-[0.9rem] mt-1">
                Certified Global Enterprise
              </p>
            </a>
            <div className="flex md:hidden">
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
            <div
              className={`hidden md:flex md:flex-1 md:justify-end md:gap-12 uppercase transition-all duration-300 z-50 ${
                isSticky ? "text-black mt-1" : "text-white mt-0"
              }`}
            >
              <a
                href="#home"
                className="text-small font-medium leading-6 hover:font-bold"
              >
                Home
              </a>
              <a
                href="#aboutus"
                className="text-small font-medium leading-6 hover:font-bold"
              >
                About
              </a>
              <a
                href="#services"
                className="text-small font-medium leading-6 hover:font-bold"
              >
                Services
              </a>
              <a
                href="#contactus"
                className="text-small font-medium leading-6 hover:font-bold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="md:hidden" role="dialog" aria-modal="true">
        <div
          className={`fixed inset-y-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${
            showMenu ? "right-0" : "-right-[50rem]"
          } `}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src={logo} className="h-8 w-auto" alt="Logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 cursor-pointer"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close menu</span>
              <Image src={close} className="h-4 w-auto" alt="close icon" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-normal font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#aboutus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-normal font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-normal font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a>
                <a
                  href="#contactus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-normal font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};