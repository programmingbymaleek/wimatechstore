import React from "react";
import ScrollableSection from "../scrollable-component/scrollable-section.component";
import classes from "./categorysection.style.module.scss";
import ItemComponent from "../item-component/item.component";
import bag from "../../assets/icons/bag.svg";
import watch from "../../assets/icons/watch.svg";

const CategorySection = () => {
  return (
    <div className={`${classes[`category`]} px-6 large:px-16 pt-8 pb-16`}>
      <ScrollableSection scrollstyles="w-full gap-4 medium:gap-8 justify-between">
        <ItemComponent item="bags" type="category" image={bag} />
        <ItemComponent item="jewelries" type="category" image={watch} />
        <ItemComponent item="jewelries" type="category" image={watch} />
        <ItemComponent item="jewelries" type="category" image={watch} />
        <ItemComponent item="jewelries" type="category" image={watch} />
        <ItemComponent item="jewelries" type="category" image={watch} />
        <ItemComponent item="jewelries" type="category" image={watch} />
        <ItemComponent item="jewelries" type="category" image={watch} />
        <ItemComponent item="jewelries" type="category" image={watch} />
        <ItemComponent item="jewelries" type="category" image={watch} />
      </ScrollableSection>
    </div>
  );
};

export default CategorySection;
