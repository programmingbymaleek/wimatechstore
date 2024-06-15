import React from "react";

const BlurContainer = ({ containerstyle, children }) => {
  return (
    <div
      className={`${containerstyle} border border-[#898989] rounded-lg bg-[#3a3a3a]/30 backdrop-blur-lg w-full`}
    >
      {children}
    </div>
  );
};

export default BlurContainer;
