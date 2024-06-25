import React from "react";
import ProductCard from "../productCard/productCard";
import classes from "./categoryPreview.style.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Text from "../text-component/text.component";
import Filter from "../filter-component/filter.component";

function CatergoryPreview() {
  const products = useSelector((state) => state.products.products);
  const objectKeys = Object.keys(products);

  return (
    <div className="flex flex-col  w-full  h-[90dvh] overflow-hidden  pt-24 px-8 pb-4 mx-auto  max-w-[1280px]">
      <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
        Shop
      </Text>
      <div className="flex flex-row gap-16 pt-10 h-full">
        <Filter />
        <div className="grid gap-12 flex-1 overflow-scroll h-full ">
          {objectKeys.map((title) => (
            <div key={title}>
              <h1 className="flex flex-row w-full justify-between">
                <Text
                  texttype="text-normal"
                  textstyles="uppercase text-gray-800  font-semibold pb-2.5 block"
                >
                  <Link to={`${title}`}>{title.toUpperCase()}</Link>
                </Text>
              </h1>
              <div className={classes["product-container"]}>
                {/* Display up to 4 products within each title */}
                {products[title].slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatergoryPreview;
