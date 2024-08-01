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
      <div className="mx-auto flex flex-col items-center">
        <div className="mx-auto max-w-3xl lg:mx-0 ">
          <h2 className="head-medium tracking-tight font-bold text-gray-900 text-center">
            About
          </h2>
          <p className="mt-6 text-normal leading-6 text-gray-900 text-center">
            <p className="">
              At Certified Global Enterprise, we pride ourselves on our
              commitment to transparency and excellence. has been at the
              forefront of medical technology. We aim to provide superior
              medical device parts and comprehensive equipment inspection
              services that ensure the highest standards of patient care. With a
              team of experienced professionals and state-of-the-art facilities,
              we are committed to innovation, quality, and customer
              satisfaction.
              <br />
              Our values include embracing the latest technologies to address
              complex business challenges, delivering services that meet the
              highest industry standards, building trust through transparency
              and honesty, and tailoring solutions to meet the unique needs of
              our clients.
            </p>
            <p>
              <h3 className="uppercase text-gray-900 font-semibold text-normal pt-4 pb-1.5">
                Our mission
              </h3>
              <p>
                Our mission is to create handshake with our customers by
                revolutionizing the IT services with cutting edge technological
                solutions that prioritize, affordability, reliability and
                customer satisfaction.
              </p>
            </p>
            <p>
              <h3 className="uppercase text-gray-900 font-semibold text-normal pt-4 pb-1.5">
                Our vision
              </h3>
              <p>
                Our vision is to be the paramount global provider of IT
                products, devices and services renowned for our customer
                innovation, reliability and customer centricity
              </p>
            </p>

            {/* <p>
              <h3 className="uppercase text-gray-900 font-semibold text-normal pt-3.5 pb-1.5">
                Our values
              </h3>

              <p>
                <ul>
                  <li>
                    Innovation: Embracing the latest technologies to address
                    complex business challenges.
                  </li>
                  <li>
                    Quality: Delivering services that meet the highest industry
                    standards.
                  </li>
                  <li>
                    Integrity: Building trust through transparency and honesty.
                  </li>
                  <li>
                    Customer Focus: Tailoring solutions to meet the unique needs
                    of our clients.
                  </li>
                </ul>
              </p>
            </p> */}
          </p>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-1 gap-5 pt-10">
          <Image
            src={installationImage}
            height={760}
            className="block col-span-2 rounded-lg w-full h-full object-cover"
            alt="dummy-image"
          />
          <Image
            src={verificationImage}
            height={760}
            className="hidden md:block col-span-1 rounded-lg w-full h-full object-cover"
            alt="dummy-image"
          />
          <Image
            src={inspectionImage}
            height={760}
            className="hidden md:block col-span-2 rounded-lg w-full h-full object-cover"
            alt="dummy-image"
          />
          <Image
            src={maintenanceImage}
            height={760}
            className="hidden md:block col-span-1 rounded-lg w-full h-full object-cover"
            alt="dummy-image"
          />
        </div>
      </div>
    </div>
  );
};
