import React, { useState, useEffect } from "react";
import Text from "../text-component/text.component";
import Button from "../button-component/button.component";
import { useSelector } from "react-redux";
import CatergoryPreview from "../categoryPreview/categoryPreviewComponent";

const Filter = () => {
  const products = useSelector((state) => state.products.products);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [filteredData, setFilteredData] = useState(products);

  const categoryData = Object.keys(products);
  const objCategory = categoryData.reduce((acc, category) => {
    acc[category] = false;
    return acc;
  }, {});

  const [checkedItems, setCheckedItems] = useState(objCategory);

  useEffect(() => {
    setCheckedItems(() => objCategory);
  }, [products]);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
    // Log the status of the checkbox to the console
    console.log(`${name} is ${checked ? "checked" : "unchecked"}`);
  };

  const handlePriceRangeClick = (range) => {
    setSelectedPriceRange(range);
  };

  const clearPriceRange = () => {
    setSelectedPriceRange(null);
  };

  const filterData = () => {
    // Filter through checked item list and return new objects with true as the object values.
    const selectedCategories = Object.keys(checkedItems).filter(
      (category) => checkedItems[category]
    );

    // Filtered data based on selected categories
    let newData;

    if (selectedCategories.length === 0) {
      // If no category is selected, use all products
      newData = { ...products };
    } else {
      // If some categories are selected, filter by these categories
      newData = selectedCategories.reduce((acc, category) => {
        acc[category] = products[category];
        return acc;
      }, {});
    }

    // Further filter the data by selected price range if it's defined
    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);
      newData = Object.keys(newData).reduce((acc, category) => {
        const filteredItems = newData[category].filter(
          (item) => item.price >= minPrice && item.price <= maxPrice
        );
        if (filteredItems.length > 0) {
          acc[category] = filteredItems;
        }
        return acc;
      }, {});
    }

    setFilteredData(newData);
  };

  useEffect(() => {
    filterData();
  }, [checkedItems, selectedPriceRange]);

  console.log(filteredData);

  const buttonData = [
    "100-199.99",
    "200-299.99",
    "300-399.99",
    "400-499.99",
    "500-599.99",
    "600-699.99",
    "700-799.99",
    "800-899.99",
    "900-999.99",
    "1000-1099.99",
    "1100-1199.99",
    "1200-1299.99",
    "1300-1399.99",
    "1400-1499.99",
    "1500-1599.99",
    "1600-1699.99",
    "1700-1799.99",
    "1800-1899.99",
    "1900-1999.99",
  ];

  // Check if filteredData is empty
  const isEmpty = Object.keys(filteredData).length === 0;

  return (
    <div className="flex flex-col w-full py-6 h-full pt-32 gap-8 px-16 pb-16 mx-auto max-w-[1280px] house">
      <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
        Electronics
      </Text>
      <div className="flex flex-row gap-14 pt-2 h-full">
        <div className="w-[14rem] flex flex-col gap-10">
          <div className="w-full">
            <Text
              texttype="text-normal"
              textstyles="uppercase text-gray-800 border-b-2 border-blue-700 font-semibold pb-2.5 w-full block"
            >
              Categories
            </Text>
            <div className="flex flex-col gap-3 pt-6">
              {categoryData.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={category}
                    name={category}
                    checked={checkedItems[category] || false}
                    onChange={handleChange}
                    className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={category}
                    className="ml-5 text-sm font-medium text-gray-600 dark:text-gray-300"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <Text
              texttype="text-normal"
              textstyles="uppercase text-gray-800 border-b-2 border-blue-700 font-semibold pb-2.5 w-full block"
            >
              Price
            </Text>
            <div className="flex flex-row flex-wrap gap-3 pt-6">
              {buttonData.map((range) => (
                <Button
                  key={range}
                  buttontype="icon-buttom"
                  buttonstyles={`text-gray-600 px-2 py-1.5 rounded-md ${
                    selectedPriceRange === range
                      ? "bg-gray-600 text-white"
                      : "border border-gray-300 w-max px-1 text-sm"
                  }`}
                  buttonFunc={() => handlePriceRangeClick(range)}
                >
                  {range}
                </Button>
              ))}
              <Button
                buttonstyles="text-gray-600 px-2 py-1.5 rounded-md text-blue-600 hover:underline text-sm"
                buttonFunc={clearPriceRange}
              >
                Clear Price Range
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-grow flex-1">
          {isEmpty ? (
            <div>No items or categories available for this price range.</div>
          ) : (
            <CatergoryPreview dataOne={filteredData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
