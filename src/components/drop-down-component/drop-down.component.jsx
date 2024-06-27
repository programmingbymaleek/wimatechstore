import React from "react";

const DropDown = ({ children }) => {
  return (
    <div
      id="dropdown"
      class="z-10 absolute top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 h-[180px] overflow-scroll hide-scrollbar"
    >
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">{children}</ul>
    </div>
  );
};

export default DropDown;
