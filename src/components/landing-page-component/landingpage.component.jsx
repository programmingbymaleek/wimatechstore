import React from "react";
import Button from "../button-component/button.component";
import CategorySection from "../category-section-component/categorysection.component";
import HeroSection from "../hero-section-component/herosection.component";
import Navbar from "../nav-bar-component/navbar.component";
import ProductSection from "../product-section-component/productsection.component";
import classes from "./landingpage.style.module.scss";
import Grid from "../grid-component/grid.component";
import Text from "../text-component/text.component";
import FeaturesSection from "../features-section-component/featuressection.component";
import ContactUsSection from "../contactus-section-component/contactus-section.component";
import FooterSection from "../footer-section-component/footersection.component";

const LandingPage = () => {
  return (
    <div className={`${classes[`landing-page`]}`}>
      <HeroSection />
      <CategorySection />
      <ProductSection />
      <Grid
        gridtype="landingpage-grid"
        gridstyle="max-w-[1280px] px-16 mx-auto my-20 grid-cols-3 gap-4 large:h-96 h-[23rem]"
      >
        <div
          className={`large:col-span-2 col-span-3 flex flex-col items-start justify-center large:pl-8 pl-12 gap-7 ${
            classes[`grid-item-1`]
          }`}
        >
          <Text texttype="heading-lg" textstyles="leading-6 uppercase">
            20% Off
          </Text>
          <Button buttontype="primary-button" buttonstyles="px-8 py-3">
            Shop now
          </Button>
        </div>
        <div
          className={`col-span-1 hidden large:flex flex-col items-start justify-center pl-8 gap-7 ${
            classes[`grid-item-2`]
          }`}
        >
          <Text texttype="heading-lg" textstyles="leading-6 uppercase">
            Buy now!
          </Text>
          <Button buttontype="primary-button" buttonstyles="px-8 py-3">
            Shop now
          </Button>
        </div>
      </Grid>
      <ProductSection />

      <FeaturesSection />
      <ContactUsSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
