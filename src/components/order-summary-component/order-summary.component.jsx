import React from "react";
import Text from "../text-component/text.component";
import { useSelector, useDispatch } from "react-redux";
import { addCompletedOrders } from "../../utilis/firebase.utils";
import { setcartToEmpty } from "../../reduxtoolkit/features/cart/cartSlice";

const OrderSummary = () => {
  const { cartItems, total } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const placeOrderHandler = async () => {
    try {
      const userId = currentUser ? currentUser.userId : "test_user_123";
      if (!userId || typeof userId !== "string") {
        throw new Error(`Invalid userId: ${userId}`);
      }

      if (
        Array.isArray(cartItems) &&
        cartItems.length > 0 &&
        typeof total === "number"
      ) {
        const date = new Date();
        const items = cartItems;
        const totalAmount = total;
        const status = "completed";
        const orderSent = [
          {
            date: date, // Ensure date is a Date object
            items: [...items],
            totalAmount: totalAmount,
            status: status,
          },
        ];

        await addCompletedOrders(userId, orderSent);
        // setOrderValue((prevValue) => prevValue + 1); // Using functional update for state
        dispatch(setcartToEmpty()); // Clear cart

        // Optionally, you can provide some user feedback here
        console.log("Order placed successfully.");
      } else {
        throw new Error("Cart is empty or total is invalid.");
      }
    } catch (error) {
      console.error("Error placing order:", error);

      // Optionally, handle error UI feedback here
    }
  };

  return (
    <div className="mt-6 w-full sm:mt-8 large:mt-0 large:max-w-sm xl:max-w-md border shadow-sm h-[60vh] overflow-hidden">
      <div className="flow-root border-b p-5">
        <div className="-my-3">
          <dl className="flex items-center justify-between gap-4 py-3 pb-5">
            <Text texttype="text-normal" textstyles=" font-bold text-gray-900 ">
              Order Summary
            </Text>
            <Text texttype="text-normal" textstyles=" font-bold text-gray-900 ">
              {grandTotal}
            </Text>
          </dl>

          <div className="flex items-center justify-between gap-4 py-0.5">
            <Text
              texttype="text-normal"
              textstyles=" font-normal text-gray-500 "
            >
              Sub Total
            </Text>
            <Text
              texttype="text-normal"
              textstyles=" font-medium text-green-500"
            >
              {total}
            </Text>
          </div>

          <div className="flex items-center justify-between gap-4 py-0.5 pb-4">
            <Text
              texttype="text-normal"
              textstyles=" font-normal text-gray-500 "
            >
              Tax{" "}
              <Text texttype="text-sm" textstyles="">
                (10%)
              </Text>
            </Text>
            <Text
              texttype="text-normal"
              textstyles=" font-medium text-gray-900 "
            >
              {tax}
            </Text>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="space-y-2 px-5 gap-4 flex flex-row items-center">
        {cartItems.map((cartItem) => (
          <div key={cartItem.id}>
            <img src={cartItem.imageUrl} alt="product_image" className="w-16" />
=======
      <div className="h-[40vh] overflow-scroll">
        {cartItems.map((item) => (
          <div
            className=" px-5 pt-6 gap-6 flex flex-row items-center"
            key={item.id}
          >
            <img src={item.imageUrl} alt="product_image" className="w-16" />
>>>>>>> feature/m-001
            <div className="flex flex-col gap-2">
              <Text
                texttype="text-normal"
                textstyles="text-gray-900 w-full leading-5"
              >
<<<<<<< HEAD
                {cartItem.name}
=======
                {item.name}
>>>>>>> feature/m-001
              </Text>
              <div className="flex flex-row justify-between items-center">
                <Text
                  texttype="text-normal"
                  textstyles="font-bold text-gray-900"
                >
<<<<<<< HEAD
                  x {cartItem.quantity}
=======
                  x{item.quantity}
>>>>>>> feature/m-001
                </Text>
                <Text
                  texttype="text-normal"
                  textstyles="font-bold text-gray-900"
                >
<<<<<<< HEAD
                  {`$${cartItem.price}`}
=======
                  {item.price * item.quantity}
>>>>>>> feature/m-001
                </Text>
              </div>
            </div>
          </div>
        ))}
<<<<<<< HEAD
      </div>

      <div className="space-y-3">
        {cartItems.length !== 0 && (
          <button
            style={{ border: "2px solid red" }}
            onClick={placeOrderHandler}
          >
            Place order
          </button>
        )}

        {/* <button
          type="submit"
          className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Proceed to Payment
        </button> */}
=======
>>>>>>> feature/m-001
      </div>
    </div>
  );
};

export default OrderSummary;
