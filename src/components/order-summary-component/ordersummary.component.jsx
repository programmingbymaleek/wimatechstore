import React from "react";
import Text from "../text-component/text.component";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const { cartItems, total } = useSelector((state) => state.cart);
  const deliveryDetails = useSelector((state) => state.deliveryDetails);

  const tax = (total * 0.1).toFixed(2);
  const grandTotal = Number(total) + Number(tax);

  return (
    <div className="large:gap-x-8 medium:gap-x-8 tablet:gap-x-6 medium:grid-cols-12 medium:grid-rows-1 text-sm grid-cols-1 grid">
      <div className="medium:row-end-2 medium:row-span-2 large:col-span-5 col-span-12">
        <div className="bg-white rounded-lg overflow-hidden relative large:pb-4 pb-8 aspect-h-1 h-full">
          <ul
            role="list"
            className="text-gray-500 font-medium text-sm border-gray-200 large:border-t mt-2 large:h-[40vh] overflow-scroll"
          >
            {cartItems.length > 0 &&
              cartItems.map((cartItem) => (
                <li className="py-6 flex" key={`order${cartItem.id}`}>
                  <img
                    src={cartItem.imageUrl}
                    alt="order summary product image"
                    className="object-center object-cover bg-gray-100 rounded-md flex-none w-24 h-24"
                  />
                  <div className="flex-1 space-x-6 flex flex-col gap-1">
                    <Text
                      texttype="text-normal"
                      textstyles="ml-6 text-gray-900 w-6/12"
                    >
                      {cartItem.name}
                    </Text>
                    <Text texttype="text-sm" textstyles="ml-6 text-gray-600">
                      {cartItem.make}
                    </Text>
                    <Text texttype="text-sm" textstyles="">
                      x{cartItem.quantity}
                    </Text>
                  </div>
                  <Text
                    texttype="text-normal"
                    textstyles="font-medium space-x-6 text-gray-900 flex-none"
                  >
                    ${cartItem.price}
                  </Text>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="large:col-span-7 col-span-12 large:ml-6">
        <Text texttype="text-xmd" textstyles="text-gray-900 font-semibold">
          Delivery Details
        </Text>
        <dl className="medium:py-10 medium:pt-4 tablet:py-6 tablet:gap-x-6 xsmall:grid-cols-2 grid-cols-1 xsmall:py-8 pt-4 pb-8 border-gray-200 border-b xsmall:gap-y-8 gap-y-6 grid">
          <div>
            <Text texttype="text-normal" textstyles="text-gray-900 font-medium">
              Delivery address
            </Text>
            <dd className="text-gray-500 mt-3">
              <Text
                texttype="text-normal"
                textstyles="block large:w-32 leading-6"
              >
                {deliveryDetails.address}
              </Text>
            </dd>
          </div>
          <div>
            <Text
              texttype="text-normal"
              textstyles="text-gray-900 font-medium xsmall:text-end w-full block"
            >
              Shipping updates
            </Text>
            <dd className="text-gray-500 mt-3 flex flex-col gap-1">
              <Text texttype="text-normal " textstyles="xsmall:text-end">
                {deliveryDetails.email}
              </Text>
              <Text texttype="text-normal" textstyles="xsmall:text-end">
                {deliveryDetails.phone}
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
                ${total}
              </Text>
            </div>
            <div className="border-gray-100 border-y py-4 justify-between items-center flex">
              <Text texttype="text-normal" textstyles="text-gray-900">
                Tax
              </Text>
              <Text texttype="text-normal" textstyles="text-gray-900">
                ${tax}
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
                ${grandTotal}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
