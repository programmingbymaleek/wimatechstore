import React from "react";
import Button from "../button-component/button.component";
import classes from "./cartDropDown.style.module.scss";

function CartDropDown() {
  return (
    <div className={classes["cart-dropdown-container"]}>
      <div className={classes["cart-items"]}></div>
      <Button>Go to check out </Button>
    </div>
  );
}

export default CartDropDown;
