import React from "react";
import CustomList from "../list-component/list.component";
import Text from "../text-component/text.component";
import dummy from "../../assets/images/dummy-image.png";
const FeatureItem = () => {
  return (
    <div className="flex xlarge:flex-row gap-4 py-4 items-center flex-col xlarge:justify-start justify-center">
      <img src={dummy} alt="feature image" className=" h-auto w-15" />
      <CustomList liststyle="flex-col gap-1">
        <Text
          texttype="heading-sm"
          textstyles="font-bold text-center xlarge:text-left"
        >
          Feature Name
        </Text>
        <Text texttype="text-normal" textstyles="text-center xlarge:text-left">
          Feature Description
        </Text>
      </CustomList>
    </div>
  );
};

export default FeatureItem;
