import React from "react";
import form_image from "../../assets/images/form-image.png";
const BackgroundImageContainer = ({ containerstyle, children }) => {
  return (
    <div
      className={`${containerstyle} relative w-full h-full bg-cover bg-center flex items-end justify-center text-white p-4 rounded-lg`}
      style={{ backgroundImage: `url(${form_image})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundImageContainer;
