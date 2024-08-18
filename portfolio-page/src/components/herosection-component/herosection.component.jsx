import React from "react";
import BackgroundImage from "../backgroundimage-component/backgroundimage.component";

export const HeroSectionComponent = () => {
  return (
    <BackgroundImage>
      <div className="text-center flex items-center flex-col py-8">
        <p className="font-semibold capitalize tracking-tight text-white head-larger leading-snug max-w-5xl">
          Empowering Business with Precision, Innovation, and Expertise
        </p>
        <p className="mt-2 text-seminormal md:leading-8 leading-6 text-white max-w-4xl">
          At Certified Global Enterprise, we specialize in delivering
          cutting-edge technological solutions tailored to meet the diverse
          needs of businesses across various industries. Our commitment to
          excellence, integrity, and customer satisfaction drives us to provide
          unparalleled services that enhance operational efficiency and ensure
          compliance. Our comprehensive services in IT Solutions, Engineering
          Services, and Safety Consultancy are designed to drive your success
          and empower the growth of your business.
        </p>
      </div>
    </BackgroundImage>
  );
};
