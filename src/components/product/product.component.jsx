import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Text from "../text-component/text.component";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import NumberInput from "../number-input-component/number-input.component";
import Button from "../button-component/button.component";
import Stars from "../stars-component/stars.component";
import ScrollableSection from "../scrollable-component/scrollable-section.component";
import ItemComponent from "../item-component/item.component";
import ShopProduct from "../../shop_data_file";

const Product = () => {
  const { category, id } = useParams();
  const products = useSelector((state) => state.products.products);
  const [productToView, setProductToView] = useState(null);

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
    return <div>Product not found</div>; // Handle the case where the product is not found
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
            <div className="large:max-w-lg max-w-md mx-auto">
              <div id="product-1-tab-content">
                <div
                  className="p-4 bg-white rounded-lg "
                  id="product-1-image-1"
                  role="tabpanel"
                  aria-labelledby="product-1-image-1-tab"
                >
                  <img
                    className="w-full mx-auto"
                    src="https://i.ibb.co/Vp08JRx/Itel-P55-T.webp"
                    alt=""
                  />
                </div>
              </div>
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
                    {productToView.price}
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
                    <svg
                      className="w-5 h-5 -ms-2 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round" // Corrected property
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                      />
                    </svg>
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
            </div>
          </div>
        </div>

        <div className="pb-5 pt-20 py-12 flex flex-col gap-5">
          <Text
            texttype="heading-smd"
            textstyles="leading-6 w-full text-center pb-8"
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
            textstyles="leading-6 w-full text-center pb-8"
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

export default Product;
