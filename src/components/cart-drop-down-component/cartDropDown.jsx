import React from "react";
import Button from "../button-component/button.component";
import classes from "./cartDropDown.style.module.scss";

function CartDropDown() {
  //   <div>
  //     <div id="cartDropdown1" className="absolute inset-[0px auto auto 0px] m-0 transform-[translate(799px, 64px)] large:space-x-0 shadow antialiased p-4 bg-opacity-100 bg-white rounded-lg overflow-hidden w-[360px] block mx-auto z-10">
  //         <dl className="pb-4 bg-opacity-100 border-b gap-4 justify-between items-center flex ">
  //           <dt className="text-gray-800 leading-4 font-semibold">Your shopping cart</dt>
  //           <dd className="text-gray-500 leading-4">4 items</dd>
  //         </dl>
  //         <div className=" space-y-4 gap-3 justify-between items-center grid-cols-4 grid">
  //           <div className="gap-2 item-center flex grid-cols-2 ">
  //           <a href="#" className="items-center shrink-0 w-9 h-9 aspect-square flex text-inherit">
  //               <img className="w-full max-h-full h-auto " src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image"/>
  //               <img className="w-full max-h-full h-auto hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image"/>
  //             </a>
  //             <div className="flex-1">
  //               <a href="#" className="text-gray-800 leading-4 font-semibold text-sm hidden text-ellipsis whitespace-nowrap">Apple iPhone 15</a>
  //               <p className="text-gray-500 font-sm overflow-hidden text-ellipsis whitespace-nowrap mt-0.5">Gold Edition, 256GB</p>
  //             </div>
  //           </div>

  //           <div className="text-gray-500 font-sm mt-0.5">x1</div>

  //           <div className="gap-2 justify-end items-center flex ">
  //             <p className="text-gray-800 leading-4 font-semibold text-sm">$599</p>
  //             <button className="text-red-800 bg-transparent">
  //               <span className="overflow-hidden h-[1px] absolute whitespace-nowrap -m-[1px]"> Remove </span>
  //               <svg className="w-4 h-4 block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  //                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"></path>
  //               </svg>
  //             </button>
  //             <div className="absolute m-0 transition duration-[.3s] shadow-sm opacity-0 text-white font-medium text-sm px-3 py-2 bg-gray-800 rounded-lg inline-block z-10 inset-[0px auto auto 0px] m-0 transform-[translate(799px, 64px)]">
  //               Remove
  //               <div className="absolute left-0 -b-4 bg-inherit h-[5px] w-[8px]"></div>
  //             </div>
  //           </div>
  //         </div>

  //         <dl className=" space-y-4 pt-4 border-t border-gray-300 justify-between items-center flex ">
  //           <dt className="text-gray-800 leading-4 font-semibold">Total</dt>

  //           <dd className="text-gray-800 leading-4 font-semibold">$43,796</dd>
  //         </dl>

  //         <a href="#" className="bg-blue-800 space-y-4 me-2 cursor-pointer text-white text-sm px-5 py-2.5 rounded-lg justify-center w-full items-center inline-flex mb-2 "> See your cart </a>
  //       </div>
  //  </div>
  return (
    <div className="absolute w-full mx-auto  max-w-[1280px] flex flex-row justify-end px-8">
      <div className={classes["cart-dropdown-container"]}>
        <div className={classes["cart-items"]}></div>
        <Button>Go to check out </Button>
      </div>
    </div>
  );
}

export default CartDropDown;
