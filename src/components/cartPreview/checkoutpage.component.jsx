import React, { useState } from "react";
import Button from "../button-component/button.component";
import Text from "../text-component/text.component";
import BreadCrumb from "../breadcrumb-component/breadcrumb.component";
import OrderSummary from "../order-summary-component/ordersummary.component";
import SetDelivery from "../set-delivery-component/set-delivery.component";
import SetPayment from "../set-payment-component/set-payment.component";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCompletedOrders } from "../../utilis/firebase.utils";
import { clearCart } from "../../reduxtoolkit/features/cart/cartSlice";

const CheckoutPage = () => {
  const [stage, setStage] = useState(0);
  const [orderValue, setOrderValue] = useState(0);
  const [isDeliveryValid, setIsDeliveryValid] = useState(false);
  const [isPaymentValid, setIsPaymentValid] = useState(false);
  const { cartItems, total } = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const deliveryDetails = useSelector((state) => state.deliveryDetails);
  const dispatch = useDispatch();
  console.log(deliveryDetails);
  const navigate = useNavigate();

  const goToCheckOut = () => {
    navigate("/wimatechstore/cart");
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (stage === 0 && !isDeliveryValid) {
      alert("Please fill out all delivery details.");
      return;
    }
    if (stage === 1 && !isPaymentValid) {
      alert("Please select a payment method.");
      return;
    }
    setStage(stage + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    if (stage === 0) {
      goToCheckOut();
    } else {
      setStage((prevStage) => prevStage - 1);
    }
  };

  console.log(currentUser);

  const onOrderRequest = async (event) => {
    event.preventDefault();

    try {
      // Ensure we have a valid user ID, defaulting to "test_user_123" for testing
      const userId = currentUser ? currentUser.userId : "test_user_123";
      if (!userId || typeof userId !== "string") {
        throw new Error(`Invalid userId: ${userId}`);
      }

      // Check if there are items in the cart
      if (cartItems) {
        const date = new Date(); // Create a new Date object for the order date
        const items = cartItems; // Items from the cart
        const totalAmount = total; // Total amount for the order
        const status = "completed"; // Order status

        // Create the order object to be sent to the database
        const orderSent = [
          {
            date: date, // Use the Date object
            items: [...items], // Spread operator to clone the items array
            totalAmount: totalAmount, // Total amount
            deliveryAddress: deliveryDetails,
            status: status, // Order status
          },
        ];

        // Add the order to the completed orders in the database
        await addCompletedOrders(userId, orderSent);

        // Update the local state to reflect the new order and empty the cart
        setOrderValue(orderValue + 1);
        dispatch(clearCart());
      }
    } catch (error) {
      // Log any errors that occur during the order process
      console.error("Error placing order:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col w-full py-6 h-full pt-32 gap-3 px-6 large:px-16 pb-16 mx-auto max-w-[1280px]">
        <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
          Shopping Cart
        </Text>
        <section className="bg-white antialiased md:py-16">
          <form action=" " className="mx-auto max-w-screen-xl 2xl:px-0">
            <BreadCrumb stage={stage} />

            <div className="mt-8 sm:mt-8 large:flex large:items-start large:gap-12 xl:gap-16">
              <div className="min-w-0 flex-1 space-y-8 ">
                {stage === 0 && <SetDelivery onValidate={setIsDeliveryValid} />}
                {stage === 1 && <SetPayment onValidate={setIsPaymentValid} />}
                {stage === 2 && <OrderSummary />}
                <div className="justify-between items-center flex gap-4 mt-1.5">
                  <Button
                    buttontype="secondary-button"
                    buttonstyles="py-3 px-6 xxsmall:px-10 focus:ring-[4px] focus:outline-none focus:ring-[#2a2a2f0d]"
                    buttonFunc={handleBack}
                  >
                    Back
                  </Button>
                  {stage < 2 ? (
                    <Button
                      buttontype="primary-button"
                      buttonstyles="medium:mt-0 py-3 px-6 xxsmall:px-10 flex focus:ring-[4px] focus:ring-blue-300"
                      buttonFunc={handleContinue}
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      buttontype="primary-button"
                      buttonstyles="medium:mt-0 py-3 px-6 xxsmall:px-10 flex mt-4 focus:ring-[4px] focus:ring-blue-300"
                      buttonFunc={onOrderRequest}
                    >
                      Place Order
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CheckoutPage;
