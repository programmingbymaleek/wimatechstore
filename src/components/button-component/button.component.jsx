import React from "react";
import classes from "./button.style.module.scss";
const Button = ({ children, buttontype, buttonstyles, buttonFunc }) => {
  return (
    <div
      className={`flex items-center justify-center cursor-pointer ${buttonstyles} ${
        classes[`${buttontype}`]
      } ${classes[`button`]}`}
      onClick={() => buttonFunc()}
    >
      {children}
    </div>
  );
};

export default Button;
