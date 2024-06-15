import React from "react";
import Button from "../button-component/button.component";
import Text from "../text-component/text.component";
import classes from "./herosection.style.module.scss";
const HeroSection = () => {
  return (
    <div
      className={`pt-28 h-[34rem] xlarge:h-[40rem] flex items-center ${
        classes[`hero-section`]
      }`}
    >
      <div
        className={`w-full flex flex-col ${classes[`hero-section-content`]}`}
      >
        <Text
          texttype="heading-xl"
          textstyles="uppercase tracking-tight leading-10"
        >
          20% sale off
        </Text>
        <Text texttype="text-normal" textstyles="w-5/12 block py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum mi sed luctus blandit.
        </Text>
        <Button buttontype="primary-button" buttonstyles="py-3 px-8 w-fit">
          shop now
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
