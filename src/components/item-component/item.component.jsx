import React from "react";
import CustomList from "../list-component/list.component";
import Text from "../text-component/text.component";
import dummy from "../../assets/images/product-image.png";
const ItemComponent = ({ type, ...rest }) => {
  return (
    <div>
      {type == "product" && (
        <div className="w-max">
          <img
            src={dummy}
            alt="product image"
            className="w-40 h-48 object-cover "
          />
          <CustomList liststyle="flex-col justify-center items-center pt-4 gap-1">
            <Text
              texttype="text-normal"
              textstyles="w-40 overflow-hidden text-ellipsis whitespace-nowrap"
            >
              {rest.data.name}
            </Text>
            <Text texttype="text-normal" textstyles="text-gray-500">
              {rest.data.make}
            </Text>
            <Text texttype="text-normal" textstyles="font-medium text-blue-800">
              {rest.data.price}
            </Text>
          </CustomList>
        </div>
      )}
      {type == "category" && (
        <div className=" flex items-center  flex-col">
          <div className="w-32 h-32 bg-[#f4f4f4] text-gray-300 flex items-center justify-center rounded-full">
            <img src={rest.image} alt="category item" className="w-14 h-auto" />
          </div>
          <Text texttype="heading-xxs" textstyles="capitalize pt-3">
            {rest.item}
          </Text>
        </div>
      )}
      {type == "feature" && (
        <div className="flex xlarge:flex-row gap-4 py-4 items-center flex-col xlarge:justify-start justify-center">
          <div className="text-blue-500">
            <img
              src={rest.data.image}
              alt="feature image"
              className=" h-auto w-20 fill-[#3a3a3a]/30"
            />
          </div>
          <CustomList liststyle="flex-col gap-1">
            <Text
              texttype="heading-xs"
              textstyles="font-bold text-center xlarge:text-left"
            >
              {rest.data.title}
            </Text>
            <Text
              texttype="text-normal"
              textstyles="text-center xlarge:text-left w-11/12"
            >
              {rest.data.description}
            </Text>
          </CustomList>
        </div>
      )}
    </div>
  );
};

export default ItemComponent;
