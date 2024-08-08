import React from "react";
import Image from "next/image";
import close from "../../../../public/assets/icons/close.svg";

const ServiceModal = ({ service, closeModal }) => {
  return (
    <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full md:inset-0 max-h-full bg-black/50">
      <div className="relative p-4 w-full max-w-[30rem] max-h-full h-fit flex items-center justify-center">
        <div className="relative bg-white rounded-lg shadow p-4 pb-8 mb-4 h-full max-h-fit">
          <div className="group md:w-full xs:w-fit 2xs:w-max w-full mx-auto gap-x-6 justify-between items-start grid grid-cols-auto h-full overflow-scroll">
            <div className=" flex flex-col gap-2 w-full col-span-1 h-max">
              <div className="w-full flex items-end justify-end h-4">
                <Image
                  src={close}
                  className="h-full w-auto cursor-pointer"
                  alt="Close icon"
                  onClick={() => closeModal()}
                />
              </div>
              <div className="flex flex-col gap-5 md:items-center items-start w-full mt-1 px-2">
                <p className="text-largest capitalize font-medium text-center">
                  {service.title}
                </p>
                <Image
                  src={service.image}
                  height={760}
                  className="block rounded-sm w-full h-[15rem] object-cover"
                  alt="dummy-image"
                />
                <div className="w-full">
                  <p className="mt-1 mb-2 text-normal md:leading-5 leading-6 text-gray-900 text-left">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
