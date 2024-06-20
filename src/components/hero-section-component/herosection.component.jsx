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
        containerstyle={`pt-12 tablet:pt-16 h-[24rem] tablet:h-[28rem] xlarge:h-[34rem] flex medium:items-center items-start w-full bg-cover bg-center  tablet:bg-right-bottom bg-no-repeat bg-[#cbd2de]  xlarge:bg-[length:auto_90%] tablet:bg-[length:60%_90%] large:h-[34rem] medium:h-[30rem] tablet:bg-[length:50%_90%] bg-[length:100%_40%]
          `}
        image={backgroundimg}
      >
        <div
          className={`w-full flex flex-col px-6 h-full bg-[#00183a9c]  tablet:bg-transparent large:px-16 tablet:items-start items-center tablet:justify-star justify-center ${
            classes[`hero-section-content`]
          }`}
        >
          <Text
            texttype="heading-xl"
            textstyles="uppercase tracking-tight leading-none tablet:w-5/12 w-full tablet:text-left text-center text-white tablet:text-gray-800"
          >
            20% sale off
          </Text>
          <Text
            texttype="text-normal"
            textstyles="tablet:w-5/12 block pb-8 pt-3 tablet:text-left text-center w-full text-white tablet:text-gray-800"
          >
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
