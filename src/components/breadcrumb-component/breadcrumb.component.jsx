import React from "react";
import { ReactComponent as CheckIcon } from "../../assets/icons/check_circle.svg";

const BreadCrumb = () => {
  return (
    <div>
      <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 sm:text-base">
        <li className="after:border flex items-center text-blue-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
          <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden">
            <CheckIcon className="me-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
            Set Delivery Address
          </span>
        </li>

        <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
          <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden">
            <CheckIcon className="me-2 h-4 w-4 sm:h-5 sm:w-5" />
            Select Payment method
          </span>
        </li>

        <li className="flex shrink-0 items-center">
          <CheckIcon className="me-2 h-4 w-4 sm:h-5 sm:w-5" />
          Order summary
        </li>
      </ol>
    </div>
  );
};

export default BreadCrumb;
