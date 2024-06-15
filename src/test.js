import React, { useState } from "react";
// import './App.css'; // Import your Tailwind CSS

const HorizontalNav = () => {
  const [selected, setSelected] = useState(0);

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <div className="flex space-x-4 border-b border-gray-300">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer py-2 ${
            selected === index ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setSelected(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default HorizontalNav;
