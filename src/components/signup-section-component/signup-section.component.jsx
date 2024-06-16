import React from "react";
import AuthContainer from "../auth-container-component/auth-container.component";
import BlurContainer from "../blur-conatiner-component/blur-container.component";
import Button from "../button-component/button.component";
import FormComponent from "../form-component/form.component";
import FormInput from "../form-input-component/form-input.component";
import CustomList from "../list-component/list.component";
import Text from "../text-component/text.component";
import TextSlideshowContainer from "../text-slideshow-container/text-slideshow-container.component";
import { signInWithGooglePopUp } from "../../utilis/firebase.utils";
import google_logo from "../../assets/images/google_logo.png";
import OrDivider from "../or-divider-component/or-divider.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utilis/firebase.utils";
import { useState } from "react";
import { async } from "@firebase/util";

const SignupSection = () => {
  const signUpWithGoogle = async () => {
    try {
      await signInWithGooglePopUp();
    } catch (error) {
      console.log(error);
    }
  };
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        const user = await createAuthUserWithEmailAndPassword(
          email,
          password,
          displayName
        );
        if (user) {
          createUserDocumentFromAuth(user);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <AuthContainer>
      {" "}
      <form formstyle="flex  flex-col w-5/12" onSubmit={submitFormHandler}>
        <Text texttype="heading-md">Sign Up</Text>
        <Text texttype="text-normal" textstyles="text-[#3a3a3a]/70 pt-1 pb-8">
          Please fill in the required fields
        </Text>
        <FormInput
          type="displayName"
          name="displayName"
          placeholder="Enter your username"
          labelstyle="capitalize font-medium"
          inputstyle="w-full px-6 p-4 mt-3 mb-8 text-base"
          value={displayName}
          required
          onChange={onChangeHandler}
        />
        <FormInput
          type="email"
          name="email"
          required
          placeholder="Enter email address"
          labelstyle="capitalize font-medium"
          inputstyle="w-full px-6 p-4 mt-3 mb-8 text-base"
          value={email}
          onChange={onChangeHandler}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          onChange={onChangeHandler}
          placeholder="....."
          labelstyle="capitalize font-medium"
          inputstyle="w-full px-6 py-4 mt-3 mb-8 text-base"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={onChangeHandler}
          placeholder="....."
          labelstyle="capitalize font-medium"
          inputstyle="w-full px-6 py-4 mt-3 mb-8 text-base"
        />
        <Button
          buttonstyles="py-4 capitalize pt-6"
          buttontype="primary-button"
          type="submit"
        >
          Continue
        </Button>
        <Text textstyles="uppercase py-4 text-center" texttype="text-normal">
          Or
        </Text>
        <Button
          buttonstyles="py-4 flex flex-row items-center gap-5 capitalize"
          buttontype="image-button"
          type="button"
          buttonFunc={signUpWithGoogle}
        >
          <img src={google_logo} alt="google_logo" className="w-7 h-7" />
          Continue with Google
        </Button>
        <Text texttype="text-normal" textstyles=" w-full text-center py-5">
          Already have an account?{" "}
          <Text textstyles="text-[#0000a3] font-semibold">Log In</Text>
        </Text>
      </form>
      <TextSlideshowContainer />
    </AuthContainer>
  );
};

export default SignupSection;
