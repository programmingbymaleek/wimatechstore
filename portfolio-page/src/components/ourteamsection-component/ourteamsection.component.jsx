"use client";

import React, { useState } from "react";
import teammate1 from "../../../public/assets/images/teammate1.png";
import teammate2 from "../../../public/assets/images/placeholder.png";

import Image from "next/image";
import close from "../../assets/icons/close.svg";

export const OurTeamSection = () => {
  const [person, setPerson] = useState(null); // Using `null` for no person selected
  const persons = [
    {
      id: 1,
      name: "Maliki Wisdom",
      imageSrc: teammate1,
      imageAlt: "Maliki Wisdom",
      role: "Co-CEO",
      background:
        "Wisdom Maliki is the visionary behind Certified Global Enterprise. With over 6 years of experience in technology management and a strong background in both IT and engineering, Wisdom has been instrumental in driving innovation and setting new industry standards. He began his career in 2013, earning a bachelors degree in Computer Science in 2017, and has since played key roles in major projects, including the implementation of advanced Electronic Fuel Monitoring Systems (EFMS) for offshore rigs and over 100+ vessels in West Africa. Before founding Certified Global Enterprise, Wisdom worked as a Senior Software Engineer at Alps SS&C, where he developed and optimized software solutions that significantly improved operational efficiency. His leadership and technical expertise ensure that Certified Global Enterprise delivers cutting-edge solutions tailored to meet the unique needs of its clients.",
      expertise:
        "IT innovation, technology integration, digital transformation and  client relations",
    },
    {
      id: 2,
      name: "Kennedy Boateng",
      imageSrc: teammate2,
      imageAlt: "Kennedy Boateng",
      role: "Co-CEO",
      background:
        "With a profound background in engineering and product development, Kennedy Boateng brings over 18 years of experience to Certified Global Enterprise. He has been instrumental in leading technological advancements and ensuring that products meet the highest standards of quality assurance. Kennedy's innovative approach and technical expertise have significantly shaped the company's trajectory.",
      expertise: "Engineering, product development, quality assurance.",
      vision:
        "Kennedy is driven by a passion for engineering excellence and innovation. His vision is to develop solutions that not only meet but exceed industry standards, ensuring safety, compliance, and top-notch quality for all clients. He believes in creating products that stand the test of time and make a significant impact in their respective industries.",
      message:
        "At Certified Global Enterprise, our commitment to engineering excellence and quality assurance is at the heart of everything we do. We strive to deliver products and services that are innovative, reliable, and perfectly aligned with our clients' needs. My mission is to ensure that every product not only meets but surpasses expectations, setting new standards for quality and innovation.",
    },
  ];

  const viewMember = (id) => {
    setPerson(id);
  };

  const closeMember = () => {
    setPerson(null); // Changed to `null`
  };

  const selectedPerson = persons.find((p) => p.id === person);

  return (
    <div className="bg-white md:px-12 px-8" id="team">
      <div className="mx-auto w-full py-16 sm:py-24 flex flex-col">
        <div className=" max-w-2xl mx-0 pb-4">
          <p className="head-medium tracking-tight font-semibold text-gray-900">
            Meet Our Team
          </p>
          <p className="mt-2 text-normal leading-6 text-gray-900">
            At Certified Global Enterprise, we pride ourselves on having a team
            of experienced and dedicated professionals committed to delivering
            exceptional service and innovative solutions. Our leadership is
            spearheaded by our Co-CEOs, who bring diverse expertise and vision
            to the company.{" "}
          </p>
        </div>

        <div className="mt-10 md:grid md:gap-10 gap-6 md:flex-row grid mlg:grid-cols-2 grid-cols-1 items-center md:justify-center md:w-fit w-full">
          {persons.map((person) => (
            <div
              key={person.id}
              className="group md:w-full xs:w-fit  w-full mx-auto flex flex-row gap-4 items-center"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none max-w-44 h-44">
                <Image
                  alt={person.imageAlt}
                  src={person.imageSrc}
                  className="h-full w-full object-cover object-top lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex flex-col gap-2 flex-1">
                <div>
                  <p className="text-large text-gray-900 uppercase font-semibold">
                    {person.name}
                  </p>
                  <p className="mt-1 text-small text-gray-600 font-semibold uppercase">
                    {person.role}
                  </p>
                </div>
                <div className="w-full text-normal line-clamp-4">
                  {person.background}
                </div>
                <div
                  className="text-small hover:underline text-blue-600 cursor-pointer mt-2 uppercase"
                  onClick={() => viewMember(person.id)}
                >
                  View Full Bio
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedPerson && (
        <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full md:inset-0 max-h-full bg-black/50">
          <div className="relative p-4 w-full max-w-[65rem] max-h-full h-full flex items-center justify-center">
            <div className="relative bg-white rounded-lg shadow p-4 pb-8 pl-8 mb-4 h-fit max-h-fit">
              <div className="group md:w-full xs:w-fit 2xs:w-max w-full mx-auto gap-x-6 justify-between items-start grid grid-cols-[auto_1fr] h-fit overflow-scroll">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none max-w-[18rem] h-full flex flex-col items-center gap-5 my-8 col-span-1 max-h-[20rem]">
                  <Image
                    alt={selectedPerson.imageAlt}
                    src={selectedPerson.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    onClick={closeMember}
                  />
                </div>
                <div className="mt-1 flex flex-col gap-2 w-full col-span-1 h-full">
                  <div className="w-full flex items-end justify-end h-5">
                    <Image
                      src={close}
                      className="h-full w-auto cursor-pointer"
                      alt="Close icon"
                      onClick={closeMember}
                    />
                  </div>
                  <div className="w-full pr-4 h-full">
                    <div>
                      <p className="head-small text-gray-900 uppercase font-semibold">
                        {selectedPerson.name}
                      </p>
                      <p className="mt-1 text-medium text-gray-900 font-semibold uppercase">
                        {selectedPerson.role}
                      </p>
                    </div>
                    <div className="w-full text-normal mt-1">
                      <br />
                      {selectedPerson.background}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
