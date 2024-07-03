import React, { useState, useEffect } from "react";
import Text from "../text-component/text.component";
import Button from "../button-component/button.component";
import { useSelector } from "react-redux";
import CatergoryPreview from "../categoryPreview/categoryPreviewComponent";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrow_down.svg";
import { Link } from "react-router-dom";
import NavItem from "../nav-item-component/navitem.component";
import InputBox from "../inputbox-component/inputbox.component";

const Filter = () => {
  const products = useSelector((state) => state.products.products);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [filteredData, setFilteredData] = useState(products);
  const [showFilter, setShowFilter] = useState(false);

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
    <div className="flex flex-col w-full h-full pt-32 gap-8 large:px-16 px-8 pb-0 xsmall:pb-16 mx-auto max-w-[1280px] house">
      <div className="flex flex-row w-full justify-between items-center">
        <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
          Shop
        </Text>
        <Button
          buttontype="icon-button"
          buttonstyles="large:hidden flex w-fit items-center justify-center rounded-lg border bg-white px-3.5 py-2 text-xs xsmall:text-sm font-normal text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
          buttonFunc={() => setShowFilter(!showFilter)}
        >
          <FilterIcon className="w-3 h-3 mr-3" />
          Filters
          <ArrowDownIcon className="w-3 h-3 ml-3" />
        </Button>
        {showFilter && (
          <div className="w-[100vw] bg-black/50 z-20 fixed top-0 left-0 bottom-0 right-0 min-h-screen h-full  flex justify-start">
            <div className="flex flex-col gap-2 items-start xsmall:w-[20rem] w-10/12  bg-white h-full  xsmall:px-8 px-4 xsmall:py-8 py-6 overflow-scroll">
              <div className="w-full flex justify-end">
                <CloseIcon
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setShowFilter(!showFilter)}
                />
              </div>
              <div className="w-full">
                <div className="flex flex-row justify-between border-b-2 border-blue-700 ">
                  <Text
                    texttype="text-normal"
                    textstyles="uppercase text-gray-800 font-semibold pb-2.5 w-full block"
                  >
                    Categories
                  </Text>
                </div>
                <div className="grid xxsmall:grid-cols-2 grid-cols-1 gap-3 pt-6">
                  {categoryData.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={category}
                        name={category}
                        checked={checkedItems[category] || false}
                        onChange={handleChange}
                        className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 rounded "
                      />
                      <label
                        htmlFor={category}
                        className="ml-5 text-sm text-gray-900 capitalize"
                      >
                        <Text texttype="text-normal">{category}</Text>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full pt-5">
                <div className="flex flex-row justify-between border-b-2 border-blue-700 ">
                  <Text
                    texttype="text-normal"
                    textstyles="uppercase text-gray-800 font-semibold pb-2.5 w-full block"
                  >
                    Price
                  </Text>
                  {selectedPriceRange != null && (
                    <Button
                      buttontype="icon-button"
                      buttonstyles="flex flex-row cursor-pointer"
                      buttonFunc={clearPriceRange}
                    >
                      <CloseIcon className="w-4 h-4 text-red-800" />
                      <Text
                        texttype="text-sm"
                        textstyles=" text-red-800 hover:underline "
                      >
                        Clear
                      </Text>
                    </Button>
                  )}
                </div>

                <div className="grid xxsmall:grid-cols-2 grid-cols-1 gap-3 pt-6">
                  {buttonData.map((range) => (
                    <Button
                      key={range}
                      buttontype="icon-buttom"
                      buttonstyles={` px-2 py-1.5 rounded-md  w-max border text-gray-600  font-medium ${
                        selectedPriceRange === range
                          ? "bg-blue-600 text-white border border-transparent"
                          : " border-gray-300 bg-white "
                      }`}
                      buttonFunc={() => handlePriceRangeClick(range)}
                    >
                      <Text texttype="text-sm" textstyles="text-inherit">
                        {range}
                      </Text>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-row gap-8 pt-2 h-full">
        <div className="large:w-[13rem] hidden large:flex flex-col gap-10  h-[80vh] overflow-scroll">
          <div className="w-full">
            <div className="flex flex-row justify-between border-b-2 border-blue-700 ">
              <Text
                texttype="text-normal"
                textstyles="uppercase text-gray-800 font-semibold pb-2.5 w-full block"
              >
                Categories
              </Text>
            </div>
            <div className="flex flex-col gap-3 pt-6">
              {categoryData.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={category}
                    name={category}
                    checked={checkedItems[category] || false}
                    onChange={handleChange}
                    className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 rounded "
                  />
                  <label
                    htmlFor={category}
                    className="ml-5 text-sm text-gray-900 capitalize"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-row justify-between border-b-2 border-blue-700 ">
              <Text
                texttype="text-normal"
                textstyles="uppercase text-gray-800 font-semibold pb-2.5 w-full block"
              >
                Price
              </Text>
              {selectedPriceRange != null && (
                <Button
                  buttontype="icon-button"
                  buttonstyles="flex flex-row cursor-pointer"
                  buttonFunc={clearPriceRange}
                >
                  <CloseIcon className="w-4 h-4 text-red-800" />
                  <Text
                    texttype="text-sm"
                    textstyles=" text-red-800 hover:underline "
                  >
                    Clear
                  </Text>
                </Button>
              )}
            </div>

            <div className="flex flex-col gap-3 pt-6">
              {buttonData.map((range) => (
                <Button
                  key={range}
                  buttontype="icon-buttom"
                  buttonstyles={`text-gray-600 px-1 py-1.5 rounded-md  w-max border text-sm font-medium ${
                    selectedPriceRange === range
                      ? "bg-blue-600 text-white border border-transparent"
                      : " border-gray-300 bg-white "
                  }`}
                  buttonFunc={() => handlePriceRangeClick(range)}
                >
                  {range}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-grow flex-1 h-[80vh] overflow-scroll">
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
