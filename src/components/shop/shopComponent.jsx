import React from "react";
import { Route, Routes } from "react-router-dom";
// import CatergoryPreview from "../categoryPreview/categoryPreviewComponent";
import Filter from "../filter-component/filter.component";

function Shop() {
  return (
    <Routes>
      <Route index element={<Filter />} />
      {/* <Route path=":category" element={<CategoryPage />} /> */}
    </Routes>
  );
}

export default Shop;
