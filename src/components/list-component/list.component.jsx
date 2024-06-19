import React from "react";
import classes from "./list.style.module.scss";
const CustomList = ({ children, liststyle }) => {
  return (
    <ul className={`flex list-style-none m-0 p-0 ${liststyle}`}>{children}</ul>
  );
};

export default CustomList;
