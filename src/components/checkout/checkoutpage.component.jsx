import React, { useState, useEffect } from "react";
import Button from "../button-component/button.component";
import Text from "../text-component/text.component";
import BreadCrumb from "../breadcrumb-component/breadcrumb.component";
import OrderSummary from "../order-summary-component/order-summary.component";
import SetDelivery from "../set-delivery-component/set-delivery.component";
import SetPayment from "../set-payment-component/set-payment.component";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [stage, setStage] = useState(0);
  const navigate = useNavigate();
  const goToCheckOut = () => {
    navigate("/wimatechstore/cart");
  };

  return (
    <div>
      <div className="flex flex-col w-full py-6 h-full pt-32 gap-3 px-16 pb-16 mx-auto max-w-[1280px] house">
        <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
          Shopping Cart
        </Text>
        <section className="bg-white antialiased md:py-16">
          <form action="#" className="mx-auto max-w-screen-xl 2xl:px-0">
            <BreadCrumb stage={stage} />

            <div className="mt-8 sm:mt-8 large:flex large:items-start large:gap-12 xl:gap-16">
              <div className="min-w-0 flex-1 space-y-8">
                {stage === 0 && <SetDelivery />}
                {stage === 1 && <SetPayment />}
                <div className="medium:justify-between medium:items-center medium:flex gap-4 mt-1.5">
                  {stage === 0 ? (
                    <Button
                      buttontype="secondary-button"
                      buttonstyles={`py-3 px-10 focus:ring-[4px] focus:outline-none focus:ring-[#2a2a2f0d] ${
                        stage === 0 ? "opacity-1" : "opacity-0"
                      }`}
                      buttonFunc={goToCheckOut}
                    >
                      Back
                    </Button>
                  ) : (
                    <Button
                      buttontype="secondary-button"
                      buttonstyles={`py-3 px-10 focus:ring-[4px] focus:outline-none focus:ring-[#2a2a2f0d] ${
                        stage > 0 ? "opacity-1" : "opacity-0"
                      }`}
                      buttonFunc={() => setStage((prevStage) => prevStage - 1)}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    buttontype="primary-button"
                    buttonstyles="medium:mt-0 py-3 px-10 flex mt-4 focus:ring-[4px] focus:ring-blue-300"
                    buttonFunc={() => setStage((prevStage) => prevStage + 1)}
                  >
                    Continue
                  </Button>
                </div>
              </div>

              <OrderSummary />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CheckoutPage;
