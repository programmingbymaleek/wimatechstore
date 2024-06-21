import React from "react";
import InputBox from "../inputbox-component/inputbox.component";
import Text from "../text-component/text.component";

const FormInput = ({ type, ...data }) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={type}>
        <Text textstyles={data.labelstyle} texttype="text-normal">
          {data.name}
        </Text>
      </label>
      <InputBox
        type={type}
        placeholder={data.placeholder}
        name={data.name}
        inputstyles={`${data.inputstyle}`}
        {...data}
      />
    </div>
  );
};

export default FormInput;
