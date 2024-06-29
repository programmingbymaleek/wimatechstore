import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Text from "../text-component/text.component";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import { ReactComponent as AddCartIcon } from "../../assets/icons/cart_add.svg";

import NumberInput from "../number-input-component/number-input.component";
import Button from "../button-component/button.component";
import Stars from "../stars-component/stars.component";
import ScrollableSection from "../scrollable-component/scrollable-section.component";
import ItemComponent from "../item-component/item.component";
import ShopProduct from "../../shop_data_file";
import ProductCard from "../productCard/productCard";
import { addItemsTocart } from "../../reduxtoolkit/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import InputBox from "../inputbox-component/inputbox.component";

const Product = () => {
  const { category, id } = useParams();
  const products = useSelector((state) => state.products.products);
  const [productToView, setProductToView] = useState(null);

  const dispatch = useDispatch();

  const addCartItem = (productToView) => {
    dispatch(addItemsTocart(productToView));
    // Navigate("/checkout-items");
  };

  useEffect(() => {
    if (products && products[category]) {
      const product = products[category].find((product) => product.id == id);
      setProductToView(product);
    }
  }, [products, category, id]);

  if (!products || !products[category]) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or message
  }

  if (!productToView) {
    return <div className="">Product not found</div>; // Handle the case where the product is not found
  }
  console.log(productToView);
  console.log(products[category]);

  return (
    <div>
      <div className="flex flex-col w-full py-8 h-full px-16 pt-32 pb-16 mx-auto max-w-[1280px]">
        <Button
          buttontype="icon-button"
          buttonstyles="text-white bg-white border border-gray-100 hover:bg-gray-100/50 rounded-lg text-sm p-2.5 w-max text-center inline-flex items-center me-2 "
        >
          <BackIcon className="w-5 h-5" />
        </Button>
        <div className="w-full overflow-clip pt-8">
          <div className="large:grid-cols-2 gap-8 grid w-full items-center">
            <div className="w-9/12 mx-auto p-4 bg-white rounded-lg ">
              <img
                className="w-full h-auto mx-auto"
                src={productToView.imageUrl}
                alt=""
              />
            </div>

            <div className="medium:mt-0 mt-6 w-full block">
              <Text
                texttype="heading-smd"
                textstyles="medium:text-2xl text-gray-900 font-semibold text-xl mt-4 w-full block"
              >
                {productToView.name}
              </Text>

              <div className="medium:mt-0 gap-4 justify-between medium:items-center items-center flex mt-6 medium:flex-row flex-row w-full">
                <div className="mt-4 flex gap-3 medium:flex-row flex-col justify-start medium:min-fit flex-1">
                  <Text
                    texttype="heading-xmd"
                    textstyles="medium:text-3xl text-gray-900 font-extrabold text-2xl"
                  >
                    ${productToView.price}
                  </Text>

                  <div className="gap-2 items-center flex">
                    <Stars rating={productToView.rating} />
                    <p className="text-gray-300 leading-4 font-medium text-sm">
                      ({productToView.rating})
                    </p>
                  </div>
                </div>

                <div className="medium:hidden gap-2 items-center flex flex-col w-max">
                  <Text textstyles="block mb-2 text-sm font-medium text-gray-900">
                    Choose quantity:
                  </Text>
                  <NumberInput />
                </div>
              </div>

              <div className="medium:gap-4 gap-0 medium:items-end items-start justify-end flex medium:flex-row-reverse flex-col-reverse mt-6 w-full">
                <div className="medium:gap-4 medium:items-center medium:flex">
                  <Button
                    buttontype="primary-button"
                    buttonstyles="medium:mt-0 medium:w-max w-[100vw] font-medium px-5 py-2.5 rounded-lg justify-center flex mt-4"
                  >
                    <AddCartIcon className="w-5 h-5 -ms-2 me-2" />
                    Add to cart
                  </Button>
                </div>
                <div className="medium:flex gap-1 flex-col items-start hidden">
                  <Text textstyles="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Choose quantity:
                  </Text>
                  <NumberInput />
                </div>
              </div>

              <hr className="medium:mt-8 border border-gray-200 my-6 w-full" />
              <Text
                texttype="text-normal"
                textstyles="mb-6 text-gray-500 w-full block"
              >
                {productToView.description}
              </Text>
              <div className="medium:grid-cols-2">
                <p className="text-gray-900  font-medium text-base">Pickup</p>

                <div className="gap-4 flex flex-col mt-2 medium:flex-row ">
                  <div className="flex">
                    <div className="items-center h-5 flex">
                      <InputBox
                        inputstyles="text-primary-600 focus:ring-primary-500 text-blue-900 bg-white border-gray-100 rounded-full w-4 h-4 cursor-pointer"
                        type="radio"
                        name="shipping"
                        id="shipping-checkbox"
                      />
                    </div>
                    <div className="text-sm ms-2 flex flex-col">
                      <label htmlFor="shipping-checkbox">
                        <Text
                          textstyles="text-gray-900 font-medium"
                          texttype="text-normal"
                        >
                          Standard Shipping - $19
                        </Text>
                      </label>
                      <Text
                        textstyles="text-gray-500 font-normal"
                        texttype="text-normal"
                      >
                        Arrives Nov 17
                      </Text>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="items-center h-5 flex">
                      <InputBox
                        inputstyles="text-primary-600 focus:ring-primary-500 text-blue-900 bg-white border-gray-100 rounded-full w-4 h-4 cursor-pointer"
                        type="radio"
                        name="shipping"
                        id="shipping-checkbox"
                      />
                    </div>
                    <div className="text-sm ms-2 flex flex-col">
                      <label htmlFor="shipping-checkbox">
                        <Text
                          textstyles="text-gray-900 font-medium"
                          texttype="text-normal"
                        >
                          Express Shipping - $30
                        </Text>
                      </label>
                      <Text
                        textstyles="text-gray-500 font-normal"
                        texttype="text-normal"
                      >
                        Arrives Nov 17
                      </Text>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="items-center h-5 flex">
                      <InputBox
                        inputstyles="text-primary-600 focus:ring-primary-500 text-blue-900 bg-white border-gray-100 rounded-full w-4 h-4 cursor-pointer"
                        type="radio"
                        name="shipping"
                        id="shipping-checkbox"
                      />
                    </div>
                    <div className="text-sm ms-2 flex flex-col">
                      <label htmlFor="shipping-checkbox">
                        <Text
                          textstyles="text-gray-900 font-medium"
                          texttype="text-normal"
                        >
                          Pick up from store
                        </Text>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default Product;
