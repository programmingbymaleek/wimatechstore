"use client";

import React, { useState } from "react";
import teammate1 from "../../../../public/assets/images/teammate1.png";
import teammate2 from "../../../../public/assets/images/placeholder.png";

import Image from "next/image";
import close from "../../../../public/assets/icons/close.svg";
import quote from "../../../../public/assets/icons/quote.svg";

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
        "With a passion for IT innovation and over 6 years of experience in technology management, Wisdom Maliki has been a driving force behind Certified Global Enterprise's technological advancements. His expertise lies in integrating cutting-edge technologies to enhance business operations and deliver exceptional client solutions",
      expertise:
        "IT innovation, technology integration, digital transformation and  client relations",
      vision:
        "Wisdom is committed to harnessing the power of technology to drive business innovation and transform industries. He envisions a future where technology empowers businesses to operate at their highest potential.",
      message:
        "At Certified Global Enterprise, we are dedicated to pushing the boundaries of what's possible with technology. Our mission is to deliver innovative solutions that not only meet but exceed our clients' expectations. I am excited to lead our team in exploring new frontiers of IT innovation that bring tangible value to businesses.",
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
    <div className="bg-white px-12" id="ourteam">
      <div className="mx-auto w-full py-16 sm:py-24 flex flex-col items-center">
        <div className="mx-auto max-w-3xl lg:mx-0 pb-4">
          <h2 className="head-medium tracking-tight font-bold text-gray-900 text-center">
            Meet Our Team
          </h2>
          <p className="mt-2 text-normal leading-6 text-gray-900 text-center">
            At Certified Global Enterprise, we pride ourselves on having a team
            of experienced and dedicated professionals committed to delivering
            exceptional service and innovative solutions. Our leadership is
            spearheaded by our Co-CEOs, who bring diverse expertise and vision
            to the company.{" "}
          </p>
        </div>

        <div className="mt-10 md:grid md:gap-10 gap-6 md:flex-row grid xs:grid-cols-2 grid-cols-1 items-center md:justify-center md:w-fit w-full">
          {persons.map((person) => (
            <div
              key={person.id}
              className="group md:w-full xs:w-fit 2xs:w-max w-full mx-auto flex flex-row gap-4 items-center"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none max-w-44 h-44">
                <Image
                  alt={person.imageAlt}
                  src={person.imageSrc}
                  className="h-full w-full object-cover object-top lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex flex-col gap-2 w-80">
                <div>
                  <h3 className="text-normal text-gray-900 uppercase font-semibold">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-small text-gray-600 font-semibold uppercase">
                    {person.role}
                  </p>
                </div>
                <div className="w-full text-normal line-clamp-4">
                  {person.background}
                </div>
                <div
                  className="text-smallest hover:underline text-blue-600 cursor-pointer mt-2 uppercase"
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
          <div className="relative p-4 w-full max-w-[50rem] max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 pb-8 pl-8">
              <div className="group md:w-full xs:w-fit 2xs:w-max w-full mx-auto flex flex-row gap-x-6 justify-between items-start grid grid-cols-auto">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none max-w-[18rem] h-full flex flex-col items-center gap-5 my-8 col-span-1 max-h-[18rem]">
                  <Image
                    alt={selectedPerson.imageAlt}
                    src={selectedPerson.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    onClick={closeMember}
                  />
                </div>
                <div className="mt-1 flex flex-col gap-2 w-full col-span-1 h-max">
                  <div className="w-full flex items-end justify-end h-[calc(100% - 3rem)]">
                    <Image
                      src={close}
                      className="h-full w-auto cursor-pointer"
                      alt="Close icon"
                      onClick={closeMember}
                    />
                  </div>
                  <div className="w-full pr-4">
                    <div>
                      <h3 className="head-small text-gray-900 uppercase font-semibold">
                        {selectedPerson.name}
                      </h3>
                      <p className="mt-1 text-small text-gray-900 font-semibold uppercase">
                        {selectedPerson.role}
                      </p>
                    </div>
                    <div className="w-full text-medium mt-1">
                      <br />
                      {selectedPerson.background}
                    </div>
                    <div className="w-full text-medium mt-4">
                      <span className="uppercase text-gray-800 font-semibold text-medium pb-3">
                        Vision
                      </span>
                      <br />
                      {selectedPerson.vision}
                    </div>
                    <div className="w-full text-medium my-4">
                      <span className="uppercase text-gray-900 font-semibold text-medium mb-10">
                        Expertise
                      </span>
                      <br className="pb-5" />
                      {selectedPerson.expertise}
                    </div>
                  </div>
                </div>
                <div className="w-full text-medium mt-2 col-span-2 flex flex-col justify-center">
                  <Image
                    src={quote}
                    className="h-7 w-auto cursor-pointer scale-x-[-1]"
                    alt="quote icon"
                  />
                  <blockquote className="pr-6 pl-3 py-4 text-center">
                    {selectedPerson.message}
                  </blockquote>
                  <Image
                    src={quote}
                    className="h-7 w-auto cursor-pointer"
                    alt="quote icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
