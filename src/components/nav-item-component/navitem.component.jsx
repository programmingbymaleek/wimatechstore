import React from "react";

const NavItem = ({ item, itemstyles, selectElement }) => {
  return (
    <div className={`${itemstyles}`} onClick={selectElement}>
      {item}
    </div>
  );
};

export default NavItem;
