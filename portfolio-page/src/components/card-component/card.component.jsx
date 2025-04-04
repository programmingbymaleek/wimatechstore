import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ service, customLinks }) => {
  return (
    <div className="flex flex-col gap-6 md:items-center items-start w-full">
      <Image
        src={service.image}
        height={760}
        className="block rounded-sm w-full h-[15rem] object-cover"
        alt="dummy-image"
      />
      <div className="w-full">
        <p className="text-normal capitalize font-medium">{service.title}</p>
        <Link
          className="mt-2 text-medium md:leading-5 leading-6 cursor-pointer"
          href={`service/${customLinks}`}
        >
          <p className="mt-1 text-normal md:leading-5 leading-6 text-gray-900 hover:text-blue-700 hover:underline text-left line-clamp-3 transition-all">
            {service.description}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
