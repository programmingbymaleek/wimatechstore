import React from "react";
import CustomList from "../list-component/list.component";
import Text from "../text-component/text.component";
import classes from "./footersection.style.module.scss";
import { ReactComponent as YoutubeIcon } from "../../assets/icons/youtube.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

const FooterSection = () => {
  return (
    <footer className={`mt-20 bg-slate-500/10 w-full`}>
      <CustomList liststyle="flex max-w-[1280px] medium:px-16 px-8 w-full mx-auto pb-24 pt-2 flex-col large:flex-row justify-between large:gap-32 px-6 large:px-16">
        <li className="w-7/12 large:w-72 flex flex-col  mr-20 large:mr-0 pb-10 large:pt-10 pt-0">
          <LogoIcon className="w-48 h-auto"/>
          <Text texttype="text-normal" textstyles="w-full ">
            Our Company is committed to providing quality products and
            exceptional service to our customers.
          </Text>
        </li>
        <li className="flex flex-col large:flex-row justify-between flex-1 gap-7 pt-0 large:pt-24">
          <CustomList liststyle="flex flex-col gap-3">
            <Text textstyles="uppercase font-medium" texttype="text-normal">
              Navigation
            </Text>
            <CustomList liststyle="flex flex-col gap-1">
              <li>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Home
                </Text>
              </li>
              <li>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Shop
                </Text>
              </li>
              <li>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Contact Us
                </Text>
              </li>
            </CustomList>
          </CustomList>
          <CustomList liststyle="flex flex-col gap-3">
            <Text textstyles="uppercase font-medium" texttype="text-normal">
              Categories
            </Text>
            <CustomList liststyle="flex flex-col gap-1">
              <li>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Electronics
                </Text>
              </li>
              <li>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Fashion
                </Text>
              </li>
              <li>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Beauty & Health
                </Text>
              </li>
              <li>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Home & Garden
                </Text>
              </li>
            </CustomList>
          </CustomList>
          <CustomList liststyle="flex flex-col gap-3">
            <Text textstyles="uppercase font-medium" texttype="text-normal">
              Customer Service
            </Text>
            <CustomList liststyle="flex flex-col gap-1">
              <li>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Electronics
                </Text>
              </li>
              <li>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Contact Us
                </Text>
              </li>
              <li>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Privacy Policy
                </Text>
              </li>
              <li>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Terms & Conditions
                </Text>
              </li>
            </CustomList>
          </CustomList>
        </li>
      </CustomList>
      <div className="max-w-[1280px] medium:px-16 px-8 w-full flex flex-col-reverse justify-start xsmall:justify-between xsmall:items-center mx-auto my-18 xsmall:flex-row">
        <div className="medium:w-3/12 w-4/12 flex tablet:flex-row flex-col tablet:justify-between my-10 gap-4">
          <Text texttype="text-sm">© 2024 Company Inc.</Text>
          <Text texttype="text-sm">English</Text>
        </div>
        <CustomList liststyle="flex flex-row gap-5">
          <FacebookIcon className="bg-white hover:bg-blue-50/50 rounded-full drop-shadow-md p-1.5 box-content medium:h-5 medium:w-5 w-4 h-4 cursor-pointer" />
          <InstagramIcon className="bg-white rounded-full drop-shadow-md p-1.5 box-content medium:h-5 medium:w-5 w-4 h-4 cursor-pointer" />
          <YoutubeIcon className="bg-white rounded-full drop-shadow-md p-1.5 box-content medium:h-5 medium:w-5 w-4 h-4 cursor-pointer" />
          <TwitterIcon className="bg-white rounded-full drop-shadow-md p-1.5 box-content medium:h-5 medium:w-5 w-4 h-4 cursor-pointer" />
        </CustomList>
      </div>
    </footer>
  );
};

export default FooterSection;
