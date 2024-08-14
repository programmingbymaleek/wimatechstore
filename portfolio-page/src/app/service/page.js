"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const Service = () => {
  const searchParams = useSearchParams();
  let id = searchParams.get("id");

  console.log(id);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <p>Invalid Service Type</p>
    </div>
  );
};

export default Service;
