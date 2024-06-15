import React from "react";

const FormComponent = ({ formstyle, children }) => {
  return (
    <form noValidate className={`${formstyle}`}>
      {children}
    </form>
  );
};

export default FormComponent;
