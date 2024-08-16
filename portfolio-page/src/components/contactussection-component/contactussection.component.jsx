import React from "react";

export const ContactUsSection = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-12 gap-x-12 md:gap-y-8 gap-y-0 md:px-12 px-8 pt-8 pb-24 w-full mx-auto max-w-7xl"
      id="contactus"
    >
      <div className=" col-span-6">
        <p className="head-medium tracking-tight font-semibold text-gray-900 capitalize">
          Contact Us
        </p>
        <p className="md:mt-1 mt-0 text-normal leading-6 text-gray-900 text-left max-w-xl">
          Have questions or need more information? Our team is ready to assist
          you. Reach out to us via phone, email, or visit our office.
        </p>
        <div className="text-medium text-gray-900 leading-7 mt-4 w-full ml-6">
          <div className="gap-x-5 flex md:mb-1.5">
            <p className=" flex flex-row items-start">
              <span className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden whitespace-nowrap border-0">
                Address
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className=" w-5 h-6 text-blue-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                ></path>
              </svg>
            </p>
            <p className="capitalize leading-6">
              10015 uvalda street commerce city, <br />
              CO 80022 united states
            </p>
          </div>
          <div className="gap-x-5 flex md:mb-1.5">
            <p className=" flex flex-row items-start mt-1">
              <span className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden whitespace-nowrap border-0">
                Telephone
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className=" w-4 h-5 text-blue-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                ></path>
              </svg>
            </p>
            <p className="flex flex-col">
              <a href="tel:+1 (720) 765-4306" className="leading-6">
                +1 (720) 765-4306
              </a>
              <a href="tel:+1 (720) 633-7785" className="leading-6">
                +1 (720) 633-7785
              </a>
            </p>
          </div>
          <div className="gap-x-5 flex md:mb-1.5">
            <p className=" flex flex-row items-center">
              <span className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden whitespace-nowrap border-0">
                Email
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className=" w-4 h-5 text-blue-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                ></path>
              </svg>
            </p>
            <p>
              <a
                href="mailto:info@certifiedglobalenterprise.com"
                className="leading-6"
              >
                info@certifiedglobalenterprise.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <form action="#" method="POST" className="col-span-6 mt-6">
        <div className=" mx-auto">
          <div className="grid sm:grid-cols-2 gap-y-6 gap-x-6 grid-cols-1">
            <div>
              <div className="md:mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Name"
                  className="sm:leading-5 border-gray-400/80 border text-gray-900 px-3.5 py-3.5 rounded-[.2rem] w-full block placeholder:text-gray-600 focus:border-blue-700 focus:border-2 outline-none text-small font-light"
                />
              </div>
            </div>
            <div>
              <div className="md:mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="sm:leading-5 border-gray-400/80 border text-gray-900 px-3.5 py-3.5 rounded-[.2rem] w-full block placeholder:text-gray-600 focus:border-blue-700 focus:border-2 outline-none text-small font-light"
                />
              </div>
            </div>
            <div className=" sm:col-span-2">
              <div className="mt:2.5">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="sm:leading-5 border-gray-400/80 border text-gray-900 px-3.5 py-3.5 rounded-[.2rem] w-full block placeholder:text-gray-600 focus:border-blue-700 focus:border-2 outline-none text-small font-light"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="shadow text-white font-semibold text-smallest text-center py-2.5 px-8 rounded-[.2rem] bg-blue-900 hover:bg-blue-900/90 uppercase"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
