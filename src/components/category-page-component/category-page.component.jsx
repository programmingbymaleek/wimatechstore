import React from "react";
import ShopProduct from "../../shop_data_file";
import ProductCard from "../productCard/productCard";
import Text from "../text-component/text.component";
import Filter from "../filter-component/filter.component";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  const products = useSelector((state) => state.products.products);
  // Build in a safeguard
  const [categoryProduct, setCategoryProduct] = useState(products[category]);

  useEffect(() => {
    setCategoryProduct(products[category]);
  }, [category]);
  return (
    <div>
      <div className="flex flex-col  w-full py-8 h-[90dvh] overflow-hidden pt-24 px-8 pb-16 mx-auto  max-w-[1280px]">
        <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
          Electronics
        </Text>
        <div className="flex flex-row gap-16 pt-10 h-full">
          <Filter />

          <div className="grid flex-1 gap-x-8 gap-y-2 grid-cols-4 w-full overflow-scroll h-full ">
            {categoryProduct ? (
              categoryProduct.map((product) => (
                <div className="w-full h-[350px]">
                  <ProductCard key={product.id} product={product} />
                </div>
              ))
            ) : (
              <div style={{ height: "100vh", padding: "10rem" }}>
                <p>No Products for this Category</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
