import React from "react";

const CustomList = ({ children, liststyle }) => {
  return (
    <div className={` list-style-none m-0 p-0 ${liststyle}`}>{children}</div>
  );
};

export default CustomList;
