import React from "react";

const NavItem = ({ item, itemstyles, selectElement }) => {
  return (
    <li className={`${itemstyles}`} onClick={selectElement}>
      {item}
    </li>
  );
};

export default NavItem;
