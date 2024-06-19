import React from "react";
import CustomList from "../list-component/list.component";
import Text from "../text-component/text.component";
import classes from "./footersection.style.module.scss";
import { ReactComponent as YoutubeIcon } from "../../assets/icons/youtube.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";

const FooterSection = () => {
  return (
    <footer className={`mt-20 bg-slate-500/10 w-full`}>
      <CustomList liststyle="max-w-[1280px] px-16 w-full mx-auto py-24 flex-row justify-between gap-32">
        <li className="w-72 flex flex-col gap-3">
          <img alt="company logo" />
          <Text texttype="text-normal" textstyles="w-full">
            Our Company is committed to providing quality products and
            exceptional service to our customers.
          </Text>
        </li>
        <li className="flex flex-row justify-between flex-1">
          <CustomList liststyle="flex-col gap-3">
            <Text textstyles="uppercase font-medium" texttype="text-normal">
              Navigation
            </Text>
            <CustomList liststyle="flex-col gap-1">
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
          <CustomList liststyle="flex-col gap-3">
            <Text textstyles="uppercase font-medium" texttype="text-normal">
              Categories
            </Text>
            <CustomList liststyle="flex-col gap-1">
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
          <CustomList liststyle="flex-col gap-3">
            <Text textstyles="uppercase font-medium" texttype="text-normal">
              Customer Service
            </Text>
            <CustomList liststyle="flex-col gap-1">
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
      <div className="max-w-[1280px] px-16 w-full flex flex-row justify-between items-center mx-auto my-18">
        <div className="w-3/12 flex flex-row justify-between my-10">
          <Text texttype="text-sm">© 2022 Company Inc.</Text>
          <Text texttype="text-sm">English</Text>
        </div>
        <CustomList liststyle="flex-row gap-5">
          <FacebookIcon className="bg-white hover:bg-blue-50/50 rounded-full drop-shadow-md p-1.5 box-content h-5 w-5 cursor-pointer" />
          <InstagramIcon className="bg-white rounded-full drop-shadow-md p-1.5 box-content h-5 w-5 cursor-pointer" />
          <YoutubeIcon className="bg-white rounded-full drop-shadow-md p-1.5 box-content h-5 w-5 cursor-pointer" />
          <TwitterIcon className="bg-white rounded-full drop-shadow-md p-1.5 box-content h-5 w-5 cursor-pointer" />
        </CustomList>
      </div>
    </footer>
  );
};

export default FooterSection;
