import Image from "next/image";
import React from "react";

const ServiceWrapper = ({ children, image }) => {
  return (
    <div className="w-full mx-auto max-w-7xl">
      <div className="relative isolate overflow-hidden bg-white py-24 sm:pb-32 sm:pt-24 w-full md:px-12 px-8">
        <div className=" grid grid-cols-12 w-full">
          <div className="mx-auto max-w-3xl lg:mx-0 mlg:col-span-7 col-span-12">
            <div className="mlg:w-11/12 w-full">{children}</div>
          </div>
          <div className="mlg:col-span-5 col-span-12 mlg:mt-0 mt-10">
            <Image
              src={image}
              height={760}
              className="block rounded-lg w-full h-[31rem] object-cover mt-4"
              alt="dummy-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceWrapper;
