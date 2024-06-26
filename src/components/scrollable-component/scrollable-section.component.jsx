import React, { useRef, useEffect, useState } from "react";
import classes from "./scrollable-section.styles.module.scss";

const ScrollableSection = ({ scrollstyles, children }) => {
  const contentRef = useRef(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  useEffect(() => {
    updateButtons();
    window.addEventListener("resize", updateButtons); // Update buttons on window resize
    return () => window.removeEventListener("resize", updateButtons);
  }, []);

  const scrollRight = () => {
    const elementWidth = contentRef.current.children[0].clientWidth;
    contentRef.current.scrollBy({
      left: elementWidth,
      behavior: "smooth",
    });
    setTimeout(updateButtons, 300);
  };

  const scrollLeft = () => {
    const elementWidth = contentRef.current.children[0].clientWidth;
    contentRef.current.scrollBy({
      left: -elementWidth,
      behavior: "smooth",
    });
    setTimeout(updateButtons, 300);
  };

  const updateButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = contentRef.current;
    setShowPrevButton(scrollLeft > 0);
    setShowNextButton(scrollWidth > clientWidth + scrollLeft);
  };

  return (
    <div className="relative w-full h-fit  overflow-hidden">
      <div
        ref={contentRef}
        className={`h-full flex flex-row small:overflow-hidden overflow-scroll whitespace-nowrap ${scrollstyles} ${
          classes[`hide-scrollbar`]
        }`}
      >
        {children}
      </div>
      {showPrevButton && (
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800/60 text-white p-2 rounded-full w-8 h-8 small:flex hidden items-center justify-center text-2xl border border-white/70 pb-3 "
          onClick={scrollLeft}
        >
          ‹
        </button>
      )}
      {showNextButton && (
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800/60 text-white p-2 rounded-full w-8 h-8 small:flex hidden items-center justify-center text-2xl border border-white/70 pb-3"
          onClick={scrollRight}
        >
          ›
        </button>
      )}
    </div>
  );
};

export default ScrollableSection;
