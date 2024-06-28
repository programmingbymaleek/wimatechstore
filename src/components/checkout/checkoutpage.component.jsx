import React, { useState } from "react";
import Button from "../button-component/button.component";
import Text from "../text-component/text.component";
import BreadCrumb from "../breadcrumb-component/breadcrumb.component";
import OrderSummary from "../order-summary-component/order-summary.component";
import SetDelivery from "../set-delivery-component/set-delivery.component";
import SetPayment from "../set-payment-component/set-payment.component";

const CheckoutPage = () => {
  const [stage, setStage] = useState(0);

  return (
    <div>
      <div className="flex flex-col w-full py-6 h-full pt-32 gap-3 px-16 pb-16 mx-auto max-w-[1280px] house">
        <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
          Shopping Cart
        </Text>
        <section class="bg-white antialiased md:py-16">
          <form action="#" class="mx-auto max-w-screen-xl 2xl:px-0">
            <BreadCrumb />

            <div class="mt-8 sm:mt-8 large:flex large:items-start large:gap-12 xl:gap-16">
              <div class="min-w-0 flex-1 space-y-8">
                {stage == 1 && <SetDelivery />}
                {stage == 0 && <SetPayment />}

                {/* <div class="space-y-4">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Delivery Methods
                  </h3>

                  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input
                            id="dhl"
                            aria-describedby="dhl-text"
                            type="radio"
                            name="delivery-method"
                            value=""
                            class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            checked
                          />
                        </div>

                        <div class="ms-4 text-sm">
                          <label
                            for="dhl"
                            class="font-medium leading-none text-gray-900 dark:text-white"
                          >
                            {" "}
                            $15 - DHL Fast Delivery{" "}
                          </label>
                          <p
                            id="dhl-text"
                            class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            Get it by Tommorow
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input
                            id="fedex"
                            aria-describedby="fedex-text"
                            type="radio"
                            name="delivery-method"
                            value=""
                            class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                        </div>

                        <div class="ms-4 text-sm">
                          <label
                            for="fedex"
                            class="font-medium leading-none text-gray-900 dark:text-white"
                          >
                            {" "}
                            Free Delivery - FedEx{" "}
                          </label>
                          <p
                            id="fedex-text"
                            class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            Get it by Friday, 13 Dec 2023
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input
                            id="express"
                            aria-describedby="express-text"
                            type="radio"
                            name="delivery-method"
                            value=""
                            class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                        </div>

                        <div class="ms-4 text-sm">
                          <label
                            for="express"
                            class="font-medium leading-none text-gray-900 dark:text-white"
                          >
                            {" "}
                            $49 - Express Delivery{" "}
                          </label>
                          <p
                            id="express-text"
                            class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            Get it today
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="medium:justify-between medium:items-center medium:flex gap-4 mt-1.5">
                  <Button
                    buttontype="secondary-button"
                    buttonstyles={`py-3 px-10 ${
                      stage > 0 ? "opacity-1" : "opacity-0"
                    }`}
                    buttonFunc={() => setStage(stage--)}
                  >
                    Back
                  </Button>
                  <Button
                    buttontype="primary-button"
                    buttonstyles=" medium:mt-0 py-3 px-10 flex mt-4"
                    buttonFunc={() => setStage(stage++)}
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
