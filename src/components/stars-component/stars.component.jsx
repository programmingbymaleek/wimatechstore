import React from "react";
import { ReactComponent as StarIcon } from "../../assets/icons/stars.svg";

const Stars = () => {
  return (
    <div className="gap-1 items-center flex">
      <StarIcon className="w-4 h-4" />
      <StarIcon className="w-4 h-4" />
      <StarIcon className="w-4 h-4" />
      <StarIcon className="w-4 h-4" />
      <StarIcon className="w-4 h-4" />
    </div>
  );
};

export default Stars;
