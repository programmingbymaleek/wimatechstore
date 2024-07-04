import React from "react";
import { ReactComponent as CheckIcon } from "../../assets/icons/check_circle.svg";

const BreadCrumb = ({ stage }) => {
  return (
    <div className="w-full">
      <ol className="items-center flex w-full text-center xsmall:text-sm text-xs font-medium text-gray-500 ">
        <li className=" flex items-center text-blue-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 tablet:after:inline-block tablet:after:content-[''] medium:w-full xlarge:after:mx-10">
          <CheckIcon
            className={`me-2 large:h-[28px] large:w-[28px] xmedium:h-[30px] xmedium:w-[30px] medium:h-[32px] medium:w-[32px] tablet:w-[60px] tablet:h-[60px] w-[15px] h-[15px]  xsmall:block hidden text-blue-600`}
          />
          <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] tablet:after:hidden xxsmall:text-nowrap">
            Set Address
          </span>
        </li>

        <li
          className={` flex items-center after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 tablet:after:inline-block tablet:after:content-[''] medium:w-full xlarge:after:mx-10 ${
            stage > 0 ? "text-blue-700" : "text-primary-700"
          }`}
        >
          <CheckIcon
            className={`me-2 large:h-[28px] large:w-[28px] xmedium:h-[30px] xmedium:w-[30px] medium:h-[32px] medium:w-[32px] tablet:w-[60px] tablet:h-[60px] w-[15px] h-[15px] xsmall:block hidden ${
              stage > 0 ? "text-blue-600" : "text-primary-700"
            }`}
          />
          <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] tablet:after:hidden xxsmall:text-nowrap">
            Select method
          </span>
        </li>

        <li
          className={` flex items-center medium:w-full xlarge:after:mx-10 ${
            stage > 1 ? "text-blue-700" : "text-primary-700"
          }`}
        >
          <CheckIcon
            className={`me-2 xsmall:h-3.5 xsmall:w-3.5 xsmall:block hidden ${
              stage > 1 ? "text-blue-600" : "text-primary-700"
            }`}
          />
          <span className="flex items-center text-wrap">Order summary</span>
        </li>
      </ol>
    </div>
  );
};

export default BreadCrumb;
