import React from "react";
import Text from "../text-component/text.component";
import { useDispatch, useSelector } from "react-redux";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((state) => state.cart);
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = Number(total) + Number(tax);

  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="space-y-4">
          <Text texttype="heading-base" textstyles="text-gray-900">
            Delivery Details
          </Text>
          <div className="flex flex-row gap-14 pt-2 h-full">
            <div className="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Billing & Delivery information
              </h4>

              <dl>
                <dt className="text-base font-medium text-gray-900 dark:text-white">
                  Individual
                </dt>
                <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                  Bonnie Green - +1 234 567 890, San Francisco, California,
                  United States, 3454, Scott Street
                </dd>
              </dl>
            </div>

            <div className="mt-6 sm:mt-8">
              <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex items-center aspect-square w-10 h-10 shrink-0"
                          >
                            <img
                              className="h-auto w-full max-h-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                              alt="imac image"
                            />
                            <img
                              className="hidden h-auto w-full max-h-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                              alt="imac image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Apple iMac 27”
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x1
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $1,499
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex items-center aspect-square w-10 h-10 shrink-0"
                          >
                            <img
                              className="h-auto w-full max-h-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                              alt="imac image"
                            />
                            <img
                              className="hidden h-auto w-full max-h-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                              alt="imac image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Apple iPhone 14
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x2
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $1,998
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </h4>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $6,592.00
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $799
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-lg font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-lg font-bold text-gray-900 dark:text-white">
                      $7,191.00
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderSummary;
