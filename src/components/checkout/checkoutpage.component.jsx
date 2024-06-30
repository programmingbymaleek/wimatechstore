import React, { useState } from "react";
import Button from "../button-component/button.component";
import Text from "../text-component/text.component";
import BreadCrumb from "../breadcrumb-component/breadcrumb.component";
import OrderSummary from "../order-summary-component/order-summary.component";
import SetDelivery from "../set-delivery-component/set-delivery.component";
import SetPayment from "../set-payment-component/set-payment.component";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [stage, setStage] = useState(0);
  const [isDeliveryValid, setIsDeliveryValid] = useState(false);
  const [isPaymentValid, setIsPaymentValid] = useState(false);
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

  const handleOrder = (e) => {
    e.preventDefault();
    // Add your order handling logic here
    console.log("Order placed successfully");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit handling logic here
    console.log("Submitted successfully");
  };

  return (
    <div>
      <div className="flex flex-col w-full py-6 h-full pt-32 gap-3 px-16 pb-16 mx-auto max-w-[1280px]">
        <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
          Shopping Cart
        </Text>
        <section className="bg-white antialiased md:py-16">
          <form action=" " className="mx-auto max-w-screen-xl 2xl:px-0">
            <BreadCrumb stage={stage} />

            <div className="mt-8 sm:mt-8 large:flex large:items-start large:gap-12 xl:gap-16">
              <div className="min-w-0 flex-1 space-y-8">
                {stage === 0 && <SetDelivery onValidate={setIsDeliveryValid} />}
                {stage === 1 && <SetPayment onValidate={setIsPaymentValid} />}
                {stage === 2 && <OrderSummary />}
                <div className="medium:justify-between medium:items-center medium:flex gap-4 mt-1.5">
                  <Button
                    buttontype="secondary-button"
                    buttonstyles="py-3 px-10 focus:ring-[4px] focus:outline-none focus:ring-[#2a2a2f0d]"
                    buttonFunc={handleBack}
                  >
                    Back
                  </Button>
                  {stage < 2 ? (
                    <Button
                      buttontype="button"
                      buttonstyles="medium:mt-0 py-3 px-10 flex mt-4 focus:ring-[4px] focus:ring-blue-300"
                      buttonFunc={handleContinue}
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      buttontype="primary-button"
                      buttonstyles="medium:mt-0 py-3 px-10 flex mt-4 focus:ring-[4px] focus:ring-blue-300"
                      buttonFunc={handleOrder}
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
