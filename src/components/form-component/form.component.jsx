import React from "react";

const FormComponent = (props) => {
  const { formstyle, children, submitForm } = props;
  return (
    <form noValidate className={`${formstyle}`} onSubmit={submitForm}>
      {children}
    </form>
  );
};

export default FormComponent;
