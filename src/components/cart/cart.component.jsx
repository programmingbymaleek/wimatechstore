import React from "react";
import NumberInput from "../number-input-component/number-input.component";
import Text from "../text-component/text.component";
import ScrollableSection from "../scrollable-component/scrollable-section.component";
import ItemComponent from "../item-component/item.component";
import ShopProduct from "../../shop_data_file";

const CartComponent = () => {
  return (
    <div>
      <div className="flex flex-col w-full py-6 h-full pt-32 gap-8 px-16 pb-16 mx-auto max-w-[1280px] house">
        <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
          Shopping Cart
        </Text>

        <div className="medium:mt-8 border-gray-100/50 border-b overflow-x-auto mt-6 relative">
          <table className="xmedium:table-fixed text-gray-900 text-base text-left w-full ">
            <tbody className="text-gray-900 text-base text-left ">
              <tr>
                <td className="min-w-56 py-4 whitespace-nowrap w-96">
                  <a href="#" className="font-medium gap-4 items-center flex">
                    <div className="w-12 flex-shrink-0 h-12 aspect-1">
                      <img
                        className="w-full h-full"
                        src="https://i.ibb.co/8855WrF/itel-S23-Specifications-price-and-features-Specs-Tech.webp"
                        alt="imac image"
                      />
                      <img
                        className="w-full h-full hidden"
                        src="https://i.ibb.co/8855WrF/itel-S23-Specifications-price-and-features-Specs-Tech.webp"
                        alt="imac image"
                      />
                    </div>
                    Apple iMac 27”
                  </a>
                </td>

                <td className="p-4">
                  <div className="items-center flex">
                    <NumberInput />
                  </div>
                </td>

                <td className="p-4 text-gray-900 font-bold text-base text-end">
                  $1,499
                </td>

                <td className="py-4">
                  <button
                    data-tooltip-target="remove-tooltip"
                    data-tooltip-placement="top"
                    type="button"
                    className="text-gray-300 p-2 rounded-lg block m-auto"
                  >
                    <svg
                      className="w-6 h-6 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                      ></path>
                    </svg>
                  </button>
                </td>
              </tr>

              <tr>
                <td className="min-w-56 py-4 whitespace-nowrap w-96">
                  <a href="#" className="font-medium gap-4 items-center flex">
                    <div className="w-12 flex-shrink-0 h-12 aspect-1">
                      <img
                        className="w-full h-full"
                        src="https://i.ibb.co/8855WrF/itel-S23-Specifications-price-and-features-Specs-Tech.webp"
                        alt="imac image"
                      />
                      <img
                        className="w-full h-full hidden"
                        src="https://i.ibb.co/8855WrF/itel-S23-Specifications-price-and-features-Specs-Tech.webp"
                        alt="imac image"
                      />
                    </div>
                    Apple iMac 27”
                  </a>
                </td>

                <td className="p-4">
                  <div className="items-center flex">
                    <NumberInput />
                  </div>
                </td>

                <td className="p-4 text-gray-900 font-bold text-base text-end">
                  $1,499
                </td>

                <td className="py-4">
                  <button
                    data-tooltip-target="remove-tooltip"
                    data-tooltip-placement="top"
                    type="button"
                    className="text-gray-300 p-2 rounded-lg block m-auto"
                  >
                    <svg
                      className="w-6 h-6 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                      ></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 ">
          <p className="text-gray-900 font-semibold text-xl ">Order summary</p>

          <div className="mt-4">
            <div className="kMPFLlB8Ns_cJt6_v475">
              <dl className="items-center flex gap-4 justify-between ">
                <dt className="text-gray-500 font-normal text-base">
                  Original price
                </dt>
                <dd className="text-gray-900 font-medium text-base">
                  $6,592.00
                </dd>
              </dl>

              <dl className="items-center flex gap-4 justify-between ">
                <dt className="text-gray-500 font-normal text-base">Savings</dt>
                <dd className="text-green-600 font-medium text-base ">
                  -$299.00
                </dd>
              </dl>

              <dl className="items-center flex gap-4 justify-between ">
                <dt className="text-gray-500 font-normal text-base">
                  Store Pickup
                </dt>
                <dd className="text-gray-900 font-medium text-base">$99</dd>
              </dl>

              <dl className="items-center flex gap-4 justify-between ">
                <dt className="text-gray-500 font-normal text-base">Tax</dt>
                <dd className="text-gray-900 font-medium text-base">$799</dd>
              </dl>
            </div>

            <dl className="items-center flex gap-4 justify-between space-y-4 pt-2 border border-gray-100 ">
              <dt className="text-gray-900 font-bold text-base">Total</dt>
              <dd className="text-gray-900 font-bold text-base">$7,191.00</dd>
            </dl>
          </div>
        </div>

        <div className="medium:justify-center medium:items-center medium:flex gap-4 mt-1.5">
          <a
            href="#"
            className="text-gray-900 text-sm py-2.5 px-2.5 bg-white border"
          >
            Continue Shopping
          </a>
          <a
            href="#"
            className="bg-white medium:mt-0 text-white font-medium text-sm py-2.5 px-5 rounded-lg justify-center items-center w-full flex mt-4"
          >
            Proceed to Checkout
          </a>
        </div>
        <div className="pb-5 pt-20 py-12 flex flex-col gap-5">
          <Text
            texttype="heading-smd"
            textstyles=" leading-6 w-full text-center pb-8"
          >
            Order History
          </Text>
          <ScrollableSection scrollstyles="w-full gap-4 medium:gap-8 justify-between">
            {ShopProduct[2].items.map((item, index) => (
              <ItemComponent
                type="product_item"
                key={item.id}
                data={item}
                productstyle="w-[20rem]"
              />
            ))}
          </ScrollableSection>
        </div>
        <div className="pb-5 pt-20 py-12 flex flex-col gap-5">
          <Text
            texttype="heading-smd"
            textstyles=" leading-6 w-full text-center pb-8"
          >
            Related Products
          </Text>
          <ScrollableSection scrollstyles="w-full gap-4 medium:gap-8 justify-between">
            {ShopProduct[2].items.map((item, index) => (
              <ItemComponent
                type="product_item"
                key={item.id}
                data={item}
                productstyle="w-[20rem]"
              />
            ))}
          </ScrollableSection>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
