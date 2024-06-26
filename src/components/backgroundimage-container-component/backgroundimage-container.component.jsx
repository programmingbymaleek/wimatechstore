import React from "react";

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
