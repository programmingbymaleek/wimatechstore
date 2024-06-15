import React from "react";
import BackgroundImageContainer from "../backgroundimage-container-component/backgroundimage-container.component";
import TextSlideshow from "../text-slideshow-component/text-slideshow.component";

const TextSlideshowContainer = () => {
  return (
    <div className="h-[80vh] oveflow-hidden w-6/12 ">
      <BackgroundImageContainer>
        <TextSlideshow />
      </BackgroundImageContainer>
    </div>
  );
};

export default TextSlideshowContainer;
