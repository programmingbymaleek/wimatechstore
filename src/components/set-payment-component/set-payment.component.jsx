import React, { useState } from "react";
import FormInput from "../form-input-component/form-input.component";
import Text from "../text-component/text.component";
import InputBox from "../inputbox-component/inputbox.component";

const SetPayment = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [displayCredit, setDisplayCredit] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value == "credit-card") {
      setDisplayCredit(true);
    } else {
      setDisplayCredit(false);
    }
  };

  return (
    <div className="space-y-4">
      <Text texttype="heading-base" textstyles=" text-gray-900 ">
        Payment
      </Text>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <InputBox
                type="radio"
                value="pay-on-delivery"
                onChange={handleOptionChange}
                required
                placeholder="Enter email address"
                name="payment-method"
                inputstyles="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 "
              />
            </div>

            <div className="ms-4 flex flex-col">
              <label
                for="pay-on-delivery"
                className="font-medium leading-none text-gray-900"
              >
                Payment on delivery
              </label>
              <Text
                texttype='text-sm'
                textstyles="mt-1 text-gray-500"
              >
                +$15 payment processing fee
              </Text>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="paypal-2"
                type="radio"
                name="payment-method"
                value="paypal"
                className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                onChange={handleOptionChange}
              />
            </div>

            <div className="ms-4 text-sm flex-col">
              <label
                for="paypal-2"
                className="font-medium leading-none text-gray-900 dark:text-white"
              >
                {" "}
                Paypal account{" "}
              </label>
              <Text
                texttype='text-sm'
                textstyles="mt-1 text-gray-500">
                Connect to your account
              </Text>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="credit-card"
                type="radio"
                name="payment-method"
                value="credit-card"
                className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                onChange={handleOptionChange}
              />
            </div>

            <div className="ms-4 text-sm">
              <label
                for="credit-card"
                className="font-medium leading-none text-gray-900 dark:text-white"
              >
                {" "}
                Credit Card{" "}
              </label>
              <p
                id="credit-card-text"
                className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
              >
                Pay with your credit card
              </p>
            </div>
          </div>
        </div>

        {displayCredit && (
          <div className=" d-flex justify-content-center">
            <div>
              <div className="rounded-3">
                <div className="py-4">
                  <div className="mt-4">
                    <FormInput
                      type="text"
                      name="Card Number"
                      placeholder="1234 5678 9012 3456"
                      labelstyle="capitalize font-medium mb-1 block"
                      inputstyle="block w-full rounded-[0.4rem] border p-2.5 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      //   value={displayName}
                      required
                      //   onChange={onChangeHandler}
                    />
                  </div>

                  <div className="mt-4">
                    <FormInput
                      type="text"
                      name="Name on card"
                      placeholder="Jane Doe"
                      labelstyle="capitalize font-medium mb-1 block"
                      inputstyle="block w-full rounded-[0.4rem] border p-2.5 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      //   value={displayName}
                      required
                      //   onChange={onChangeHandler}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <FormInput
                      type="text"
                      name="Expiration Date"
                      placeholder="MM/YY"
                      labelstyle="capitalize font-medium mb-1 block"
                      inputstyle="block w-full rounded-[0.4rem] border p-2.5 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      //   value={displayName}
                      required
                      //   onChange={onChangeHandler}
                    />
                    <FormInput
                      type="text"
                      name="CVV"
                      placeholder="123"
                      labelstyle="capitalize font-medium mb-1 block"
                      inputstyle="block w-full rounded-[0.4rem] border p-2.5 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      //   value={displayName}
                      required
                      //
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SetPayment;
