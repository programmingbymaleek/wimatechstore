import React from "react";
import { Route, Routes } from "react-router-dom";
// import CatergoryPreview from "../categoryPreview/categoryPreviewComponent";
import Filter from "../filter-component/filter.component";
import Product from "../product/product.component";

function Shop() {
  return (
    <Routes>
      <Route index element={<Filter />} />
      <Route path=":category/:name/:id" element={<Product />} />
    </Routes>
  );
}

export default Shop;
