import React, { useState, useEffect, useCallback } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import FormInput from "../form-input-component/form-input.component";
import Text from "../text-component/text.component";
import InputBox from "../inputbox-component/inputbox.component";

const SetPayment = ({ onValidate }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [displayCredit, setDisplayCredit] = useState(false);
  const [cardComplete, setCardComplete] = useState(false);
  const [creditCardDetails, setCreditCardDetails] = useState({
    cardNumber: "",
    nameOnCard: "",
    expirationDate: "",
    cvv: "",
  });

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const isCreditCardValid =
      selectedOption === "credit-card" &&
      cardComplete &&
      creditCardDetails.cardNumber !== "" &&
      creditCardDetails.nameOnCard !== "" &&
      creditCardDetails.expirationDate !== "" &&
      creditCardDetails.cvv !== "";

    const isPayOnDeliveryValid = selectedOption === "pay-on-delivery";
    const isPaypalValid = selectedOption === "paypal";

    const isValid = isCreditCardValid || isPayOnDeliveryValid || isPaypalValid;

    onValidate(isValid);
  }, [selectedOption, creditCardDetails, cardComplete, onValidate]);

  const handleOptionChange = useCallback((event) => {
    setSelectedOption(event.target.value);
    setDisplayCredit(event.target.value === "credit-card");
  }, []);

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setCreditCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }, []);

  const handleCardChange = useCallback((event) => {
    setCardComplete(event.complete);
  }, []);

  return (
    <div className="space-y-4">
      <Text texttype="heading-base" textstyles="text-gray-700">
        Payment
      </Text>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <InputBox
                inputstyles="text-primary-600 focus:ring-primary-500 text-blue-900 bg-white border-gray-100 rounded-full w-4 h-4 cursor-pointer"
                type="radio"
                name="payment-method"
                id="pay-on-delivery"
                value="pay-on-delivery"
                onChange={handleOptionChange}
              />
            </div>

            <div className="ms-4 flex flex-col">
              <label
                htmlFor="pay-on-delivery"
                className="font-medium leading-none text-gray-900"
              >
                Payment on delivery
              </label>
              <Text texttype="text-sm" textstyles="mt-1 text-gray-500">
                +$15 payment processing fee
              </Text>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <InputBox
                inputstyles="text-primary-600 focus:ring-primary-500 text-blue-900 bg-white border-gray-100 rounded-full w-4 h-4 cursor-pointer"
                type="radio"
                name="payment-method"
                id="paypal-2"
                value="paypal"
                onChange={handleOptionChange}
              />
            </div>

            <div className="ms-4 text-sm flex flex-col">
              <label
                htmlFor="paypal-2"
                className="font-medium leading-none text-gray-900"
              >
                Paypal account
              </label>
              <Text texttype="text-sm" textstyles="mt-1 text-gray-500">
                Connect to your account
              </Text>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <InputBox
                inputstyles="text-primary-600 focus:ring-primary-500 text-blue-900 bg-white border-gray-100 rounded-full w-4 h-4 cursor-pointer"
                type="radio"
                name="payment-method"
                id="credit-card"
                value="credit-card"
                onChange={handleOptionChange}
              />
            </div>

            <div className="ms-4 text-sm flex flex-col">
              <label
                htmlFor="credit-card"
                className="font-medium leading-none text-gray-900"
              >
                Credit Card
              </label>
              <Text texttype="text-sm" textstyles="mt-1 text-gray-500">
                Pay with your credit card
              </Text>
            </div>
          </div>
        </div>

        {displayCredit && (
          <div className="d-flex justify-content-center">
            <div className="rounded-3">
              <div className="py-4">
                <div className="mt-4">
                  <FormInput
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    labelstyle="capitalize font-medium mb-1 block"
                    inputstyle="block w-full rounded-[0.4rem] border p-2.5 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    value={creditCardDetails.cardNumber}
                    required
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mt-4">
                  <FormInput
                    type="text"
                    name="nameOnCard"
                    placeholder="Jane Doe"
                    labelstyle="capitalize font-medium mb-1 block"
                    inputstyle="block w-full rounded-[0.4rem] border p-2.5 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    value={creditCardDetails.nameOnCard}
                    required
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <FormInput
                    type="text"
                    name="expirationDate"
                    placeholder="MM/YY"
                    labelstyle="capitalize font-medium mb-1 block"
                    inputstyle="block w-full rounded-[0.4rem] border p-2.5 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    value={creditCardDetails.expirationDate}
                    required
                    onChange={handleInputChange}
                  />
                  <FormInput
                    type="text"
                    name="cvv"
                    placeholder="123"
                    labelstyle="capitalize font-medium mb-1 block"
                    inputstyle="block w-full rounded-[0.4rem] border p-2.5 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    value={creditCardDetails.cvv}
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CardElement from Stripe */}
        <div>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
            onChange={handleCardChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SetPayment;
