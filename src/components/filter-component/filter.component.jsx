import React, { useState } from "react";
import Text from "../text-component/text.component";
import Button from "../button-component/button.component";

const Filter = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (value) => {
    setSelectedButtons((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const buttonData = [100, 200, 300, 400, 500];

  return (
    <div className="w-[12rem] flex flex-col gap-10">
      <div className="w-full">
        <Text
          texttype="text-normal"
          textstyles="uppercase text-gray-800 border-b-2 border-blue-700 font-semibold pb-2.5 w-full block"
        >
          Categories
        </Text>
        <div className="flex flex-col gap-3 pt-6">
          <div className="flex items-center">
            <input
              id="new"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-700 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="new"
              className="ms-5 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              New
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="samsung"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-700 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="samsung"
              className="ms-5 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Samsung
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="iphone"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-700 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="iphone"
              className="ms-5 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              iPhone
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="huawei"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-700 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="huawei"
              className="ms-5 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Huawei
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="techno"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-700 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="techno"
              className="ms-5 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Techno
            </label>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Text
          texttype="text-normal"
          textstyles="uppercase text-gray-800 border-b-2 border-blue-700 font-semibold pb-2.5 w-full block"
        >
          Price
        </Text>
        <div className="flex flex-row gap-3 pt-6 flex-wrap">
          {buttonData.map((value) => {
            const isSelected = selectedButtons.includes(value);
            const buttonType = isSelected ? "tag-button-active" : "tag-button";

            return (
              <Button
                key={value}
                buttontype={buttonType}
                buttonstyles="text-gray-600  px-2 py-1.5 rounded-md"
                buttonFunc={() => handleButtonClick(value)}
              >
                {value}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
