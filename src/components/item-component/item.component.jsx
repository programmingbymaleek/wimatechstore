import React from "react";
import CustomList from "../list-component/list.component";
import Text from "../text-component/text.component";
import dummy from "../../assets/images/product-image.png";
const ItemComponent = ({ type, ...rest }) => {
  return (
    <>
      {type == "product" && (
        <div className="w-max">
          <img
            src={dummy}
            alt="product image"
            className="medium:w-40 medium:h-48 object-cover w-32 h-40"
          />
          <CustomList liststyle="flex flex-col justify-center items-center pt-4 gap-1">
            <Text
              texttype="text-normal"
              textstyles="medium:w-40 w-32 overflow-hidden text-ellipsis whitespace-nowrap"
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
          <div className="w-24 h-24 medium:w-32 medium:h-32 bg-[#f4f4f4] text-gray-300 flex items-center justify-center rounded-full">
            <img
              src={rest.image}
              alt="category item"
              className="w-10 h-auto medium:w-14"
            />
          </div>
          <Text texttype="heading-xxs" textstyles="capitalize pt-3">
            {rest.item}
          </Text>
        </div>
      )}
      {type == "feature" && (
        <div className="flex xlarge:flex-row gap-4 py-4 items-center flex-col xlarge:justify-start justify-center w-full">
          <div className="text-blue-500">
            <img
              src={rest.data.image}
              alt="feature image"
              className=" h-auto medium:w-20 w-[3.5rem] fill-[#3a3a3a]/30"
            />
          </div>
          <CustomList liststyle="flex flex-col gap-1 tablet:items-start items-center">
            <Text
              texttype="heading-xs"
              textstyles="font-bold text-center xlarge:text-left"
            >
              {rest.data.title}
            </Text>
            <Text
              texttype="text-normal"
              textstyles="text-center xlarge:text-left tablet:w-11/12 medium:block tablet:hidden w-11/12 "
            >
              {rest.data.description}
            </Text>
          </CustomList>
        </div>
      )}
    </>
  );
};

export default ItemComponent;
