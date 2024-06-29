import React from "react";
import Button from "../button-component/button.component";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg";
import Text from "../text-component/text.component";

const NumberInput = ({ value, decrementFunc, incrementFunc }) => {
  return (
    <div className="max-w-xs mx-auto h-10 flex flex-row items-center">
      <Button
        buttontype="icon-button"
        buttonstyles="bg-white border border-100 rounded-md justify-center items-center w-9 h-full flex flex-row hover:bg-gray-100/50"
        buttonFunc={decrementFunc}
      >
        <MinusIcon className="text-gray-900 w-2.5 h-2.5" />
      </Button>
      <Text
        texttype="text-normal"
        textstyles="text-gray-900 font-medium text-sm text-center bg-transparent border-0 flex-shrink-0 w-10"
      >
        {value}
      </Text>
      <Button
        buttontype="icon-button"
        buttonstyles="bg-white border border-100 rounded-md justify-center items-center flex-shrink-0 w-9 h-full flex hover:bg-gray-100/50"
        buttonFunc={incrementFunc}
      >
        <PlusIcon className="text-gray-900 w-2.5 h-2.5" />
      </Button>
    </div>
  );
};

export default NumberInput;
