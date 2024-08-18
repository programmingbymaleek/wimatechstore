import React from "react";
import Header from "../../../components/header-component/header.component";
import ServiceWrapper from "../../../components/servicewrapper-component/servicewrapper.component";
import ecommerceImage from "../../../../public/assets/images/ecommerce.png";

const Ecommerce = () => {
  return (
    <>
      <Header>
        <div className="py-24 text-center flex items-center md:px-12 px-8 flex-col">
          <h1 className="font-semibold capitalize tracking-tight text-white head-large leading-snug max-w-5xl">
            Comprehensive E-commerce Platform for Quality Parts and Products
          </h1>
          <a href="#">
            <button
              type="submit"
              className="shadow text-white font-semibold text-small text-center py-3 px-8 mt-4 rounded-[.2rem] bg-blue-900 hover:bg-blue-900/90 uppercase"
            >
              Visit our store
            </button>
          </a>
        </div>
      </Header>
      <ServiceWrapper image={ecommerceImage}>
        <div className="mx-auto max-w-3xl lg:mx-0 col-span-7 ">
          <div className="w-11/12">
            <div className="mt-6 text-normal leading-6 text-gray-900">
              <div className="italic text-seminormal font-medium leading-7 tracking-[0.02em]">
                At Certified Global Enterprise, our e-commerce platform offers a
                wide array of high-quality products designed to meet the diverse
                needs of our customers. Whether you're in the market for medical
                devices, electrical parts, or specialized components, our
                platform is your go-to source.
              </div>
              <div>
                <p className="uppercase text-gray-900 font-semibold text-normal pt-3.5 pb-1.5">
                  What We Offer:
                </p>

                <div className="pl-5">
                  <ul className=" list-disc">
                    <li className="">
                      <span className="font-medium">
                        Used Digital Medical Devices:{" "}
                      </span>{" "}
                      <br />
                      We buy and sell pre-owned medical devices, providing
                      cost-effective solutions without compromising on quality.
                      Our stringent refurbishment processes ensure that all
                      devices meet industry standards and deliver reliable
                      performance.
                    </li>
                    <li>
                      <span className="font-medium">
                        Sales of Medical Device Parts:{" "}
                      </span>{" "}
                      <br />
                      Keep your medical equipment running smoothly with our
                      selection of top-quality medical device parts. From
                      essential components to hard-to-find replacements, we
                      offer parts that ensure your devices remain operational
                      and efficient.
                    </li>
                    <li>
                      <span className="font-medium">Electrical Parts: </span>
                      <br />
                      Our inventory includes a wide range of electrical parts
                      suitable for various applications. Whether you're in need
                      of basic components or specialized parts, we provide
                      reliable solutions that meet your specific requirements.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="uppercase text-gray-900 font-semibold text-normal pt-3.5 pb-1.5">
                  Why Choose Us:
                </p>

                <div className="pl-5">
                  <ul className=" list-disc">
                    <li className="">
                      <span className="font-medium">Quality Assurance: </span>{" "}
                      <br />
                      All products undergo rigorous testing and quality checks
                      to ensure they meet the highest standards.
                    </li>
                    <li>
                      <span className="font-medium">Competitive Pricing: </span>{" "}
                      <br />
                      We offer competitive prices on both new and used items,
                      ensuring you get the best value for your money.
                    </li>
                    <li>
                      <span className="font-medium">Expert Support: </span>
                      <br />
                      Our team of experts is available to assist you with
                      product selection, technical support, and any inquiries
                      you may have.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-2">
                Explore our e-commerce platform today to find the quality parts
                and products you need to keep your operations running smoothly.{" "}
                <a href="" className="">
                  <button
                    type="submit"
                    className="shadow text-white font-semibold text-smallest text-center py-.5 px-2 mt-4 rounded-[.2rem] bg-blue-900 hover:bg-blue-900/90 uppercase"
                  >
                    Link to our store
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ServiceWrapper>
    </>
  );
};

export default Ecommerce;
