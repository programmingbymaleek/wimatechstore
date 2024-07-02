import React from "react";

const DropDown = ({ children }) => {
  return (
    <div
      id="dropdown"
      className="z-10 origin-top-right top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 max-h-[180px] h-max overflow-scroll hide-scrollbar"
    >
      <ul className="py-2 text-sm text-gray-700 ">{children}</ul>
    </div>
  );
};

export default DropDown;
