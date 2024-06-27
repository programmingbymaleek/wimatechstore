import React from "react";
import NumberInput from "../number-input-component/number-input.component";
import Text from "../text-component/text.component";
import ScrollableSection from "../scrollable-component/scrollable-section.component";
import ItemComponent from "../item-component/item.component";
import ShopProduct from "../../shop_data_file";
import { ReactComponent as BinIcon } from "../../assets/icons/bin.svg";
import ProductCard from "../productCard/productCard";
const CartComponent = () => {
  return (
    <div>
      <div className="flex flex-col w-full py-6 h-full pt-32 gap-8 px-16 pb-16 mx-auto max-w-[1280px] house">
        <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
          Shopping Cart
        </Text>

        <div className="medium:mt-4 border-gray-100/50 border-b overflow-x-auto mt-6 relative w-full">
          <table className="xmedium:table-fixed text-gray-900 text-base text-left w-full overflow-x-scroll">
            <thead className="border-b w-full stre">
              <tr className="grid grid-cols-5 place-items-stretch mx-auto w ">

                <th className="min-w-56 py-4 whitespace-nowrap w-96 ">
                  <Text texttype="text-normal" textstyles="font-bold">
                    Product
                  </Text>
                </th>
                <th className="p-4">
                  <Text texttype="text-normal" textstyles="font-bold">
                    Quantity
                  </Text>
                </th>
                <th className="p-4 text-gray-900 font-bold ">
                  <Text texttype="text-normal" textstyles="font-bold">
                    Price
                  </Text>
                </th>
                <th className="p-4 text-gray-900 font-bold">
                  <Text texttype="text-normal" textstyles="font-bold">
                    Total
                  </Text>
                </th>
                <th
                  scope="col"
                  class="text-gray-900 font-semibold text-sm text-left py-3.5 px-3 text-transparent"
                >
                  Trash
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900 text-base text-left ">
              <tr className="border-b">
                <td className="min-w-56 py-6 whitespace-nowrap w-96">
                  <a href="#" className="font-medium gap-4 items-center flex">
                    <div className="w-16 flex-shrink-0 h-12 aspect-1">
                      <img
                        className="w-full h-auto"
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
                    <BinIcon className="w-6 h-6 hover:text-red-800" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 ">
          <Text
            texttype="heading-base"
            textstyle="text-gray-900 font-semibold text-xl "
          >
            Order summary
          </Text>

          <div className="mt-4">
            <div className="kMPFLlB8Ns_cJt6_v475">
              <dl className="items-center flex gap-4 justify-between ">
                <dt>
                  <Text
                    texttype="text-normal"
                    textstyle="text-gray-900 font-normal"
                  >
                    Original price
                  </Text>
                </dt>
                <dd>
                  <Text
                    texttype="text-normal"
                    textstyle="text-gray-900 font-medium"
                  >
                    $6,592.00
                  </Text>
                </dd>
              </dl>
              <dl className="items-center flex gap-4 justify-between ">
                <dt>
                  <Text
                    texttype="text-normal"
                    textstyle="text-gray-900 font-normal"
                  >
                    Savings
                  </Text>
                </dt>
                <dd>
                  <Text
                    texttype="text-normal"
                    textstyle="text-green-600 font-medium"
                  >
                    -$299.00
                  </Text>
                </dd>
              </dl>

              <dl className="items-center flex gap-4 justify-between ">
                <dt>
                  <Text
                    texttype="text-normal"
                    textstyle="text-gray-900 font-normal"
                  >
                    Store Pickup
                  </Text>
                </dt>
                <dd>
                  <Text
                    texttype="text-normal"
                    textstyle="text-gray-900 font-medium"
                  >
                    $99{" "}
                  </Text>
                </dd>
              </dl>

              <dl className="items-center flex gap-4 justify-between ">
                <dt>
                  <Text
                    texttype="text-normal"
                    textstyle="text-gray-900 font-normal"
                  >
                    Tax
                  </Text>
                </dt>
                <dd>
                  <Text
                    texttype="text-normal"
                    textstyle="text-gray-900 font-medium"
                  >
                    $799{" "}
                  </Text>
                </dd>
              </dl>
            </div>

            <dl className="items-center flex gap-4 justify-between space-y-4 py-2 border-y border-gray-100 mt-4">
              <dt>
                <Text
                  texttype="text-normal"
                  textstyle="text-gray-900 font-bold"
                >
                  Total
                </Text>
              </dt>
              <dd>
                <Text
                  texttype="text-normal"
                  textstyle="text-gray-900 font-bold"
                >
                  $7,191.00{" "}
                </Text>
              </dd>
            </dl>
          </div>
        </div>

        <div className="medium:justify-between medium:items-center medium:flex gap-4 mt-1.5">
          <a
            href="#"
            className="text-gray-900 text-sm py-3 px-2.5 bg-white border w-3/12 text-center rounded-lg"
          >
            Continue Shopping
          </a>
          <a
            href="#"
            className="bg-blue-800 medium:mt-0 text-white font-medium text-sm py-3 px-5 rounded-lg justify-center items-center w-3/12 flex mt-4"
          >
            Proceed to Checkout
          </a>
        </div>
        <div className="pb-5 pt-20 py-12 flex flex-col gap-5 mt-4">
          <Text
            texttype="heading-smd"
            textstyles="leading-6 w-full text-center pb-8"
          >
            Order History
          </Text>
          <ScrollableSection scrollstyles="w-full gap-4 medium:gap-8 justify-between">
            {ShopProduct[2].items.map((item, index) => (
              <div key={item.id}>
                <ProductCard
                  key={item.id}
                  product={item}
                  title={item.make}
                  productstyle="w-[200px]"
                />
              </div>
            ))}
          </ScrollableSection>
        </div>
        <div className="pb-5 pt-20 py-12 flex flex-col gap-5 mt-4">
          <Text
            texttype="heading-smd"
            textstyles="leading-6 w-full text-center pb-8"
          >
            Related Products
          </Text>
          <ScrollableSection scrollstyles="w-full gap-4 medium:gap-8 justify-between">
            {ShopProduct[2].items.map((item, index) => (
              <div key={item.id}>
                <ProductCard
                  key={item.id}
                  product={item}
                  title={item.make}
                  productstyle="w-[200px]"
                />
              </div>
            ))}
          </ScrollableSection>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
