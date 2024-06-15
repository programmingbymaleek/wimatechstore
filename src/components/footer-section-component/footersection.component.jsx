import React from "react";
import CustomList from "../list-component/list.component";
import Text from "../text-component/text.component";
import classes from "./footersection.style.module.scss";
import { ReactComponent as YoutubeIcon } from "../../assets/icons/youtube.svg";

const FooterSection = () => {
  return (
    <footer className={`mt-20 bg-[#3a3a3a]/10 w-full`}>
      <CustomList liststyle="max-w-[1280px] px-16 w-full mx-auto py-24 flex-row justify-between gap-12">
        <li className="w-68">
          <img alt="company logo" />
          <Text texttype={"text-normal"}>
            Company description section or just a short about me.
          </Text>
        </li>
        <li className="flex flex-row justify-between flex-1">
          <CustomList liststyle="flex-col gap-5">
            <Text textstyles="capitalize">About Us</Text>
            <CustomList liststyle="flex-col gap-2">
              <li>
                <Text texttype="text-sm">Item</Text>
              </li>
              <li>
                <Text texttype="text-sm">Item</Text>
              </li>
              <li>
                <Text texttype="text-sm">Item</Text>
              </li>
              <li>
                <Text texttype="text-sm">Item</Text>
              </li>
              <li>
                <Text texttype="text-sm">Item</Text>
              </li>
              <li>
                <Text>Item</Text>
              </li>
            </CustomList>
          </CustomList>
          <CustomList liststyle="flex-col gap-5">
            <Text>About Us</Text>
            <CustomList liststyle="flex-col gap-2">
              <li>
                <Text texttype="text-sm">Item</Text>
              </li>
              <li>
                <Text texttype="text-sm">Item</Text>
              </li>
              <li>
                <Text texttype="text-sm">Item</Text>
              </li>
              <li>
                <Text texttype="text-sm">Item</Text>
              </li>
              <li>
                <Text texttype="text-sm">Item</Text>
              </li>
              <li>
                <Text>Item</Text>
              </li>
            </CustomList>
          </CustomList>
          <CustomList liststyle="flex-col gap-5">
            <Text>About Us</Text>
            <CustomList liststyle="flex-col gap-2">
              <li>
                <Text texttype="text-sm">Item</Text>
              </li>
              <li>
                <Text texttype="text-sm">Item</Text>
              </li>
              <li>
                <Text texttype="text-sm">Item</Text>
              </li>
              <li>
                <Text texttype="text-sm">Item</Text>
              </li>
              <li>
                <Text texttype="text-sm">Item</Text>
              </li>
              <li>
                <Text>Item</Text>
              </li>
            </CustomList>
          </CustomList>
        </li>
      </CustomList>
      <div className="max-w-[1280px] px-16 w-full flex flex-row justify-between items-center mx-auto my-18">
        <div className="w-5/12 flex flex-row justify-between my-10">
          <Text texttype="text-sm">© 2022 Company Inc.</Text>
          <Text texttype="text-sm">English</Text>
        </div>
        <CustomList liststyle="flex-row gap-5">
          <YoutubeIcon className="bg-[#ffffff] rounded-full drop-shadow-md p-1.5 box-content h-6 w-6" />
          <YoutubeIcon className="bg-[#ffffff] rounded-full drop-shadow-md p-1.5 box-content h-6 w-6" />
          <YoutubeIcon className="bg-[#ffffff] rounded-full drop-shadow-md p-1.5 box-content h-6 w-6" />
          <YoutubeIcon className="bg-[#ffffff] rounded-full drop-shadow-md p-1.5 box-content h-6 w-6" />
          <YoutubeIcon className="bg-[#ffffff] rounded-full drop-shadow-md p-1.5 box-content h-6 w-6" />
        </CustomList>
      </div>
    </footer>
  );
};

export default FooterSection;
