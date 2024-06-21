import React from "react";
import Button from "../button-component/button.component";
import InputBox from "../inputbox-component/inputbox.component";
import CustomList from "../list-component/list.component";
import Text from "../text-component/text.component";
import classes from "./contactus-section.style.module.scss";
const ContactUsSection = () => {
  return (
    <div className={`${classes[`contact-us-section`]} px-6 large:px-16 tablet:pb-0 pb-8`}>
      <CustomList liststyle="flex flex-col gap-3">
        <Text
          texttype="heading-base"
          textstyles="leading-6 uppercase w-full text-left pt-2 block"
        >
          Do you have any questions?
        </Text>
        <Text
          texttype="text-normal"
          textstyles="medium:w-6/12 tablet:w-8/12 w-full text-gray-700"
        >
          We're here to help! Reach out to us with any questions, feedback, or
          inquiries—we're eager to assist you.
        </Text>
        <CustomList liststyle="flex tablet:flex-row flex-col gap-3 h-12 mt-4">
          <InputBox
            type="email"
            placeholder="Enter your email"
            name="email"
            inputstyles="medium:w-8/12 tablet:w-9/12 w-full tablet:h-full h-12 px-4 tablet:py-auto py-2.5"
          />
          <Button
            buttontype="primary-button"
            buttonstyles="px-6 tablet:h-full tablet:w-max w-full h-12 tablet:py-auto py-3"
          >
            Get Started
          </Button>
        </CustomList>
      </CustomList>
    </div>
  );
};

export default ContactUsSection;
