import React from "react";
import FormInput from "../form-input-component/form-input.component";
import Button from "../button-component/button.component";

const SetDelivery = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Delivery Details
      </h2>{" "}
      <form
        className="flex flex-col xmedium:w-[40%] small:w-[28rem] xxsmall:w-11/12 w-full xmedium:pb-0 pb-8 justify-center"
        // onSubmit={submitFormHandler}
      ></form>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormInput
          type="name"
          name="Name"
          placeholder="Jane Doe"
          labelstyle="capitalize font-medium mb-2 block"
          inputstyle="block w-full rounded-[0.4rem] border  p-2.5 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
          //   value={displayName}
          required
          //   onChange={onChangeHandler}
        />
        <FormInput
          type="email"
          name="email"
          placeholder="name@example.com"
          labelstyle="capitalize font-medium mb-2 block"
          inputstyle="block w-full rounded-[0.4rem] border p-2.5 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
          //   value={displayName}
          required
          //   onChange={onChangeHandler}
        />
        <div>
          <div className="mb-2 flex items-center gap-2">
            <label
              for="select-country-input-3"
              className="block text-sm font-medium shadow-sm text-gray-900"
            >
              {" "}
              Country*{" "}
            </label>
          </div>
          <select
            id="select-country-input-3"
            className="block w-full rounded-[0.4rem] border  bg-white p-2.5 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          >
            <option selected>United States</option>
            <option value="AS">Australia</option>
            <option value="FR">France</option>
            <option value="ES">Spain</option>
            <option value="UK">United Kingdom</option>
          </select>
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2">
            <label
              for="select-city-input-3"
              className="block text-sm font-medium text-gray-900"
            >
              {" "}
              City*{" "}
            </label>
          </div>
          <select
            id="select-city-input-3"
            className="block w-full rounded-[0.4rem] border shadow-sm  bg-white p-2.5 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
          >
            <option selected>San Francisco</option>
            <option value="NY">New York</option>
            <option value="LA">Los Angeles</option>
            <option value="CH">Chicago</option>
            <option value="HU">Houston</option>
          </select>
        </div>

        <div>
          <label
            for="phone-input-3"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            {" "}
            Phone Number*{" "}
          </label>
          <div className="flex items-center">
            <button className="z-10 inline-flex shrink-0 items-center rounded-s-lg border  bg-gray-50 px-4 py-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              +1
              <svg
                className="-me-0.5 ms-2 h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>
            <div className="relative w-full">
              <input
                type="text"
                id="phone-input"
                className="z-20 block w-full rounded-e-lg border border-s-0  bg-white p-2.5 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
                required
              />
            </div>
          </div>
        </div>

        <FormInput
          type="address"
          name="address"
          placeholder="NO. 2"
          labelstyle="capitalize font-medium mb-2 block"
          inputstyle="block w-full rounded-[0.4rem] border  p-2.5 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
          //   value={displayName}
          required
          //   onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default SetDelivery;
