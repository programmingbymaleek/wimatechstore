import Button from "../button-component/button.component";
import React, { useState } from "react";

const NumberInput = () => {
  let [value, setValue] = useState(0);
  return (
    <form className="max-w-xs mx-auto h-10 flex flex-row">
      <Button
        buttontype="icon-button"
        buttonstyles="bg-white border border-100 rounded-md justify-center items-center w-9 h-full flex flex-row"
        onClick={() => setValue(value--)}
      >
        <svg
          className="text-gray-900 w-2.5 h-2.5"
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
          ></path>
        </svg>
      </Button>
      <input
        type="text"
        className="text-gray-900 font-medium text-sm text-center bg-transparent border-0 flex-shrink-0 w-10"
        placeholder=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required=""
      />
      <Button
        buttontype="icon-button"
        buttonstyles="bg-white border border-100 rounded-md justify-center items-center flex-shrink-0 w-9 h-full flex"
        onClick={() => setValue(value++)}
      >
        <svg
          className="text-gray-900 w-2.5 h-2.5"
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
          ></path>
        </svg>
      </Button>
    </form>
  );
};

export default NumberInput;
