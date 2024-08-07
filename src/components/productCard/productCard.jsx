import React from "react";
import Button from "../button-component/button.component";
import classes from "./product-card.style.module.scss";
import { useContext } from "react";
import { ProductQuickViewContext } from "../contexts/product-quick-view-context";
import Text from "../text-component/text.component";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemsTocart } from "../../reduxtoolkit/features/cart/cartSlice";

function ProductCard({ product, title, productstyle, type, imagestyle }) {
  const { addItemToCart } = useContext(ProductQuickViewContext);
  const { name, price, imageUrl, make, id } = product;

  const { setProductToView } = useContext(ProductQuickViewContext);

  const dispatch = useDispatch();

  const addCartItem = (productToView) => {
    dispatch(addItemsTocart(productToView));
    // Navigate("/checkout-items");
  };

  return (
    <div
      className={` w-[200px] gap-2 h-fit flex flex-col items-center relative ${productstyle}`}
    >
      <Link
        to={`/wimatechstore/shop/${title}/${name}/${id}`}
        className={`w-full small:h-[230px] xxsmall:h-[200px] h-[${imagestyle}]`}
      >
        <img
          src={imageUrl}
          alt={name}
          className="cursor-pointer w-full object-cover mb-[5px] h-full hover:opacity-85 "
        />
      </Link>
      <div className="flex flex-col gap-1 w-full h-[5%] justify-between">
        <Text
          texttype="text-normal"
          textstyles="text-gray-800 w-full overflow-hidden text-ellipsis whitespace-nowrap "
        >
          {name}
        </Text>
        <Text texttype="text-sm" textstyles="w-full uppercase text-gray-500">
          {make}
        </Text>
        <Text
          texttype="text-normal"
          textstyles="text-gray-900 font-semibold w-full"
        >
          {price}
        </Text>
      </div>
      {type == "order-history" ? (
        <></>
      ) : (
        <Button
          buttontype="secondary-button"
          buttonstyles="w-full py-3 mt-2 focus:ring-[4px] focus:outline-none focus:ring-[#2a2a2f0d]"
          buttonFunc={() => addCartItem(product)}
        >
          Add item to cart
        </Button>
      )}
    </div>
  );
}

export default ProductCard;
