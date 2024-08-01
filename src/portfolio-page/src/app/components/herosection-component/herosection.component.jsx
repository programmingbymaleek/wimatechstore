import React from "react";

export const HeroSectionComponent = () => {
  return (
    <div className=" w-full mx-auto max-w-7xl" id="home">
      <div className="relative isolate ">
        <div className="mx-auto px-16  py-32  sm:py-32">
          <div className="text-center flex items-center flex-col">
            <h1 className="font-bold uppercase tracking-tight text-white head-large leading-snug ">
              Certified Global enterprise
            </h1>
            <p className="mt-2 text-normal md:leading-8 leading-6 text-white max-w-2xl">
              At Certified Global Enterprise, we specialize in delivering
              cutting-edge technological solutions tailored to meet the diverse
              needs of businesses across various industries. Our commitment to
              excellence, integrity, and customer satisfaction drives us to
              provide unparalleled services that enhance operational efficiency
              and ensure compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
