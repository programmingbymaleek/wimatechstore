import React from "react";
import Text from "../text-component/text.component";

const OrDivider = () => {
  return (
    <div className="w-full flex flex-row ">
      <span className="border border-[#3a3a3a] w-/5/12"></span>
      <Text>Or</Text>
      <span className="border border-[#3a3a3a] w-/5/12"></span>
    </div>
  );
};

export default OrDivider;
