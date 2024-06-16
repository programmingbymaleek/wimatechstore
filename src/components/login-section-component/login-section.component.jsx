import React from "react";
import AuthContainer from "../auth-container-component/auth-container.component";
import BlurContainer from "../blur-conatiner-component/blur-container.component";
import Button from "../button-component/button.component";
import FormComponent from "../form-component/form.component";
import FormInput from "../form-input-component/form-input.component";
import CustomList from "../list-component/list.component";
import Text from "../text-component/text.component";
import TextSlideshowContainer from "../text-slideshow-container/text-slideshow-container.component";
import google_logo from "../../assets/images/google_logo.png";
import OrDivider from "../or-divider-component/or-divider.component";
import { setCurrentUser } from "../../reduxtoolkit/features/user/userSlice";
import { Dispatch } from "react-redux";
import {
  signInWithGooglePopUp,
  signInUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utilis/firebase.utils";
import { useState } from "react";
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
    console.log(event.target.value);
    setFormFields({ ...formFields, [name]: value });
  };

  console.log(formFields);

  const submitFormHandler = async (event) => {
    event.preventDefault();
    try {
      const userData = await signInUserWithEmailAndPassword(email, password);
      console.log(userData);
      resetFormFields();
    } catch (error) {
      console.log(error.code);
    }
  };
  return (
    <AuthContainer>
      {" "}
      <form formstyle="flex  flex-col w-5/12" onSubmit={submitFormHandler}>
        <Text texttype="heading-md">Log In</Text>
        <Text texttype="text-normal" textstyles="text-[#3a3a3a]/70 pt-1 pb-8">
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
          inputstyle="w-full px-6 p-4 mt-3 mb-8 text-base"
        />
        <FormInput
          type="password"
          name="password"
          placeholder="....."
          value={password}
          onChange={onChangeHandler}
          required
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
          buttonFunc={loginInWithGoogle}
          type="button"
        >
          <img src={google_logo} alt="google_logo" className="w-7 h-7" />
          Continue with Google
        </Button>
        <Text texttype="text-normal" textstyles=" w-full text-center py-5">
          Don't have an account?{" "}
          <Text textstyles="text-[#0000a3] font-semibold">Sign Up</Text>
        </Text>
      </form>
      <TextSlideshowContainer />
    </AuthContainer>
  );
};

export default LoginSection;
