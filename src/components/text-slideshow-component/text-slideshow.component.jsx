import React, { useState, useEffect } from "react";
import BlurContainer from "../blur-conatiner-component/blur-container.component";
import Text from "../text-component/text.component";

const TextSlideshow = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    {
      quote:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut augue consectetur, posuere ex ac, congue tellus. Suspendisse potenti. Aenean non rutrum enim, sed dignissim enim.”",
      name: "Nelson Mandela",
      title: "Philanthropist",
    },
    {
      quote:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut augue consectetur, posuere ex ac, congue tellus. Suspendisse potenti. Aenean non rutrum enim, sed dignissim enim.”",
      name: "Adolf Hitler ",
      title: "Dentist",
    },
    {
      quote:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut augue consectetur, posuere ex ac, congue tellus. Suspendisse potenti. Aenean non rutrum enim, sed dignissim enim.”",
      name: "Jane Doe",
      title: "Teacher",
    },
    {
      quote:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut augue consectetur, posuere ex ac, congue tellus. Suspendisse potenti. Aenean non rutrum enim, sed dignissim enim.”",
      name: "Chinue Achebe",
      title: "Author",
    },
  ];

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(textChangeInterval);
  }, [texts.length, 5000]);

  return (
    <div className="">
      <BlurContainer containerstyle="animate-fade-in flex flex-col gap-8 justify-between p-4 min-h-48 h-max">
        <Text texttype="text-normal" textstyles="text-[#ffffff] leading-6">
          {texts[currentTextIndex].quote}
        </Text>
        <Text textstyles="flex flex-col gap-1">
          <Text texttype="heading-sm" textstyles="leading-6">
            {texts[currentTextIndex].name}
          </Text>
          <Text texttype="text-normal">{texts[currentTextIndex].title}</Text>
        </Text>
      </BlurContainer>
    </div>
  );
};

export default TextSlideshow;
