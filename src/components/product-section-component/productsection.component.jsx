import React from "react";
import Text from "../text-component/text.component";
import ItemComponent from "../item-component/item.component.jsx";
import ScrollableSection from "../scrollable-component/scrollable-section.component";
import SubNavbar from "../sub-nav-component/sub-navbar.component";

const ProductSection = ({ navItems, ...rest }) => {
  return (
    <div className="small:pt-8 small:pb-8 pt-4 pb-4 tablet:pt-20 px-6 large:px-16 mx-auto  max-w-[1280px] ">
      <div className="list-style-none m-0 p-0 flex flex-col small:gap-4 gap-2 items-center small:pb-0 pb-8">
        {rest.header && (
          <Text
            texttype="text-normal"
            textstyles="text-blue-800 text-blue font-semibold"
          >
            Hurry up to buy
          </Text>
        )}
        {rest.title && (
          <Text texttype="heading-lg" textstyles=" leading-6">
            {rest.title}
          </Text>
        )}
        {rest.subtitle && (
          <Text texttype="text-normal" textstyles="text-center">
            How can you evaluate content without design
          </Text>
        )}
      </div>
      {navItems && <SubNavbar navdata={navItems} />}
      <ScrollableSection scrollstyles="w-full gap-4 medium:gap-8 justify-between">
        {rest.data.map((item, index) => (
          <ItemComponent type="product" data={item} key={index} />
        ))}
      </ScrollableSection>
    </div>
  );
};

export default ProductSection;
