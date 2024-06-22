import React from "react";
import { Route, Routes } from "react-router-dom";
import CatergoryPreview from "../category/categoryComponent";

function Shop() {
  return (
    <Routes>
      <Route index element={<CatergoryPreview />} />
      {/* <Route path=":category" element={<Category />} /> */}
    </Routes>
  );
}

export default Shop;
