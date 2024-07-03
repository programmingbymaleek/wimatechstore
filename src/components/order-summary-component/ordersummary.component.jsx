import React from "react";
import Text from "../text-component/text.component";

const OrderSummary = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="mt-2">
        <div className="acb">
          <div className="large:gap-x-8 medium:gap-x-8 tablet:gap-x-6 medium:grid-cols-12 medium:grid-rows-1 text-sm grid-cols-1 grid">
            <div className="medium:row-end-2 medium:row-span-2 medium:col-span-5 tablet:col-span-4">
              <div className="bg-white rounded-lg overflow-hidden relative pb-4 aspect-h-1 h-full">
                <ul
                  role="list"
                  class="text-gray-500 font-medium text-sm border-gray-200 border-t mt-2 h-[40vh] overflow-scroll"
                >
                  <li class="py-6 flex">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/confirmation-page-06-product-01.jpg"
                      alt="Model wearing men's charcoal basic tee in large."
                      class="object-center object-cover bg-gray-100 rounded-md flex-none w-24 h-24"
                    />
                    <div class="flex-1 space-x-6 flex flex-col">
                      <Text
                        texttype="text-normal"
                        textstyles="ml-6 text-gray-600"
                      >
                        Basic Tee
                      </Text>
                      <Text texttype="text-normal" textstyles="">
                        x1
                      </Text>
                    </div>
                    <Text
                      texttype="text-normal"
                      textstyles="font-medium space-x-6 text-gray-900 flex-none"
                    >
                      $36.00
                    </Text>
                  </li>
                  <li class="py-6 flex">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/confirmation-page-06-product-01.jpg"
                      alt="Model wearing men's charcoal basic tee in large."
                      class="object-center object-cover bg-gray-100 rounded-md flex-none w-24 h-24"
                    />
                    <div class="flex-1 space-x-6 flex flex-col">
                      <Text
                        texttype="text-normal"
                        textstyles="ml-6 text-gray-600"
                      >
                        Basic Tee
                      </Text>
                      <Text texttype="text-normal" textstyles="">
                        x1
                      </Text>
                    </div>
                    <Text
                      texttype="text-normal"
                      textstyles="font-medium space-x-6 text-gray-900 flex-none"
                    >
                      $36.00
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
            <div className="medium:col-span-7 tablet:col-span-12 ml-6">
              <Text texttype="heading-base" textstyles="text-gray-900">
                Delivery Details
              </Text>
              <dl className="medium:py-10 medium:pt-4 tablet:py-6 tablet:gap-x-6 tablet:grid-cols-2 py-8 border-gray-200 border-b gap-y-8 grid-cols-1 grid">
                <div>
                  <Text
                    texttype="text-normal"
                    textstyles="text-gray-900 font-medium"
                  >
                    Delivery address
                  </Text>
                  <dd className="text-gray-500 mt-3">
                    <Text
                      texttype="text-normal"
                      textstyles="block w-32 leading-6"
                    >
                      Floyd Miles 7363 Cynthia Pass
                    </Text>
                  </dd>
                </div>
                <div>
                  <Text
                    texttype="text-normal"
                    textstyles="text-gray-900 font-medium"
                  >
                    Shipping updates
                  </Text>
                  <dd className="text-gray-500 mt-3 flex flex-col gap-1">
                    <Text texttype="text-normal" textstyles="">
                      f•••@example.com
                    </Text>
                    <Text texttype="text-normal" textstyles="">
                      1•••••••••40
                    </Text>
                  </dd>
                </div>
              </dl>
              <div className="medium:col-span-7 tablet:col-span-12">
                <div className="py-4 large:mt-0 large:col-span-7 text-sm mt-4">
                  <div className="pb-4 justify-between items-center flex">
                    <Text texttype="text-normal" textstyles="text-gray-900">
                      Subtotal
                    </Text>
                    <Text texttype="text-normal" textstyles="text-gray-900">
                      $72
                    </Text>
                  </div>
                  <div className="border-gray-100 border-y py-4 justify-between items-center flex">
                    <Text texttype="text-normal" textstyles="text-gray-900">
                      Tax
                    </Text>
                    <Text texttype="text-normal" textstyles="text-gray-900">
                      $6.16
                    </Text>
                  </div>
                  <div className="border-gray-100 border-y py-4 justify-between items-center flex">
                    <Text
                      texttype="text-normal"
                      textstyles="text-gray-900 font-medium"
                    >
                      Order total
                    </Text>
                    <Text texttype="text-normal" textstyles="font-medium">
                      $83.16
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
