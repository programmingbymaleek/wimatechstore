import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../productCard/productCard";

// import ProductCard from "../product-card/product-card.component";
import classes from "./category.style.module.scss";
import Text from "../text-component/text.component";

function Category() {
  const { category } = useParams();
  const products = useSelector((state) => state.products.products);
  const categoryName = category.toLowerCase();

  // const { products } = useContext(ProductContext);

  // // Build in a safeguard
  const [categoryProduct, setCategoryProduct] = useState(
    products[categoryName]
  );

  useEffect(() => {
    setCategoryProduct(products[categoryName]);
    console.log(categoryName);
  }, [categoryName]);

  return (
    <div>
      <div className="flex flex-col  w-full py-8 overflow-hidden pt-28 px-16 pb-16 mx-auto  max-w-[1280px]">
        <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
          Shop
        </Text>

        <div className="grid flex-1 gap-x-8 gap-y-8 grid-cols-5 w-full overflow-scroll h-full pt-10">
          {categoryProduct ? (
            categoryProduct.map((product_) => (
              <ProductCard
                key={product_.id}
                product={product_}
                title={categoryName}
                productstyle="w-[16vw]"
              />
            ))
          ) : (
            <div style={{ height: "100vh", padding: "10rem" }}>
              <p>No Products for this Category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
