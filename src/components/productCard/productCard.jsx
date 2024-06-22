import React from "react";
import Button from "../button-component/button.component";
import classes from "./product-card.style.module.scss";
import { useContext } from "react";
import { ProductQuickViewContext } from "../contexts/product-quick-view-context";

function ProductCard({ product }) {
  const { addItemToCart } = useContext(ProductQuickViewContext);
  const { name, price, imageUrl } = product;
  const { setProductToView } = useContext(ProductQuickViewContext);
  // const addProductCartHandler = () => {
  //   return addItemToCart(product);
  // };

  return (
    <div className={classes["product-card-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={classes["footer"]}>
        <span className={classes["name"]}>{name}</span>
        <span className={classes["price"]}>{price}</span>
      </div>
      <Button buttonType={"inverted"} onClick={""}>
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
