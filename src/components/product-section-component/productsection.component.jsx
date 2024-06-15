import React from "react";
import Text from "../text-component/text.component";
import CustomList from "../list-component/list.component";
import ProductItem from "../product-item-component/productitem.component";
import classes from "./productsection.style.module.scss";
import NavItem from "../nav-item-component/navitem.component";
import ScrollableSection from "../scrollable-component/scrollable-section.component";
import SubNavbar from "../sub-nav-component/sub-navbar.component";

const ProductSection = () => {
  const navItems = ["Home", "About", "Services", "Contact"];
  return (
    <div className={`pt-20 ${classes[`product-section`]}`}>
      <CustomList liststyle="flex-col gap-6 items-center">
        <Text
          texttype="text-md"
          textstyles="text-[#00007B] capitalize text-blue font-semibold"
        >
          Hurry up to buy
        </Text>
        <Text texttype="heading-lg" textstyles=" leading-6">
          New Arrivals
        </Text>
        <Text texttype="text-normal" textstyles="">
          How can you evaluate content without design
        </Text>
      </CustomList>
      <SubNavbar navdata={navItems} />
      <ScrollableSection scrollstyles="w-full gap-8 justify-between">
        <ProductItem>Electronics</ProductItem>
        <ProductItem>Electronics</ProductItem>
        <ProductItem>Electronics</ProductItem>
        <ProductItem>Electronics</ProductItem>
        <ProductItem>Electronics</ProductItem>
        <ProductItem>Electronics</ProductItem>
      </ScrollableSection>
    </div>
  );
};

export default ProductSection;
