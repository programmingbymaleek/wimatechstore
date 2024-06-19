import React from "react";
import CustomList from "../list-component/list.component";
import Text from "../text-component/text.component";
import ItemComponent from "../item-component/item.component";
import truck from "../../assets/icons/truck.svg";
import sale from "../../assets/icons/sale.svg";
import card from "../../assets/icons/card.svg";
import shield from "../../assets/icons/shield.svg";

const FeaturesSection = () => {
  const featureData = [
    {
      title: "Fast Shipping",
      description: "Enjoy speedy delivery to your doorstep",
      image: truck,
    },
    {
      title: "Secure Payments",
      description: "Shop confidently with our secure payment options.",
      image: card,
    },

    {
      title: "Exclusive Deals",
      description: "Unlock special offers and discounts just for you.",
      image: sale,
    },
    {
      title: "Quality Guarantee",
      description: "Only the best products, handpicked for you.",
      image: shield,
    },
  ];
  return (
    <div className="bg-slate-500/10 flex items-center justify-center my-20">
      <div className="max-w-[1280px] px-16 mx-auto w-full">
        <Text
          texttype="heading-base"
          textstyles="leading-6 uppercase w-full text-center pt-12 block"
        >
          Features
        </Text>
        <CustomList liststyle="flex-row justify-between items-center py-12 pt-4 gap-4 w-full">
          {featureData.map((item) => (
            <ItemComponent type="feature" data={item} />
          ))}
        </CustomList>
      </div>
    </div>
  );
};

export default FeaturesSection;
