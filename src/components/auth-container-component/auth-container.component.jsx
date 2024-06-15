import React from "react";

const AuthContainer = ({ children }) => {
  return (
    <div className="w-full p-16 box-border flex flex-row items-center justify-between max-w-[1280px] mx-auto pt-20 h-[100vh]">
      {children}
    </div>
  );
};

export default AuthContainer;
