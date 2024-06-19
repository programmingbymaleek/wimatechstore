import React from "react";
import BackgroundImageContainer from "../backgroundimage-container-component/backgroundimage-container.component";
import TextSlideshow from "../text-slideshow-component/text-slideshow.component";
import form_image from "../../assets/images/form-image.png";

const TextSlideshowContainer = () => {
  return (
    <div className="h-[80vh] oveflow-hidden w-6/12 ">
      <BackgroundImageContainer containerstyle="relative w-full h-full bg-cover bg-center flex items-end justify-center text-white p-4 rounded-lg" image={form_image}>
        <TextSlideshow />
      </BackgroundImageContainer>
    </div>
  );
};

export default TextSlideshowContainer;
