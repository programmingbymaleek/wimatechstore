import React from "react";
import Header from "../../../components/header-component/header.component";
import ServiceWrapper from "../../../components/servicewrapper-component/servicewrapper.component";
import websiteImage from "../../../../public/assets/images/website.jpeg";

const SoftwareDevelopment = () => {
  return (
    <>
      <Header>
        <div className="py-24 md:px-12 px-8 text-center flex items-center flex-col">
          <p className="font-semibold capitalize tracking-tight text-white head-large leading-snug max-w-3xl">
            Web and App Design, Development, and Maintenance
          </p>
        </div>
      </Header>
      <ServiceWrapper image={websiteImage}>
        <div className="mx-auto max-w-3xl lg:mx-0 col-span-7 ">
          <div className="w-11/12">
            <div className="mt-6 text-normal leading-6 text-gray-900">
              <div className="">
                At Certified Global Enterprise, we offer comprehensive web and
                app services designed to elevate your digital presence and drive
                business success. From initial design concepts to ongoing
                maintenance, our team is dedicated to creating high-performance,
                user-friendly digital solutions tailored to your needs.
              </div>
              <div>
                <p className="uppercase text-gray-900 font-semibold text-normal pt-3.5 pb-1.5">
                  Our Services:
                </p>

                <div className="pl-5">
                  <ul className=" list-disc">
                    <li className="">
                      <span className="font-medium">
                        Custom Website Design & Development:{" "}
                      </span>{" "}
                      <br />
                      We build visually stunning and highly functional websites
                      that are tailored to your brand and business objectives.
                      Our designs focus on user experience and engagement,
                      ensuring that your website stands out in a crowded digital
                      landscape.
                    </li>
                    <li>
                      <span className="font-medium">
                        Mobile App Development:{" "}
                      </span>{" "}
                      <br />
                      Our team develops intuitive and feature-rich mobile
                      applications for both iOS and Android platforms. Whether
                      you need a new app to engage your audience or an existing
                      app to be optimized, we deliver solutions that meet your
                      specific requirements and enhance user experience.
                    </li>
                    <li>
                      <span className="font-medium">
                        Website & App Maintenance:{" "}
                      </span>
                      <br />
                      We provide ongoing support and maintenance to keep your
                      digital platforms running smoothly. From regular updates
                      and bug fixes to performance optimization, our maintenance
                      services ensure that your website and app continue to
                      perform at their best.
                    </li>
                    <li>
                      <span className="font-medium">UI/UX Design: </span>
                      <br />
                      Our user interface (UI) and user experience (UX) design
                      services focus on creating seamless and enjoyable
                      interactions for your users. We design intuitive layouts
                      and features that make it easy for your customers to
                      navigate and engage with your digital products.
                    </li>
                    <li>
                      <span className="font-medium">
                        E-commerce Solutions:{" "}
                      </span>
                      <br />
                      We offer specialized e-commerce development services,
                      including custom shopping carts, secure payment gateways,
                      and inventory management systems, to help you build a
                      successful online store.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="uppercase text-gray-900 font-semibold text-normal pt-3.5 pb-1.5">
                  Why Choose Our Web and App Services:
                </p>

                <div className="pl-5">
                  <ul className=" list-disc">
                    <li className="">
                      <span className="font-medium">Tailored Solutions: </span>{" "}
                      <br />
                      We customize our services to meet your unique business
                      needs, ensuring that your website or app aligns perfectly
                      with your goals.
                    </li>
                    <li>
                      <span className="font-medium">Expert Team: </span> <br />
                      Our experienced designers and developers use the latest
                      technologies and best practices to deliver high-quality
                      digital solutions that exceed your expectations.
                    </li>
                    <li>
                      <span className="font-medium">Ongoing Support: </span>
                      <br />
                      We offer continuous support and maintenance to keep your
                      digital assets up-to-date, secure, and performing
                      optimally.
                    </li>
                    <li>
                      <span className="font-medium">
                        Enhanced User Experience:{" "}
                      </span>
                      <br />
                      Our focus on UI/UX design ensures that your users have a
                      smooth and enjoyable experience, leading to higher
                      engagement and satisfaction.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-2">
                Explore how our web and app design, development, and maintenance
                services can transform your digital presence and drive your
                business forward. Contact us today to learn more!
              </div>
            </div>
          </div>
        </div>
      </ServiceWrapper>
    </>
  );
};

export default SoftwareDevelopment;
