import React from "react";
import classes from "./grid.styles.module.scss";
const Grid = ({ gridtype, gridstyle, children }) => {
  return (
    <div className={`grid ${gridstyle} ${classes[`${gridtype}`]}`}>
      {children}
    </div>
  );
};

export default Grid;
