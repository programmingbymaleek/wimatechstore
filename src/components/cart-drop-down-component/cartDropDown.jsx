import React from "react";
import Button from "../button-component/button.component";
import classes from "./cartDropDown.style.module.scss";
import Text from "../text-component/text.component";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { useSelector } from "react-redux";
import {
  deletCartItem,
  setToogleCart,
} from "../../reduxtoolkit/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartDropDown() {
  const { cartItems, toggleCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems);

  const navigate = useNavigate();
  const goToCheckOut = () => {
    navigate("/wimatechstore/cart");
    dispatch(setToogleCart(false));
  };

  const closeCart = () => {
    dispatch(setToogleCart(false));
  };

  return (
    <>
      <div
        className="absolute w-full mx-auto  max-w-[1280px] flex flex-row justify-end px-8 pointer-events-none"
        style={{ zIndex: "revert-layer" }}
      >
        <div className="relative inset-[0px auto auto 0px] m-0 top-9 transform-[translate(799px, 64px)] large:space-x-0 shadow antialiased p-4 bg-opacity-100 bg-white rounded-lg overflow-hidden w-[360px] block z-10 pointer-events-auto">
          <div className="mb-4 pb-4 bg-opacity-100 border-b gap-4 justify-between items-center flex ">
            <Text
              texttype="text-md"
              textstyles="text-gray-800 leading-4 font-semibold"
            >
              Your shopping cart
            </Text>
            <Button
              buttontype="icon-button"
              buttonstyles=""
              buttonFunc={closeCart}
            >
              <CloseIcon className="cursor-pointer" />
            </Button>
          </div>
          <div className="h-[240px] overflow-scroll flex flex-col hide-scrollbar">
            {cartItems.length > 0 &&
              cartItems.map((cartItem) => (
                <div
                  className=" pb-4 gap-3 justify-between items-center grid grid-cols-4"
                  key={cartItem.id}
                >
                  <div className="gap-2 flex-row flex col-span-2	items-center">
                    <img
                      src={cartItem.imageUrl}
                      alt="product image"
                      className="w-12 h-auto"
                    />
                    <div className="flex-1 flex flex-col w-full">
                      <Text
                        texttype="text-normal"
                        textstyles="text-gray-800 leading-4 font-semibold text-sm  text-ellipsis whitespace-nowrap w-8/12 overflow-clip"
                      >
                        {cartItem.name}
                      </Text>
                      <Text
                        texttype="text-normal"
                        textstyles="text-gray-500 font-sm overflow-hidden text-ellipsis whitespace-nowrap mt-0.5 w-8/12 overflow-clip"
                      >
                        {cartItem.make}
                      </Text>
                    </div>
                  </div>

                  <Text
                    texttype="text-normal"
                    textstyles="text-gray-500 font-sm mt-0.5"
                  >
                    {`x${cartItem.quantity}`}
                  </Text>

                  <div className="gap-2 justify-end items-center flex ">
                    <Text
                      texttype="text-sm"
                      textstyles="text-gray-800 leading-4 font-semibold text-sm"
                    >
                      {`$${cartItem.price * cartItem.quantity}`}
                    </Text>
                    <Button
                      buttontype="icon-button"
                      buttonstyles="text-red-800 bg-transparent "
                      buttonFunc={() => dispatch(deletCartItem(cartItem))}
                    >
                      <svg
                        className="w-4 h-4 block cursor-pointer"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                        ></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}

            {cartItems.length == 0 && (
              <Text texttype="text-sm" textstyles="w-full text-center italic">
                No item in cart
              </Text>
            )}
          </div>

          <Button
            buttontype="primary-button"
            buttonstyles="space-y-4 me-2 px-5 py-2.5  w-full items-center focus:ring-[4px] focus:ring-blue-300"
            buttonFunc={goToCheckOut}
          >
            {" "}
            Go to Checkout{" "}
          </Button>
        </div>
      </div>
    </>
  );
}

export default CartDropDown;
