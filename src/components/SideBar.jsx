import React from "react";
import { IoIosPulse } from "react-icons/io";

import { assets } from "../assets/assets";
const SideBar = () => {
  return (
    <div class="w-[20%] h-full gap-2 text-yellow  1g:flex">
      <div class="bg-[#121212]	 h-[15%] rounded flex flex-col justify-around">
        <div class="flex items-center gap-3 pl-8 curser-pointer text-yellow-500">
          <IoIosPulse class="size-8	" />
          <p class=" font-bold"> Home</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
