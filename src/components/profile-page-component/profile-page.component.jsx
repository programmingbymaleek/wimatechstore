import React, { useState } from "react";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import Text from "../text-component/text.component";
import FormInput from "../form-input-component/form-input.component";
import Button from "../button-component/button.component";

const Profile = ({ addAlert }) => {
  const [updateData, setUpdateData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
    phone: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleUpdateChange = (event) => {
    const { name, value } = event.target;
    setUpdateData({
      ...updateData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setUpdateData({
          ...updateData,
          image: file,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col w-full h-full pt-32 gap-8 px-6 large:px-16 mx-auto max-w-[1280px]">
      <Text texttype="heading-md" textstyles="text-center xmedium:text-left">
        Profile
      </Text>
      <form className="my-8">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-8 small:grid-cols-2">
          <div className="sm:col-span-4">
            <div className="">
              <FormInput
                type="text"
                name="username"
                value={updateData.name}
                onChange={handleUpdateChange}
                placeholder="jane smith"
                labelstyle="capitalize font-medium"
                inputstyle="w-full xsmall:px-6 xsmall:py-3 px-5 py-2.5 xsmall:mt-3 mt-2 xsmall:mb-5 mb-5"
              />
            </div>
          </div>
          <div className="sm:col-span-4">
            <FormInput
              type="tel"
              name="phone"
              value={updateData.phone}
              onChange={handleUpdateChange}
              placeholder="080-123-456-78"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              labelstyle="capitalize font-medium"
              inputstyle="w-full xsmall:px-6 xsmall:py-3 px-5 py-2.5 xsmall:mt-3 mt-2 xsmall:mb-5 mb-5"
            />
          </div>
          <div className="sm:col-span-4">
            <FormInput
              type="email"
              name="email"
              value={updateData.email}
              onChange={handleUpdateChange}
              placeholder="example@gmail.com"
              labelstyle="capitalize font-medium"
              inputstyle="w-full xsmall:px-6 xsmall:py-3 px-5 py-2.5 xsmall:mt-3 mt-2 xsmall:mb-5 mb-5"
            />
          </div>
          <div className="sm:col-span-4">
            <FormInput
              type="password"
              name="password"
              value={updateData.password}
              onChange={handleUpdateChange}
              placeholder="••••••"
              labelstyle="capitalize font-medium"
              inputstyle="w-full xsmall:px-6 xsmall:py-3 px-5 py-2.5 xsmall:mt-3 mt-2 xsmall:mb-5 mb-5"
            />
          </div>

          <div className="col-span-full">
            <label
              htmlFor="photo"
              className="block text-xs sm:text-sm font-medium leading-6 text-gray-900"
            >
              Photo
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="h-12 w-12 rounded-full object-cover"
                />
              ) : (
                <UserIcon
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
              )}
              <label
                htmlFor="file-upload"
                className="rounded-md bg-white px-2.5 py-1.5 text-xs sm:text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer"
              >
                <span>Change</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="my-10 mt-12 w-full flex items-center justify-end gap-x-6">
          <Button buttontype="other-button" buttonstyles="px-9 py-3">
            Cancel
          </Button>
          <Button
            buttontype="primary-button"
            buttonstyles="rounded-md bg-[#2A2F8B] px-10 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
