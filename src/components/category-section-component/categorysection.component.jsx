import React from "react";
import CategoryItem from "../category-item/categoryitem.component";
import CustomList from "../list-component/list.component";
import ScrollableSection from "../scrollable-component/scrollable-section.component";
import classes from "./categorysection.style.module.scss";
const CategorySection = () => {
  return (
    <div className={`${classes[`category`]}`}>
      <ScrollableSection scrollstyles="w-full gap-8 justify-between">
        <CategoryItem item="foot wear" />
        <CategoryItem item="foot wear" />
        <CategoryItem item="foot wear" />
        <CategoryItem item="foot wear" />
        <CategoryItem item="foot wear" />
        <CategoryItem item="foot wear" />
        <CategoryItem item="foot wear" />
      </ScrollableSection>
    </div>
  );
};

export default CategorySection;
