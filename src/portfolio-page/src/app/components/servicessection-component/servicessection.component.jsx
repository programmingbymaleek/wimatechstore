import React from "react";
import image1 from "../../../../public/assets/images/bgImage.jpg";
import verificationImage from "../../../../public/assets/images/verification.png";
import maintenanceImage from "../../../../public/assets/images/maintenance.jpeg";
import inspectionImage from "../../../../public/assets/images/inspection.webp";
import installationImage from "../../../../public/assets/images/installation.webp";

import Image from "next/image";

export const ServicesSection = () => {
  return (
    <div className="px-12 flex flex-col items-center py-8" id="services">
      <div className="mx-auto max-w-3xl lg:mx-0">
        <h2 className="head-medium tracking-tight font-bold text-gray-900 text-center">
          Services
        </h2>
        <p className="mt-4 text-normal leading-6 text-gray-900 text-center">
          Our expertise in medical device parts manufacturing ensures precision,
          durability, and compliance with industry standards. We supply a wide
          range of components that are crucial for the efficient functioning of
          medical equipment.
        </p>
      </div>
      <div className="md:mt-16 mt-8 md:flex md:flex-col md:gap-6 gap-6 grid grid-cols-1">
        <div className="flex flex-row justify-between gap-6 md:items-center items-start">
          <div className="w-12 h-10 bg-red-800 items-center justify-center rounded-md md:hidden flex">
            <svg
              className="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"
              />
            </svg>
          </div>
          <div className="md:w-6/12 w-full">
            <h3 className="text-large capitalize font-semibold flex flex-row items-center">
              E-commerce Platform for Parts and Medical Devices
            </h3>
            <p className="md:mt-3 mt-1 text-normal md:leading-5 leading-6 text-gray-900 text-left  md:block block">
              Explore our e-commerce site for a wide range of parts and medical
              devices. We offer high-quality products that cater to diverse
              industry needs, backed by our commitment to quality and service
              excellence.
            </p>
          </div>
          <Image
            src={installationImage}
            height={760}
            className="hidden md:block col-span-2 rounded-md w-6/12 h-80 object-cover"
            alt="dummy-image"
          />
        </div>
        <div className="flex flex-row-reverse justify-between gap-6 md:items-center items-start bg-slate-100">
          <div className="w-12 h-10 bg-red-800 items-center justify-center rounded-md md:hidden flex">
            <svg
              className="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"
              />
            </svg>
          </div>
          <div className="md:w-6/12 w-full">
            <h3 className="text-large capitalize font-semibold flex flex-row items-center">
              IT support, setup and server installation
            </h3>
            <p className="md:mt-3 mt-1 text-normal leading-5 text-gray-900 text-left  md:block block">
              Comprehensive IT Solutions: We provide secure and reliable IT
              infrastructure, from initial setup to server installation,
              ensuring your business operates without technological hurdles.
            </p>
          </div>
          <Image
            src={inspectionImage}
            height={760}
            className="hidden md:block col-span-2 rounded-md w-6/12 h-72 object-cover"
            alt="dummy-image"
          />
        </div>
        <div className="flex md:flex-row flex-row justify-between gap-6 md:items-center items-start">
          <div className="w-12 h-10 bg-red-800 items-center justify-center rounded-md md:hidden flex">
            <svg
              className="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"
              />
            </svg>
          </div>
          <div className="md:w-6/12 w-full">
            <h3 className="text-large capitalize font-semibold flex flex-row items-center">
              Product inspection
            </h3>
            <p className="md:mt-3 mt-1 text-normal leading-5 text-gray-900 text-left  md:block block">
              Quality Assurance: Our meticulous inspections ensure your
              technological devices meet the highest standards of quality and
              compliance.
            </p>
          </div>
          <Image
            src={inspectionImage}
            height={760}
            className="hidden md:block col-span-2 rounded-md w-6/12 h-72 object-cover"
            alt="dummy-image"
          />
        </div>

        <div className="flex md:flex-row-reverse flex-row justify-between gap-6 md:items-center items-start">
          <div className="w-12 h-10 bg-red-800 items-center justify-center rounded-md md:hidden flex">
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
              />
            </svg>
          </div>
          <div className="md:w-6/12 w-full">
            <h3 className="text-large capitalize font-semibold flex flex-row items-center">
              verification and validation{" "}
            </h3>
            <p className="md:mt-3 mt-1 text-normal md:leading-5 leading-6 text-gray-900 text-left  md:block block">
              Thorough Assessments: We verify and validate your products to meet
              all required specifications, ensuring they are market-ready and
              reliable.
            </p>
          </div>
          <Image
            src={verificationImage}
            height={760}
            className="hidden md:block col-span-2 rounded-md w-6/12 h-80 object-cover"
            alt="dummy-image"
          />
        </div>
        <div className="flex flex-row justify-between gap-6 md:items-center items-start">
          <div className="w-12 h-10 bg-red-800 items-center justify-center rounded-md md:hidden flex">
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 7H7m2 3H7m2 3H7m4 2v2m3-2v2m3-2v2M4 5v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-9a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Z"
              />
            </svg>
          </div>
          <div className="md:w-6/12 w-full">
            <h3 className="text-large capitalize font-semibold flex flex-row items-center">
              calibration
            </h3>
            <p className="md:mt-3 mt-1 text-normal md:leading-5 leading-6 text-gray-900 text-left  md:block block">
              Precision Calibration: Our expert calibration services maintain
              accurate measurements and enhance the performance of your
              technological devices.
            </p>
          </div>
          <Image
            src={maintenanceImage}
            height={760}
            className="hidden md:block col-span-2 rounded-md w-6/12 h-80 object-cover"
            alt="dummy-image"
          />
        </div>
        <div className="flex flex-row-reverse justify-between gap-6 md:items-center items-start">
          <div className="w-12 h-10 bg-red-800 items-center justify-center rounded-md md:hidden flex">
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 7H7m2 3H7m2 3H7m4 2v2m3-2v2m3-2v2M4 5v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-9a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Z"
              />
            </svg>
          </div>
          <div className="md:w-6/12 w-full">
            <h3 className="text-large capitalize font-semibold flex flex-row items-center">
              Website and App Creation and Maintenance
            </h3>
            <p className="md:mt-3 mt-1 text-normal md:leading-5 leading-6 text-gray-900 text-left  md:block block">
              End-to-End Development: We craft innovative websites and apps,
              providing continuous support and ensuring your digital presence
              aligns with your business goals.
            </p>
          </div>
          <Image
            src={maintenanceImage}
            height={760}
            className="hidden md:block col-span-2 rounded-md w-6/12 h-80 object-cover"
            alt="dummy-image"
          />
        </div>
      </div>
    </div>
  );
};
