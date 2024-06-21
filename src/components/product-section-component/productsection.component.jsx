import React from "react";
import Text from "../text-component/text.component";
import CustomList from "../list-component/list.component";
import ItemComponent from "../item-component/item.component.jsx";
import classes from "./productsection.style.module.scss";
import NavItem from "../nav-item-component/navitem.component";
import ScrollableSection from "../scrollable-component/scrollable-section.component";
import SubNavbar from "../sub-nav-component/sub-navbar.component";

const ProductSection = ({ navItems, ...rest }) => {
  return (
    <div
      className={`small:pt-8 small:pb-8 pt-4 pb-4 tablet:pt-20 px-6 large:px-16  ${
        classes[`product-section`]
      }`}
    >
      <CustomList liststyle="flex flex-col small:gap-4 gap-2 items-center small:pb-0 pb-8">
        <Text
          texttype="text-normal"
          textstyles="text-blue-800 text-blue font-semibold"
        >
          Hurry up to buy
        </Text>
        <Text texttype="heading-lg" textstyles=" leading-6">
          New Arrivals
        </Text>
        <Text texttype="text-normal" textstyles="text-center">
          How can you evaluate content without design
        </Text>
      </CustomList>
      <SubNavbar navdata={navItems} />
      <ScrollableSection scrollstyles="w-full gap-4 medium:gap-8 justify-between">
        {rest.data.map((item) => (
          <ItemComponent type="product" data={item} key={item.id} />
        ))}
      </ScrollableSection>
    </div>
  );
};

export default ProductSection;
