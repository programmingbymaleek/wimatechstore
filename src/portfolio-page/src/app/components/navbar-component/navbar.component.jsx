"use client";

import { useState } from "react";
import logo from "../../../../public/assets/images/globe-logo.png";
import close from "../../../../public/assets/icons/close.svg";
import bar from "../../../../public/assets/icons/menu-bar.svg";

import Image from "next/image";

export const NavBarComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-transparent w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-12"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#home" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image src={logo} className="h-10 w-auto" alt="Logo" />
          </a>
        </div>
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
        <div className="hidden md:flex md:flex-1 md:justify-end md:gap-12 uppercase">
          <a
            href="#home"
            className="text-small font-semibold leading-6 text-white hover:text-red-800"
          >
            Home
          </a>
          <a
            href="#aboutus"
            className="text-small font-semibold leading-6 text-white"
          >
            About
          </a>
          <a
            href="#services"
            className="text-small font-semibold leading-6 text-white"
          >
            Services
          </a>
          <a
            href="#contactus"
            className="text-small font-semibold leading-6 text-white"
          >
            Contact
          </a>
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
