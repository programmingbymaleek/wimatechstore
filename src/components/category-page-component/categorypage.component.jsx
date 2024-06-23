import React from "react";
import ShopProduct from "../../shop_data_file";
import ProductCard from "../productCard/productCard";
import Text from "../text-component/text.component";
import Filter from "../filter-component/filter.component";

const CategoryPage = () => {
  return (
    <div>
      <div className="flex flex-col  w-full py-8 h-full pt-24 px-8 pb-16 mx-auto  max-w-[1280px]">
        <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
          Electronics
        </Text>
        <div className="flex flex-row gap-16 pt-10">
          <Filter />

          <div className="grid gap-12 flex-1 grid-cols-4 w-full">
            {ShopProduct[0].items.map((product) => (
              <div className="w-full h-[350px]">
                <ProductCard key={product.id} product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
