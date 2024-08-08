import Image from "next/image";
import React from "react";

const Card = ({ service, openModal }) => {
  return (
    <div className="flex flex-col gap-6 md:items-center items-start w-full">
      <Image
        src={service.image}
        height={760}
        className="block rounded-sm w-full h-[15rem] object-cover"
        alt="dummy-image"
      />
      <div className="w-full">
        <p className="text-normal capitalize font-medium line-clamp-1">
          {service.title}
        </p>
        <p className="mt-1 text-normal md:leading-5 leading-6 text-gray-900 text-left line-clamp-3">
          {service.description}
        </p>
        <p
          className="mt-2 text-medium md:leading-5 leading-6 text-blue-500 hover:underline cursor-pointer"
          onClick={() => openModal(service.id)}
        >
          Read More
        </p>
      </div>
    </div>
  );
};

export default Card;