import Button from "../button-component/button.component";
import React, { useState } from "react";

const NumberInput = () => {
  let [value, setValue] = useState(0);
  return (
    <form className="max-w-xs mx-auto">
      <div className="relative flex items-center max-w-[8rem]">
        <Button
          buttontype="icon-button"
          buttonstyles="bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-s-lg p-3 h-10 focus:ring-gray-100 focus:outline-none"
          buttonFunc={() => setValue(value--)}
        >
          <svg
            className="w-3 h-3 text-gray-900"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h16"
            />
          </svg>
        </Button>
        <input
          type="text"
          className="bg-gray-50 border-x-0 border-y  h-10 text-center text-gray-900 text-sm focus:ring-0 ring-0 focus:border-0 block w-full py-2.5 "
          value={value}
        />
        <Button
          buttontype="icon-button"
          buttonstyles="bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-s-lg p-3 h-10 focus:ring-gray-100 focus:outline-none"
          buttonFunc={() => setValue(value++)}
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </Button>
      </div>
    </form>
  );
};

export default NumberInput;
