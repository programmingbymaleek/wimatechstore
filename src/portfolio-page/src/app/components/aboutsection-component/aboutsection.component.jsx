import React from "react";
import image1 from "../../../../public/assets/images/bgImage.jpg";
import Image from "next/image";
import verificationImage from "../../../../public/assets/images/verification.png";
import maintenanceImage from "../../../../public/assets/images/maintenance.jpeg";
import inspectionImage from "../../../../public/assets/images/inspection.webp";
import installationImage from "../../../../public/assets/images/installation.webp";

export const AboutSection = () => {
  return (
    <div
      className="relative isolate overflow-hidden bg-white py-24 sm:py-32 w-full px-12"
      id="aboutus"
    >
      <div className=" grid grid-cols-12 w-full">
        <div className="mx-auto max-w-3xl lg:mx-0 col-span-7 ">
          <div className="w-11/12">
            <p className="head-medium tracking-tight font-semibold text-gray-900">
              About
            </p>
            <div className="mt-6 text-normal leading-6 text-gray-900">
              <div className="">
                At Certified Global Enterprise, we pride ourselves on our
                commitment to transparency and excellence, with a team of
                experienced professionals, we are committed to innovation,
                quality, and customer satisfaction.
              </div>
              <div>
                <p className="uppercase text-gray-900 font-semibold text-normal pt-5 pb-1.5">
                  Our mission
                </p>
                <p>
                  Our mission is to create handshake with our customers by
                  revolutionizing the IT and engineering domain with cutting
                  edge technological solutions that prioritize, affordability,
                  reliability and customer satisfaction.
                </p>
              </div>
              <div>
                <p className="uppercase text-gray-900 font-semibold text-normal pt-5 pb-1.5">
                  Our vision
                </p>
                <p>
                  Our vision is to be the paramount global provider of IT and
                  engineering solutions tailored to meet our customers needs. ,
                  devices and services renowned for our customer innovation,
                  reliability and customer centricity
                </p>
              </div>

              <div>
                <p className="uppercase text-gray-900 font-semibold text-normal pt-3.5 pb-1.5">
                  Our values
                </p>

                <div className="pl-5">
                  <ul className=" list-disc">
                    <li>
                      <span className="font-medium">Innovation:</span> Embracing
                      the latest technologies to address complex business
                      challenges.
                    </li>
                    <li>
                      <span className="font-medium">Quality:</span> Delivering
                      services that meet the highest industry standards.
                    </li>
                    <li>
                      <span className="font-medium">Integrity:</span> Building
                      trust through transparency and honesty.
                    </li>
                    <li>
                      <span className="font-medium">Customer Focus:</span>
                      Tailoring solutions to meet the unique needs of our
                      clients.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <Image
            src={verificationImage}
            height={760}
            className="block rounded-lg w-full h-full object-cover"
            alt="dummy-image"
          />
        </div>
      </div>
    </div>
  );
};
