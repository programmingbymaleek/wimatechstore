import Button from "../button-component/button.component";
import React, { useState } from "react";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg";

const NumberInput = () => {
  let [value, setValue] = useState(0);
  return (
    <form className="max-w-xs mx-auto h-10 flex flex-row">
      <Button
        buttontype="icon-button"
        buttonstyles="bg-white border border-100 rounded-md justify-center items-center w-9 h-full flex flex-row hover:bg-gray-100/50"
        onClick={() => setValue(value--)}
      >
        <MinusIcon className="text-gray-900 w-2.5 h-2.5 " />
      </Button>
      <input
        type="text"
        className="text-gray-900 font-medium text-sm text-center bg-transparent border-0 flex-shrink-0 w-10"
        placeholder=""
        value={value}
        // onChange={(e) => setValue(e.target.value)}
        required=""
      />
      <Button
        buttontype="icon-button"
        buttonstyles="bg-white border border-100 rounded-md justify-center items-center flex-shrink-0 w-9 h-full flex hover:bg-gray-100/50"
        onClick={() => setValue(value++)}
      >
        <PlusIcon className="text-gray-900 w-2.5 h-2.5" />
      </Button>
    </form>
  );
};

export default NumberInput;
