import React from "react";
import classes from "./text.style.module.scss";
const Text = ({ children, texttype, textstyles }) => {
  return (
    <span className={`${textstyles} ${classes[`${texttype}`]}`}>
      {children}
    </span>
  );
};

export default Text;
