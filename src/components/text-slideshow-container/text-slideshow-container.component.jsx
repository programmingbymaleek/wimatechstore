import React from "react";
import BackgroundImageContainer from "../backgroundimage-container-component/backgroundimage-container.component";
import TextSlideshow from "../text-slideshow-component/text-slideshow.component";
import form_image from "../../assets/images/form-image.png";

const TextSlideshowContainer = () => {
  return (
    <div className="h-full oveflow-hidden large:w-5/12  w-6/12 xmedium:block hidden">
      <BackgroundImageContainer
        containerstyle="relative w-full h-full bg-cover bg-center flex items-end justify-center text-white p-4 rounded-lg"
        image={form_image}
      >
        <TextSlideshow />
      </BackgroundImageContainer>
    </div>
  );
};

export default TextSlideshowContainer;
