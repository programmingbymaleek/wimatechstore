import { Link } from "react-router-dom";
import ProductCard from "../productCard/productCard";
import Text from "../text-component/text.component";
import classes from "./categoryPreview.style.module.scss";
import { addItemsTocart } from "../../reduxtoolkit/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import Button from "../button-component/button.component";

function CatergoryPreview({ dataOne }) {
  const objectKeys = Object.keys(dataOne);
  const dispatch = useDispatch();

  const addCartItem = (productToView) => {
    dispatch(addItemsTocart(productToView));
    // Navigate("/checkout-items");
  };

  return (
    <div className="flex flex-col w-full  h-full pb-16 mx-auto max-w-[1280px]">
      {/* <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
        Shop
      </Text> */}
      {/* <input
        type="text"
        placeholder="Search for Product"
        value={searchQuery}
        onChange={handleSearch}
        className="my-4 p-2 border border-gray-300 rounded"
      /> */}
      <div className="flex flex-row gap-16 ">
        {/* <Filter /> */}
        <div className="grid gap-12 flex-1">
          {objectKeys.length > 0 ? (
            objectKeys.map((title) => (
              <div key={title}>
                <h1 className="flex flex-row w-full justify-between">
                  <Text
                    texttype="text-normal"
                    textstyles="uppercase text-gray-800 font-semibold pb-2.5 block"
                  >
                    {title.toUpperCase()}
                  </Text>
                </h1>
                <div className={classes["product-container"]}>
                  {dataOne[title].map((product) => (
                    <div key={product.id}>
                      <ProductCard
                        key={product.id}
                        product={product}
                        title={title}
                        productstyle="w-[15vw]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <Text texttype="text-normal" textstyles="text-center text-red-500">
              No items found
            </Text>
          )}
        </div>
      </div>
    </div>
  );
}

export default CatergoryPreview;
