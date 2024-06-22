import React from "react";
import ProductCard from "../productCard/productCard";
import classes from "./categoryPreview.style.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CatergoryPreview() {
  const products = useSelector((state) => state.products.products);
  const objectKeys = Object.keys(products);
  return (
    <div className={classes[""]}>
      <div>
        {objectKeys.map((title) => (
          <div key={title}>
            <br />
            <br />
            <h1>
              <span>
                <Link to={`${title}`}>{title.toUpperCase()}</Link>
              </span>
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
  );
}

export default CatergoryPreview;
