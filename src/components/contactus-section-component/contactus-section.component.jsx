import React from "react";
import Button from "../button-component/button.component";
import InputBox from "../inputbox-component/inputbox.component";
import CustomList from "../list-component/list.component";
import Text from "../text-component/text.component";
import classes from "./contactus-section.style.module.scss";
const ContactUsSection = () => {
  return (
    <div className={`${classes[`contact-us-section`]}`}>
      <CustomList liststyle="flex-col gap-3">
        <Text
          texttype="heading-base"
          textstyles="leading-6 uppercase w-full text-left pt-10 block"
        >
          Do you have any questions?
        </Text>
        <Text texttype="text-normal" textstyles="w-6/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum mi sed luctus blandit.
        </Text>
        <CustomList liststyle="flex-row gap-4 h-14">
          <InputBox
            type="email"
            placeholder="Enter your email"
            name="email"
            inputstyles="w-8/12 h-full px-6 py-auto "
          />
          <Button
            buttontype="primary-button"
            buttonstyles="px-8 py-auto h-full"
          >
            Get Started
          </Button>
        </CustomList>
      </CustomList>
    </div>
  );
};

export default ContactUsSection;
