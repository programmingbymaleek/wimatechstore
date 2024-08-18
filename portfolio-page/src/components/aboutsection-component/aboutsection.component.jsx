import React from "react";
import image1 from "../../../public/assets/images/bgImage.jpg";
import Image from "next/image";
import verificationImage from "../../../public/assets/images/verification.png";
import maintenanceImage from "../../../public/assets/images/maintenance.jpeg";
import inspectionImage from "../../../public/assets/images/inspection.webp";
import installationImage from "../../../public/assets/images/installation.webp";
import Link from "next/link";

export const AboutSection = () => {
  return (
    <div
      className=" overflow-hidden bg-white py-24 sm:py-32 w-full md:px-12 px-8"
      id="aboutus"
    >
      <div className=" grid grid-cols-12 w-full">
        <div className="mx-auto max-w-3xl lg:mx-0 mlg:col-span-7 col-span-12">
          <div className="mlg:w-11/12 w-full">
            <p className="head-medium tracking-tight font-semibold text-gray-900">
              About
            </p>
            <div className="mt-6 text-normal leading-6 text-gray-900">
              <div className="text-seminormal font-medium leading-7 tracking-[0.02em]">
                At Certified Global Enterprise, we pride ourselves on our
                commitment to transparency and excellence. With a team of
                experienced professionals, we are committed to innovation,
                quality, and customer satisfaction. We pride ourselves on
                delivering tailor-made solutions that are not only efficient but
                also cost-effective. Whether you need{" "}
                <a
                  href="#it-solutions"
                  className=" italic hover:underline text-blue-700"
                >
                  advanced IT Solutions
                </a>
                ,
                <a
                  href="#engineering"
                  className=" italic hover:underline text-blue-700"
                >
                  {" "}
                  precise Engineering Services
                </a>
                ,{" "}
                <a
                  href="#consultancy"
                  className=" italic hover:underline text-blue-700"
                >
                  comprehensive Safety Consultancy,
                </a>{" "}
                or{" "}
                <a
                  href="#store"
                  className=" italic hover:underline text-blue-700"
                >
                  high-quality products through our eCommerce store
                </a>
                , we have the expertise to support your business journey.
              </div>
              <div>
                <p className="uppercase text-gray-900 font-semibold text-normal pt-5 pb-1.5">
                  Our mission
                </p>
                <p>
                  Our mission is to create handshake with our customers by
                  revolutionizing the IT and Engineering domain with cutting
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
                  Engineering solutions tailored to meet our customers needs.
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
        <div className="mlg:col-span-5 col-span-12 mt-8 mlg:mt-0">
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
