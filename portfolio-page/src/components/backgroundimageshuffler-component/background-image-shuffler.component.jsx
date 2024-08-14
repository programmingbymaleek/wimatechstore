"use client";

import React, { useEffect, useState } from "react";
import { NavBarComponent } from "../navbar-component/navbar.component";
import { HeroSectionComponent } from "../herosection-component/herosection.component";

const BackgroundImageShuffler = ({ children }) => {
  const images = [
    "/assets/images/bgImage.jpg",
    "/assets/images/bgImage.png",
    "/assets/images/inspection.webp",
    "/assets/images/maintenance.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div
      className={`transition-w duration-1000 ease-in-out w-full`}
      style={{
        backgroundImage: `url(${currentImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gray-900/60">{children}</div>
    </div>
  );
};

export default BackgroundImageShuffler;
