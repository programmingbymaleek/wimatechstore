import React from "react";
import FeatureItem from "../feature-item-component/featureitem.component";
import CustomList from "../list-component/list.component";
import Text from "../text-component/text.component";

const FeaturesSection = () => {
  return (
    <div className="bg-[#3a3a3a]/10 flex items-center justify-center my-20">
      <div className="max-w-[1280px] px-16 mx-auto w-full">
        <Text
          texttype="heading-base"
          textstyles="leading-6 uppercase w-full text-center pt-10 block"
        >
          Features
        </Text>
        <CustomList liststyle="flex-row justify-between items-center py-8 w-full">
          <FeatureItem></FeatureItem>
          <FeatureItem></FeatureItem>
          <FeatureItem></FeatureItem>
          <FeatureItem></FeatureItem>
        </CustomList>
      </div>
    </div>
  );
};

export default FeaturesSection;
