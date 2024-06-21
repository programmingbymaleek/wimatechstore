import React from "react";

const InputBox = ({ type, ...data }) => {
  return (
    <input
      className={`text-[0.85rem] placeholder:text-[0.85rem] rounded-[5px] text-gray-700 ${data.inputstyles}`}
      type={type}
      name={data.name}
      placeholder={data.placeholder}
      {...data}
    />
  );
};

export default InputBox;
