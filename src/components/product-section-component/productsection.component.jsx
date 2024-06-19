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
    <div className={`pt-20 ${classes[`product-section`]}`}>
      <CustomList liststyle="flex-col gap-4 items-center">
        <Text
          texttype="text-normal"
          textstyles="text-blue-800 text-blue font-semibold"
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
        {rest.data.map((item) => (
          <ItemComponent type="product" data={item} key={item.id} />
        ))}
      </ScrollableSection>
    </div>
  );
};

export default ProductSection;
