import React from "react";
import { Route, Routes } from "react-router-dom";
import CatergoryPreview from "../categoryPreview/categoryPreviewComponent";
import CategoryPage from "../category-page-component/categorypage.component";

function Shop() {
  return (
    <Routes>
      <Route index element={<CatergoryPreview />} />
      <Route path=":category" element={<CategoryPage />} />
    </Routes>
  );
}

export default Shop;
