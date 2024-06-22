import React from "react";

const AuthContainer = ({ children }) => {
  return (
    <div className="w-full  px-8 large:px-16 box-border flex flex-row items-center large:justify-center large:gap-[8rem] xmedium:justify-between max-w-[1280px] mx-auto h-[60rem]  justify-center pt-20
">
      {children}
    </div>
  );
};

export default AuthContainer;
