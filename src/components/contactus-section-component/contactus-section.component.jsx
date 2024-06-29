import React from "react";
import Button from "../button-component/button.component";
import InputBox from "../inputbox-component/inputbox.component";
import Text from "../text-component/text.component";

const ContactUsSection = () => {
  return (
    <div
      className=" px-6 large:px-16 tablet:pb-0 pb-8 mx-auto max-w-[1280px]"
      id="contact-us-section"
    >
      <div className="flex flex-col gap-3 list-style-none m-0 p-0">
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
        <div className="flex tablet:flex-row flex-col gap-3 h-12 mt-4 list-style-none m-0 p-0">
          {" "}
          <InputBox
            type="email"
            placeholder="Enter your email"
            name="email"
            inputstyles="medium:w-8/12 tablet:w-9/12 w-full tablet:h-full h-12 px-4 tablet:py-auto py-2.5 border border-slate-300"
          />
          <Button
            buttontype="primary-button"
            buttonstyles="px-6 tablet:h-full tablet:w-max w-full h-12 tablet:py-auto py-3"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
