import React from "react";
import Text from "../text-component/text.component";
import { useDispatch, useSelector } from "react-redux";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((state) => state.cart);
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = Number(total) + Number(tax);

  return (
    <div className="mt-6 w-full sm:mt-8 large:mt-0 large:max-w-sm xl:max-w-md border shadow-sm h-[60vh] overflow-hidden">
      <div className="flow-root border-b p-5">
        <div className="-my-3">
          <dl className="flex items-center justify-between gap-4 py-3 pb-5">
            <Text texttype="text-normal" textstyles=" font-bold text-gray-900 ">
              Order Summary
            </Text>
            <Text texttype="text-normal" textstyles=" font-bold text-gray-900 ">
              {grandTotal}
            </Text>
          </dl>

          <div className="flex items-center justify-between gap-4 py-0.5">
            <Text
              texttype="text-normal"
              textstyles=" font-normal text-gray-500 "
            >
              Sub Total
            </Text>
            <Text
              texttype="text-normal"
              textstyles=" font-medium text-green-500"
            >
              {total}
            </Text>
          </div>

          <div className="flex items-center justify-between gap-4 py-0.5 pb-4">
            <Text
              texttype="text-normal"
              textstyles=" font-normal text-gray-500 "
            >
              Tax{" "}
              <Text texttype="text-sm" textstyles="">
                (10%)
              </Text>
            </Text>
            <Text
              texttype="text-normal"
              textstyles=" font-medium text-gray-900 "
            >
              {tax}
            </Text>
          </div>
        </div>
      </div>
      <div className="h-[40vh] overflow-scroll">
        {cartItems.map((item) => (
          <div
            className=" px-5 pt-6 gap-6 flex flex-row items-center"
            key={item.id}
          >
            <img src={item.imageUrl} alt="product_image" className="w-16" />
            <div className="flex flex-col gap-2">
              <Text
                texttype="text-normal"
                textstyles="text-gray-900 w-full leading-5"
              >
                {item.name}
              </Text>
              <div className="flex flex-row justify-between items-center">
                <Text
                  texttype="text-normal"
                  textstyles="font-bold text-gray-900"
                >
                  x{item.quantity}
                </Text>
                <Text
                  texttype="text-normal"
                  textstyles="font-bold text-gray-900"
                >
                  {item.price * item.quantity}
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSummary;
