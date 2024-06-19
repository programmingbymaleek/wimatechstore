import React from "react";
import Button from "../button-component/button.component";
import Text from "../text-component/text.component";
import classes from "./herosection.style.module.scss";
import backgroundimg from "../../assets/images/hero-background.png";
import BackgroundImageContainer from "../backgroundimage-container-component/backgroundimage-container.component";
const HeroSection = () => {
  return (
    <div className="w-full h-max">
      <BackgroundImageContainer
        containerstyle={`pt-28 h-[34rem] xlarge:h-[34rem] flex items-center w-full bg-right-bottom bg-no-repeat bg-[#cbd2de] bg-[length:auto_90%]
          `}
        image={backgroundimg}
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
            Get the TechBrand XZ10 smartphone at an unbeatable price today!
            Experience cutting-edge technology with this sleek device, perfect
            for work and play.
          </Text>
          <Button
            buttontype="primary-button"
            buttonstyles="py-3 px-7 w-fit capitalize"
          >
            shop now
          </Button>
        </div>
      </BackgroundImageContainer>
    </div>
  );
};

export default HeroSection;
