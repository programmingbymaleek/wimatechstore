import React from "react";

const InputBox = ({ type, ...data }) => {
  return (
    <input
      className={`text-[0.85rem] placeholder:text-[0.85rem] border border-[#3a3a3a]/20 shadow-sm focus:outline-none focus:border-blue-400 focus:ring-blue-700 focus:ring-1 rounded-[5px] text-gray-700 ${data.inputstyles}`}
      type={type}
      name={data.name}
      placeholder={data.placeholder}
      {...data}
    />
  );
};

export default InputBox;
