"use client";

import React, { useState } from "react";
import image1 from "../../../../public/assets/images/bgImage.jpg";
import ecommerce from "../../../../public/assets/images/ecommerce.png";
import maintenanceImage from "../../../../public/assets/images/maintenance.jpeg";
import website from "../../../../public/assets/images/website.jpeg";
import installationImage from "../../../../public/assets/images/installation.webp";
import productinspection from "../../../../public/assets/images/product-inspection.jpg";
import validation from "../../../../public/assets/images/validation.jpg";
import calibration from "../../../../public/assets/images/calibration.jpeg";
import support from "../../../../public/assets/images/support.jpg";

import Card from "../card-component/card.component";
import ServiceModal from "../service-modal-component/servicemodal.component";

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Comprehensive E-commerce Platform for Quality Parts and Products",
      description:
        "Our e-commerce platform offers a wide array of high-quality products designed to meet the diverse needs of our customers. Whether you're in the market for medical devices, electrical parts, or specialized components, our platform is your go-to source.",
      image: ecommerce,
    },
    {
      id: 2,
      title: "Networking and IT Support Setup",
      description:
        "We provide secure and reliable IT infrastructure, from initial setup to server installation, ensuring your business operates without technological hurdles.",
      image: support,
    },
    {
      id: 3,
      title: "Product inspection",
      description:
        "Our meticulous inspections ensure your technological devices meet the highest standards of quality and compliance.",
      image: validation,
    },
    {
      id: 4,
      title: "verification and validation",
      description:
        "We verify and validate your products to meet all required specifications, ensuring they are market-ready and reliable.",
      image: productinspection,
    },
    {
      id: 5,
      title: "calibration",
      description:
        "Our expert calibration services maintain accurate measurements and enhance the performance of your devices.",
      image: calibration,
    },
    {
      id: 6,
      title: "Web and App Design, Development, and Maintenance",
      description:
        "End-to-End Development: We craft innovative websites and apps, providing continuous support and ensuring your digital presence aligns with your business goals.",
      image: website,
    },
    {
      id: 7,
      title: "medical device parts",
      description:
        "Our expert calibration services maintain accurate measurements and enhance the performance of your devices.",
      image: installationImage,
    },
  ];

  const [selectedService, setSelectedService] = useState(0);
  const [modal, setModal] = useState(false);

  const openModal = (id) => {
    setSelectedService(id);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="px-12 flex flex-col py-8" id="services">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <p className="head-medium tracking-tight font-semibold text-gray-900">
          Services
        </p>
        <p className="mt-4 text-normal leading-6 text-gray-900">
          At Certified Global Enterprise, we provide a comprehensive suite of
          services designed to meet the diverse needs of our clients. From
          advanced IT solutions and precise engineering services to expert
          consultancy and a robust eCommerce platform, we are committed to
          delivering excellence and driving success for your business.
        </p>
      </div>
      <div className="md:mt-12 mt-8 flex flex-col gap-8">
        <div className="flex flex-col gap-4 w-full">
          <p className="font-semibold text-larger capitalize">IT Support</p>
          <div className="md:gap-8 gap-6 grid grid-cols-3 w-full">
            <Card service={services[0]} openModal={openModal} />
            <Card service={services[5]} openModal={openModal} />
            <Card service={services[1]} openModal={openModal} />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <p className="font-semibold text-larger capitalize">Engineering</p>
          <div className="md:gap-8 gap-6 grid grid-cols-3 w-full">
            <Card service={services[3]} openModal={openModal} />
            <Card service={services[4]} openModal={openModal} />
            <Card service={services[6]} openModal={openModal} />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <p className="font-semibold text-larger capitalize">Consultancy</p>
          <div className="md:gap-8 gap-6 grid grid-cols-3 w-full">
            <Card service={services[2]} openModal={openModal} />
          </div>
        </div>
      </div>
      {modal && (
        <ServiceModal
          service={services[selectedService - 1]}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};
