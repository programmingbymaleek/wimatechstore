import React from "react";
import form_image from "../../assets/images/form-image.png";

const BackgroundImageContainer = ({ containerstyle, children, image }) => {
  return (
    <div
      className={`${containerstyle}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundImageContainer;
