import React from "react";

const InputBox = ({ type, ...data }) => {
  return (
    <input
      className={`border border-[#3a3a3a]/20 text-[#3a3a3a] ${data.inputstyles}`}
      type={type}
      name={data.name}
      placeholder={data.placeholder}
      {...data}
    />
  );
};

export default InputBox;
