"use client";
import React from "react";
import EcommerceService from "./services/ecommerceservice.component";
import WebDesignService from "./services/webdesignservice.component";
import { useSearchParams } from "next/navigation";

const Service = () => {
  const searchParams = useSearchParams();
  let id = searchParams.get("id");

  console.log(id);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      {(() => {
        switch (id) {
          case "1":
            return <EcommerceService />;
          case "6":
            return <WebDesignService />;
          default:
            return <p>Invalid service type</p>;
        }
      })()}
    </div>
  );
};

export default Service;
