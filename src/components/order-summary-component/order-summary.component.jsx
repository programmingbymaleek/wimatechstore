import React from "react";
import Text from "../text-component/text.component";

const OrderSummary = () => {
  return (
    <div className="mt-6 w-full space-y-6 sm:mt-8 large:mt-0 large:max-w-sm xl:max-w-md border shadow-sm h-[60vh]">
      <div className="flow-root border-b p-5">
        <div className="-my-3">
          <dl className="flex items-center justify-between gap-4 py-3 pb-5">
            <Text
              texttype="text-normal"
              textstyles=" font-bold text-gray-900 dark:text-white"
            >
              Order Summary
            </Text>
            <Text
              texttype="text-normal"
              textstyles=" font-bold text-gray-900 dark:text-white"
            >
              $8,392.00
            </Text>
          </dl>

          <div className="flex items-center justify-between gap-4 py-0.5">
            <Text
              texttype="text-normal"
              textstyles=" font-normal text-gray-500 dark:text-gray-400"
            >
              Sub Total
            </Text>
            <Text
              texttype="text-normal"
              textstyles=" font-medium text-green-500"
            >
              0
            </Text>
          </div>

          <div className="flex items-center justify-between gap-4 py-0.5">
            <Text
              texttype="text-normal"
              textstyles="  font-normal text-gray-500 dark:text-gray-400"
            >
              Standard Shipping
            </Text>
            <Text
              texttype="text-normal"
              textstyles=" font-medium text-gray-900 dark:text-white"
            >
              $99
            </Text>
          </div>

          <div className="flex items-center justify-between gap-4 py-0.5 pb-4">
            <Text
              texttype="text-normal"
              textstyles=" font-normal text-gray-500 dark:text-gray-400"
            >
              Tax
            </Text>
            <Text
              texttype="text-normal"
              textstyles=" font-medium text-gray-900 dark:text-white"
            >
              $199
            </Text>
          </div>
        </div>
      </div>
      <div className="space-y-2 px-5 gap-4 flex flex-row items-center">
        <img
          src="https://i.ibb.co/23QfjPH/cheap.webp"
          alt="product_image"
          className="w-16"
        />
        <div className="flex flex-col gap-2">
          <Text
            texttype="text-normal"
            textstyles="text-gray-900 w-full leading-5"
          >
            Apple Macbook
          </Text>
          <div className="flex flex-row justify-between items-center">
            <Text texttype="text-normal" textstyles="font-bold text-gray-900">
              x1
            </Text>
            <Text texttype="text-normal" textstyles="font-bold text-gray-900">
              $5000
            </Text>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
