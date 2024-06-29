import React from "react";
import NumberInput from "../number-input-component/number-input.component";
import Text from "../text-component/text.component";
import ScrollableSection from "../scrollable-component/scrollable-section.component";
import ProductCard from "../productCard/productCard";
import { ReactComponent as BinIcon } from "../../assets/icons/bin.svg";
import { useSelector, useDispatch } from "react-redux";

import ShopProduct from "../../shop_data_file";

import {
  addItemsTocart,
  decrementCartItem,
  deletCartItem,
} from "../../reduxtoolkit/features/cart/cartSlice.js";
import Button from "../button-component/button.component.jsx";
import { Link } from "react-router-dom";

const CartComponent = () => {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((state) => state.cart);
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = Number(total) + Number(tax);

  const reduceCartItem = (itemToReduce) => {
    dispatch(decrementCartItem(itemToReduce));
  };

  const removeCartItems = (itemToDelete) => {
    dispatch(deletCartItem(itemToDelete));
  };

  const addCartItem = (itemToAdd) => {
    dispatch(addItemsTocart(itemToAdd));
  };

  return (
    <div>
      <div className="flex flex-col w-full py-6 h-full pt-32 gap-8 px-16 pb-16 mx-auto max-w-[1280px] house">
        <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
          Shopping Cart
        </Text>

        {cartItems.length > 0 ? (
          <>
            <div className="medium:mt-4 border-gray-100/50 border-b overflow-x-auto mt-6 relative w-full">
              <table className=" text-gray-900 text-base text-left w-full overflow-x-scroll">
                <thead className="border-b w-full ">
                  <tr className="flex flex-row w-max ">
                    <th className="min-w-56 py-4 whitespace-nowrap w-80 ">
                      <Text texttype="text-normal" textstyles="font-bold">
                        Product
                      </Text>
                    </th>
                    <th className="p-4 w-72">
                      <Text texttype="text-normal" textstyles="font-bold">
                        Quantity
                      </Text>
                    </th>
                    <th className="p-4 text-gray-900 font-bold w-56">
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
                      className="text-gray-900 font-semibold text-sm text-left py-3.5 px-3 text-transparent w-fit"
                    >
                      Trash
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-900 text-base text-left w-max">
                  {cartItems.map((itemToCheckOut) => (
                    <tr
                      key={itemToCheckOut.id}
                      className="border-b flex flex-row items-center w-full"
                    >
                      <td className="min-w-56 py-6 whitespace-nowrap w-fit h-max">
                        <div className="font-medium gap-4 items-center flex w-80">
                          <div className="w-16 flex-shrink-0 h-24 aspect-1">
                            <img
                              className="w-full h-full object-cover"
                              src={itemToCheckOut.imageUrl}
                              alt="product image"
                            />
                          </div>
                          {itemToCheckOut.name}
                        </div>
                      </td>

                      <td className="p-4 w-72 h-fit">
                        <div className="w-full">
                          <NumberInput
                            decrementFunc={() => reduceCartItem(itemToCheckOut)}
                            incrementFunc={() => addCartItem(itemToCheckOut)}
                            value={itemToCheckOut.quantity}
                          />
                        </div>
                      </td>

                      <td className="p-4 text-gray-900 font-bold text-base w-56 h-fit">
                        {itemToCheckOut.price}
                      </td>

                      <td className="p-4 text-gray-900 font-bold text-base w-56 h-fit">
                        {itemToCheckOut.price * itemToCheckOut.quantity}
                      </td>

                      <td className="py-4 h-fit">
                        <button
                          data-tooltip-target="remove-tooltip"
                          data-tooltip-placement="top"
                          type="button"
                          className="text-gray-300 p-2 rounded-lg block w-fit"
                        >
                          <BinIcon
                            className="w-6 h-6 hover:text-red-800"
                            onClick={() => removeCartItems(itemToCheckOut)}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
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
                        ${total}
                      </Text>
                    </dd>
                  </dl>

                  <dl className="items-center flex gap-4 justify-between ">
                    <dt>
                      <Text
                        texttype="text-normal"
                        textstyle="text-gray-900 font-normal"
                      >
                        Tax{" "}
                        <Text
                          texttype="text-sm"
                          textstyles="text-gray-600 ml-2"
                        >
                          (10%)
                        </Text>
                      </Text>
                    </dt>
                    <dd>
                      <Text
                        texttype="text-normal"
                        textstyle="text-gray-900 font-medium"
                      >
                        ${tax}
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
                      ${grandTotal}
                    </Text>
                  </dd>
                </dl>
              </div>
            </div>

            <div className="medium:justify-between medium:items-center medium:flex gap-4 mt-1.5">
              <Link to="/wimatechstore/shop" className="w-3/12">
                <Button
                  buttontype="other-button"
                  buttonstyles=" medium:mt-0  py-3 px-5  mt-4 w-full focus:ring-[4px] focus:outline-none focus:ring-[#2a2a2f0d]"
                >
                  Continue Shopping
                </Button>
              </Link>
              <Link to="../checkout" className="w-3/12">
                <Button
                  buttontype="primary-button"
                  buttonstyles=" medium:mt-0  py-3 px-5  mt-4 w-full focus:ring-[4px] focus:ring-blue-300"
                >
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="h-96 flex items-center justify-center flex-col gap-6">
            <Text texttype="text-normal" textstyles="text-gray-700 italic">
              There are no items in your cart right now
            </Text>
            <Link to="/wimatechstore/shop">
              <Button buttontype="primary-button" buttonstyles="py-3 px-6 focus:ring-[4px] focus:ring-blue-300">
                Go to shop
              </Button>
            </Link>
          </div>
        )}

        <div className="pb-5 pt-20 py-12 flex flex-col gap-5 mt-4">
          <Text
            texttype="heading-smd"
            textstyles="leading-6 w-full text-center pb-8"
          >
            Order History
          </Text>
          <ScrollableSection scrollstyles="gap-4 medium:gap-8 justify-between overflow-clip">
            {ShopProduct[2].items.map((item) => (
              <div key={item.id} className="w-[220px]">
                <ProductCard key={item.id} product={item} title={item.make} />
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
          <ScrollableSection scrollstyles="gap-4 medium:gap-8 justify-between">
            {ShopProduct[2].items.map((item) => (
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
