import React from "react";
import AuthContainer from "../auth-container-component/auth-container.component";
import Button from "../button-component/button.component";
import FormInput from "../form-input-component/form-input.component";
import Text from "../text-component/text.component";
import TextSlideshowContainer from "../text-slideshow-container/text-slideshow-container.component";
import google_logo from "../../assets/images/google_logo.png";
import { setCurrentUser } from "../../reduxtoolkit/features/user/userSlice";
import { Dispatch } from "react-redux";
import {
  signInWithGooglePopUp,
  signInUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utilis/firebase.utils";
import { useState } from "react";
import { Link } from "react-router-dom";
const LoginSection = () => {
  const loginInWithGoogle = async () => {
    await signInWithGooglePopUp();
  };

  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields({ ...formFields, email: "", password: "" });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log(error.code);
    }
  };
  return (
    <AuthContainer>
      {" "}
      <form
        className="flex flex-col xmedium:w-[40%] small:w-[28rem] xxsmall:w-11/12 w-full xmedium:pb-0 py-8 h-full pt-24"
        onSubmit={submitFormHandler}
      >
        <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
          Log In
        </Text>
        <Text
          texttype="text-normal"
          textstyles="text-[#3a3a3a]/70 pt-1 pb-8 text-center xmedium:text-left"
        >
          Please fill in the required fields
        </Text>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
          required
          placeholder="Enter email address"
          labelstyle="capitalize font-medium"
          inputstyle="w-full xsmall:px-6 xsmall:py-3 px-5 py-2.5 xsmall:mt-3 mt-2 xsmall:mb-5 mb-5"
        />
        <FormInput
          type="password"
          name="password"
          placeholder="....."
          value={password}
          onChange={onChangeHandler}
          required
          labelstyle="capitalize font-medium"
          inputstyle="w-full xsmall:px-6 xsmall:py-3 px-5 py-2.5 xsmall:mt-3 mt-2 xsmall:mb-5 mb-5"
        />
        <Button
          buttonstyles="xsmall:py-3.5 py-2.5 capitalize pt-4 focus:ring-[4px] focus:ring-blue-300"
          buttontype="primary-button"
          type="submit"
        >
          Continue
        </Button>
        <Text textstyles="uppercase py-4 text-center" texttype="text-normal">
          Or
        </Text>
        <Button
          buttonstyles="xsmall:py-3.5 py-2.5  flex flex-row items-center gap-5 capitalize"
          buttontype="image-button"
          buttonFunc={loginInWithGoogle}
          type="button"
        >
          <img src={google_logo} alt="google_logo" className="w-5 h-5 small:w-4 small:h-4" />
          Continue with Google
        </Button>
        <Text texttype="text-normal" textstyles=" w-full text-center py-5">
          Don't have an account?{" "}
          <Link to="/wimatechstore/signup">
            <Text textstyles="text-[#0000a3] font-medium hover:underline cursor-pointer">
             Sign Up
            </Text>
          </Link>
        </Text>
      </form>
      <TextSlideshowContainer />
    </AuthContainer>
  );
};

export default LoginSection;
