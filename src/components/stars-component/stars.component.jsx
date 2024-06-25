import React from "react";
import { ReactComponent as StarIcon } from "../../assets/icons/stars.svg";

const Stars = () => {
  return (
    <div className="gap-1 items-center flex">
      <StarIcon className="w-5 h-5" />
      <StarIcon className="w-5 h-5" />
      <StarIcon className="w-5 h-5" />
      <StarIcon className="w-5 h-5" />
      <StarIcon className="w-5 h-5" />
    </div>
  );
};

export default Stars;
