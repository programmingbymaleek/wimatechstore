import React from "react";

const BackgroundImage = ({ children }) => {
  return (
    <div className=" w-full mx-auto max-w-7xl" id="home">
      <div className="relative isolate ">
        <div className="mx-auto px-16  py-32  sm:py-32">{children}</div>
      </div>
    </div>
  );
};

export default BackgroundImage;
