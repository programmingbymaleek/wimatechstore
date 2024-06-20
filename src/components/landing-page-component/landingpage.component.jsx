import React from "react";
import Button from "../button-component/button.component";
import CategorySection from "../category-section-component/categorysection.component";
import HeroSection from "../hero-section-component/herosection.component";
import ProductSection from "../product-section-component/productsection.component";
import classes from "./landingpage.style.module.scss";
import Text from "../text-component/text.component";
import FeaturesSection from "../features-section-component/featuressection.component";
import ContactUsSection from "../contactus-section-component/contactus-section.component";
import FooterSection from "../footer-section-component/footersection.component";
import backgroundimg1 from "../../assets/images/dummy3.png";
import backgroundimg2 from "../../assets/images/dummy2.png";
import BackgroundImageContainer from "../backgroundimage-container-component/backgroundimage-container.component";

const LandingPage = () => {
  const navItems = [
    "Electronics",
    "Furniture",
    "Jewelries",
    "Kitchen Appliances",
  ];

  const productData = [
    {
      name: "TechBrand Smartphone",
      make: "TechBrand XZ10",
      price: "$699.99",
    },
    {
      name: " CompMaster Laptop",
      make: "CompMaster Pro 15",
      price: "$1,299.99",
    },
    {
      name: "Bluetooth SoundWave Headphones",
      make: "SoundWave 500",
      price: "$199.99",
    },
    {
      name: "Smartwatch",
      make: "WristTech Elite",
      price: "$249.99",
    },
    {
      name: "4K Television",
      make: 'VisionPlus 55"',
      price: "$799.99",
    },
    {
      name: "CoolKeep Refrigerator",
      make: "CoolKeep 3000",
      price: "$1,499.99",
    },
    {
      name: "HeatWave Microwave Oven",
      make: "HeatWave 900",
      price: "$149.99",
    },
    {
      name: "WashPro Washing Machine",
      make: "WashPro 8kg",
      price: "$699.99",
    },
    {
      name: "AirCool Air Conditioner",
      make: "AirCool Ultra",
      price: "$599.99",
    },
    {
      name: "CleanSweep Vacuum Cleaner",
      make: "CleanSweep Turbo",
      price: "$249.99",
    },
    {
      name: "StyleCraft Men's Jacket",
      make: "StyleCraft Winter",
      price: "$129.99",
    },
    {
      name: "TrendyTote Handbag",
      make: "TrendyTote Classic",
      price: "$89.99",
    },
    {
      name: "FastTrack Running Shoes",
      make: "FastTrack Runner",
      price: "$69.99",
    },
    {
      name: "SunGuard Sunglasses",
      make: "SunGuard UV",
      price: "$49.99",
    },
    {
      name: "Wristwatch",
      make: "TimeMaster Deluxe",
      price: "$199.99",
    },
  ];

  return (
    <div className={`w-full`}>
      <HeroSection />
      <CategorySection />
      <ProductSection navItems={navItems} data={productData} />
      <div className="grid w-full max-w-[1280px] px-6 large:px-16 mx-auto my-20 grid-cols-12 gap-4  large:h-96 medium:h-[23rem] h-[30rem]">
        <BackgroundImageContainer
          containerstyle={`large:col-span-8 medium:col-span-6 col-span-12 flex flex-col items-start justify-center large:pl-8 pl-12 gap-4 medium:gap-7 bg-no-repeat bg-cover bg-center rounded-lg
      `}
          image={backgroundimg1}
        >
          <Text texttype="heading-lg" textstyles="leading-10 uppercase w-4/12">
            Limited Time Offer!
          </Text>
          <Button
            buttontype="primary-button"
            buttonstyles="px-5 py-3 capitalize"
          >
            Shop now
          </Button>
        </BackgroundImageContainer>
        <BackgroundImageContainer
          containerstyle={` large:col-span-4 medium:col-span-6 col-span-12 flex flex-col items-start justify-center pl-8 gap-7 bg-no-repeat bg-cover bg-center rounded-lg
          `}
          image={backgroundimg2}
        >
          <Text texttype="heading-lg" textstyles="leading-10 uppercase w-4/12">
            Flash Sale!
          </Text>
          <Button
            buttontype="primary-button"
            buttonstyles="px-5 py-3 capitalize"
          >
            Shop now
          </Button>
        </BackgroundImageContainer>
      </div>
      <ProductSection navItems={navItems} data={productData} />

      <FeaturesSection />
      <ContactUsSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
