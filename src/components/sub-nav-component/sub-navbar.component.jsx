import React, { useState } from "react";
import NavItem from "../nav-item-component/navitem.component";

const SubNavbar = ({ navdata, children }) => {
  const [selected, setSelected] = useState(0);

  const selectElement = (index) => {
    setSelected(index);
  };

  return (
    <ul className="flex space-x-6 list-style-none w-full items-center justify-center my-10">
      {navdata.map((item, index) => (
        <NavItem
          key={index}
          itemstyles={`cursor-pointer py-2 ${
            selected === index ? "border-b-2 border-blue-500" : ""
          }`}
          selectElement={selectElement}
          item={item}
        />
      ))}
    </ul>
  );
};

export default SubNavbar;
