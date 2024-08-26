import React, { useState } from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full  h-12 mt-2 z-50 ">
      <div className="h-full z-50 flex justify-center">
        <div className=" z-50 text-xs sm:text-sm md:text-base flex w-max items-center px-4 md:px-8 space-x-3 sm:space-x-5 md:space-x-10  rounded-full h-full font-light border-black border-2  bg-[#00011C] text-white">
          <p>Home</p>
          <p>Projects</p>
          <p>About me</p>
          <p>Contact me</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
