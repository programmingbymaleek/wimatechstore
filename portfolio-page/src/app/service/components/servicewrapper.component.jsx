import Image from "next/image";
import React from "react";

const ServiceWrapper = ({ children, image }) => {
  return (
    <div className="w-full mx-auto max-w-7xl">
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32 w-full px-12">
        <div className=" grid grid-cols-12 w-full">
          <div className="mx-auto max-w-3xl lg:mx-0 col-span-7 ">
            <div className="w-11/12">{children}</div>
          </div>
          <div className="col-span-5">
            <Image
              src={image}
              height={760}
              className="block rounded-lg w-full h-[31rem] object-cover mt-24"
              alt="dummy-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceWrapper;
