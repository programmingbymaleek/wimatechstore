import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  deletCartItem,
  addItemsTocart,
  decrementCartItem,
} from "../../reduxtoolkit/features/cart/cartSlice";

function CartPreview() {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((state) => state.cart);
  console.log(cartItems);
  console.log(total);

  const increaceCartItem = (itemToIncrease) => {
    dispatch(addItemsTocart(itemToIncrease));
  };

  const reduceCartItem = (itemToReduce) => {
    dispatch(decrementCartItem(itemToReduce));
  };

  const removeCartItems = (itemToDelete) => {
    dispatch(deletCartItem(itemToDelete));
  };
  return (
    <>
      <p>This is the checkout page</p>
      <p>This is the checkout page</p>
      <p>This is the checkout page</p>
      <p>This is the checkout page</p>
      <p>This is the checkout page</p>
      <p>This is the checkout page</p>
      <p>This is the checkout page</p>
      <p>This is the checkout page</p>
      {cartItems.map((itemToCheckOut) => (
        <div key={itemToCheckOut.id}>
          <p>{itemToCheckOut.name}</p>
          <button onClick={() => increaceCartItem(itemToCheckOut)}>add</button>
          <span
            style={{
              color: "red",
              border: "1px solid green",
              margin: ".5rem",
            }}
          >{`   ${itemToCheckOut.quantity}    `}</span>
          <button onClick={() => reduceCartItem(itemToCheckOut)}>reduce</button>
          <>{`${"  "}`}</>
          <button onClick={() => removeCartItems(itemToCheckOut)}>
            remove
          </button>
        </div>
      ))}
    </>
  );
}

export default CartPreview;
