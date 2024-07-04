import React from "react";
import { ReactComponent as CheckIcon } from "../../assets/icons/check_circle.svg";

const BreadCrumb = ({ stage }) => {
  return (
    <div>
      <ol className="items-center flex w-full max-w-2xl text-center xsmall:text-sm text-xs font-medium text-gray-500 sm:text-base">
        <li className="after:border flex items-center text-blue-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
          <CheckIcon
            className={`me-2 xsmall:h-4 xsmall:w-4 h-3.5 w-3.5 text-blue-600`}
          />
          <span className="flex items-center text-s after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden">
            Set Address
          </span>
        </li>

        <li
          className={`after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10 ${
            stage > 0 ? "text-blue-700" : "text-primary-700"
          }`}
        >
          <CheckIcon
            className={`me-2 xsmall:h-4 xsmall:w-4 h-3.5 w-3.5 ${
              stage > 0 ? "text-blue-600" : "text-primary-700"
            }`}
          />
          <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] small:after:hidden">
            Select method
          </span>
        </li>

        <li
          className={` flex items-center md:w-full xl:after:mx-10 ${
            stage > 1 ? "text-blue-700" : "text-primary-700"
          }`}
        >
          <CheckIcon
            className={`me-2 xsmall:h-4 xsmall:w-4 h-3.5 w-3.5 ${
              stage > 1 ? "text-blue-600" : "text-primary-700"
            }`}
          />
          <span className="flex items-center text-wrap text-wrap">Order summary</span>
        </li>
      </ol>
    </div>
  );
};

export default BreadCrumb;
