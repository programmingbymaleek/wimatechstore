import React from "react";
import CustomList from "../list-component/list.component";
import Text from "../text-component/text.component";
import dummy from "../../assets/images/product-image.png";
const ProductItem = () => {
  return (
    <div>
      <img src={dummy} alt="product image" className="w-40 h-48 object-cover" />

      <CustomList liststyle="flex-col justify-center items-center pt-4 gap-1">
        <Text texttype="text-normal">Product Name</Text>
        <Text texttype="text-normal">Product Type</Text>
        <Text texttype="text-normal" textstyles="font-bold">
          Product Price
        </Text>
      </CustomList>
    </div>
  );
};

export default ProductItem;
