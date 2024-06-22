import React from "react";
import Text from "../text-component/text.component";

import { ReactComponent as YoutubeIcon } from "../../assets/icons/youtube.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

const FooterSection = () => {
  return (
    <footer className="mt-20 bg-slate-500/10 w-full">
      <div className="list-style-none m-0 p-0 flex max-w-[1280px] medium:px-16 w-full mx-auto pb-24 pt-2 flex-col large:flex-row justify-between large:gap-32 px-6 large:px-16">
        <div className="w-7/12 large:w-72 flex flex-col  mr-20 large:mr-0 pb-10 large:pt-10 pt-0">
          <LogoIcon className="w-48 h-auto" />
          <Text texttype="text-normal" textstyles="w-full ">
            Our Company is committed to providing quality products and
            exceptional service to our customers.
          </Text>
        </div>
        <div className="flex flex-col large:flex-row justify-between flex-1 gap-7 pt-0 large:pt-24">
          <div className="list-style-none m-0 p-0 flex flex-col gap-3">
            <Text textstyles="uppercase font-medium" texttype="text-normal">
              Navigation
            </Text>
            <div className="list-style-none m-0 p-0 flex flex-col gap-1">
              <div>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Home
                </Text>
              </div>
              <div>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Shop
                </Text>
              </div>
              <div>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Contact Us
                </Text>
              </div>
            </div>
          </div>
          <div className="list-style-none m-0 p-0 flex flex-col gap-3">
            <Text textstyles="uppercase font-medium" texttype="text-normal">
              Categories
            </Text>
            <div className="list-style-none m-0 p-0 flex flex-col gap-1">
              <div>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Electronics
                </Text>
              </div>
              <div>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Fashion
                </Text>
              </div>
              <div>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Beauty & Health
                </Text>
              </div>
              <div>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Home & Garden
                </Text>
              </div>
            </div>
          </div>
          <div className="list-style-none m-0 p-0 flex flex-col gap-3">
            <Text textstyles="uppercase font-medium" texttype="text-normal">
              Customer Service
            </Text>
            <div className="list-style-none m-0 p-0 flex flex-col gap-1">
              <div>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Electronics
                </Text>
              </div>
              <div>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Contact Us
                </Text>
              </div>
              <div>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Privacy Policy
                </Text>
              </div>
              <div>
                <Text
                  texttype="text-normal"
                  textstyles="hover:underline cursor-pointer"
                >
                  Terms & Conditions
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] medium:px-16 px-8 w-full flex flex-col-reverse justify-start xsmall:justify-between xsmall:items-center mx-auto my-18 xsmall:flex-row">
        <div className="medium:w-3/12 w-4/12 flex tablet:flex-row flex-col tablet:justify-between my-10 gap-4">
          <Text texttype="text-sm">© 2024 Company Inc.</Text>
          <Text texttype="text-sm">English</Text>
        </div>
        <div className="list-style-none m-0 p-0 flex flex-row gap-5">
          <FacebookIcon className="bg-white hover:bg-blue-50/50 rounded-full drop-shadow-md p-1.5 box-content medium:h-5 medium:w-5 w-4 h-4 cursor-pointer" />
          <InstagramIcon className="bg-white rounded-full drop-shadow-md p-1.5 box-content medium:h-5 medium:w-5 w-4 h-4 cursor-pointer" />
          <YoutubeIcon className="bg-white rounded-full drop-shadow-md p-1.5 box-content medium:h-5 medium:w-5 w-4 h-4 cursor-pointer" />
          <TwitterIcon className="bg-white rounded-full drop-shadow-md p-1.5 box-content medium:h-5 medium:w-5 w-4 h-4 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
