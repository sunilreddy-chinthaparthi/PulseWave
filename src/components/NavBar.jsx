import React from "react";
import { assets } from "../assets/assets";

const NavBar = () => {
  return (
    <>
      <div className=" w-full flex justify-between items-center font-semibold ">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2x1 curser-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            className="w-8 bg-black p-2 rounded-2x1 curser-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-black text-yellow-500 text-[15px] px-4 py-1 rounded-2xl hiddedn md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black text-yellow-500 py-1 px-3 text-[15px] cursor-pointer rounded-2xl hidden md:block">
            Install App
          </p>
          <p className="bg-black text-yellow-500 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
            S
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
