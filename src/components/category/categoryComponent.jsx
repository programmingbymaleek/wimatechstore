import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../productCard/productCard";

// import ProductCard from "../product-card/product-card.component";
import classes from "./category.style.module.scss";

function Category() {
  const { category } = useParams();
  const products = useSelector((state) => state.products.products);

  // const { products } = useContext(ProductContext);

  // // Build in a safeguard
  const [categoryProduct, setCategoryProduct] = useState(products[category]);

  useEffect(() => {
    setCategoryProduct(products[category]);
  }, [category]);

  return (
    <div>
      <h1>
        <span>{category.toUpperCase()}</span>
      </h1>
      <div className={classes["product-container"]}>
        {categoryProduct ? (
          categoryProduct.map((product_) => (
            <ProductCard key={product_.id} product={product_} />
          ))
        ) : (
          <div style={{ height: "100vh", padding: "10rem" }}>
            <p>No Products for this Category</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
