import React, { useState } from "react";
import NavItem from "../nav-item-component/navitem.component";
import Text from "../text-component/text.component";

const SubNavbar = ({ navdata, children }) => {
  const [selected, setSelected] = useState(0);

  const selectElement = (index) => {
    setSelected(index);
  };

  return (
    <ul className="hidden space-x-6 list-style-none w-full items-center justify-center my-8 overflow-scroll small:flex">
      {navdata.map((item, index) => (
        <div
          className={`cursor-pointer border-b-[3px] px-1  py-2 ${selected === index ? " border-blue-800" : "border-transparent"}`}
          onClick={() => selectElement(index)}
        >
          <Text key={index} texttype="text-normal">
            {item}
          </Text>
        </div>
      ))}
    </ul>
  );
};

export default SubNavbar;
