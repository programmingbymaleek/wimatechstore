import React from "react";
import classes from "./button.style.module.scss";
const Button = ({ children, buttontype, buttonstyles, buttonFunc, type }) => {
  return (
    <>
      {buttonFunc ? (
        <button
          className={`flex items-center justify-center cursor-pointer ${buttonstyles} ${
            classes[`${buttontype}`]
          } ${classes[`button`]}`}
          onClick={buttonFunc}
        >
          {children}
        </button>
      ) : (
        <button
          className={`flex items-center justify-center cursor-pointer ${buttonstyles} ${
            classes[`${buttontype}`]
          } ${classes[`button`]}`}
          type={type}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
