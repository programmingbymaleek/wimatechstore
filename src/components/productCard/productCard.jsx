import React from "react";
import Button from "../button-component/button.component";
import classes from "./product-card.style.module.scss";
import { useContext } from "react";
import { ProductQuickViewContext } from "../contexts/product-quick-view-context";
import Text from "../text-component/text.component";

function ProductCard({ product }) {
  const { addItemToCart } = useContext(ProductQuickViewContext);
  const { name, price, imageUrl, make } = product;
  const { setProductToView } = useContext(ProductQuickViewContext);
  // const addProductCartHandler = () => {
  //   return addItemToCart(product);
  // };

  return (
    <div className={`${classes["product-card-container"]} gap-2`}>
      <img src={imageUrl} alt={name} className="cursor-pointer w-full h-4/6"/>
      <div className={`${classes["footer"]} flex flex-col gap-1`}>
        <Text texttype='text-normal' textstyles={`${classes["name"]} text-gray-800 w-full`}>{name}</Text>
        <Text texttype='text-sm' textstyles={`${classes["name"]} w-full uppercase text-gray-500`}>{make}</Text>
        <Text texttype='text-normal' textstyles={`${classes["price"]} text-gray-900 font-semibold w-full`}>${price}</Text>
      </div>
      <Button buttontype="inverted-button" onClick={""} buttonstyles=''>
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
