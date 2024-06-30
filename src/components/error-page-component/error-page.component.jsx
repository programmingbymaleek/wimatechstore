import React from "react";
import Text from "../text-component/text.component";
import Button from "../button-component/button.component";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 pt-32">
      <div className="text-center flex flex-col">
        <Text texttype="text-md" textstyles=" font-semibold text-blue-800">
          404 Error
        </Text>
        <Text
          texttype="heading-xmd"
          textstyles="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          Page not found
        </Text>
        <Text
          texttype="text-normal"
          textstyles="mt-6 text-base leading-7 text-gray-600"
        >
          The page you are looking for does not exist
        </Text>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/wimatechstore">
            <Button
              buttontype="primary-button"
              buttonstyles=" px-5 py-3 shadow-sm focus:ring-[4px] focus:ring-blue-300"
            >
              Go back home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
