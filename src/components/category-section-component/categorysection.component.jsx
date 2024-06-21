import React from "react";
import ScrollableSection from "../scrollable-component/scrollable-section.component";
import ItemComponent from "../item-component/item.component";
import bag from "../../assets/icons/bag.svg";
import watch from "../../assets/icons/watch.svg";

const CategorySection = () => {
  return (
    <div className={`px-6 large:px-16 pt-8 pb-16 mx-auto my-8 max-w-[1280px]`}>
      <ScrollableSection scrollstyles="w-full gap-4 medium:gap-8 justify-between">
        <ItemComponent
          item="iphone"
          type="category"
          image="https://i.ibb.co/NZYHkwj/images1.webp"
        />
        <ItemComponent
          item="techno"
          type="category"
          image="https://i.ibb.co/ydvHtm7/techno1.webp"
        />
        <ItemComponent
          item="xiaomi"
          type="category"
          image="https://i.ibb.co/nR1yGLD/xiomi.webp"
        />
        <ItemComponent
          item="samsung"
          type="category"
          image="https://i.ibb.co/CWpN4Gg/samsung.webp"
        />
        <ItemComponent
          item="vivo"
          type="category"
          image="https://i.ibb.co/9HkZ9mj/vivo.webp"
        />
        <ItemComponent
          item="oppo"
          type="category"
          image="https://i.ibb.co/7bK4y8d/oppo.webp"
        />
        <ItemComponent
          item="gionee"
          type="category"
          image="https://i.ibb.co/tKyZDGJ/gionee.webp"
        />
        <ItemComponent
          item="infinix"
          type="category"
          image="https://i.ibb.co/jb5sLxn/infinix.webp"
        />
        <ItemComponent
          item="huawei"
          type="category"
          image="https://i.ibb.co/4PHxMjd/image4.webp"
        />
        <ItemComponent
          item="itel"
          type="category"
          image="https://i.ibb.co/fXBrTw8/image7.webp"
        />
        <ItemComponent
          item="nokia"
          type="category"
          image="https://i.ibb.co/bQtzH1r/nokia.webp"
        />
      </ScrollableSection>
    </div>
  );
};

export default CategorySection;
