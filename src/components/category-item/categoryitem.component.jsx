import React from "react";
import dummy from "../../assets/images/dummy-image.png";
import Text from "../text-component/text.component";

const CategoryItem = ({ item }) => {
  return (
    <div className=" flex items-center  flex-col">
      <div className="w-32 h-32 bg-[#f4f4f4] flex items-center justify-center rounded-full">
        <img src={dummy} alt="category item" className="w-20 h-auto" />
      </div>
      <Text texttype="heading-xs" textstyles="capitalize pt-3">
        {item}
      </Text>
    </div>
  );
};

export default CategoryItem;
