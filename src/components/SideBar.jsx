import React from "react";
import { IoIosPulse } from "react-icons/io";
import { VscSearchFuzzy } from "react-icons/vsc";
import { IoLibrarySharp } from "react-icons/io5";
import { VscArrowRight } from "react-icons/vsc";
import { CgMathPlus } from "react-icons/cg";

const SideBar = () => {
  return (
    <div className="w-[25%] h-full gap-2 text-yellow-500 flex flex-col">
      {/* Top Section */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <IoIosPulse className="text-xl" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <VscSearchFuzzy className="text-xl" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#121212] h-[85%] rounded flex flex-col">
        {/* Library Section */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IoLibrarySharp className="text-xl" />
            <p className="font-semibold cursor-pointer">Library</p>
          </div>
          <div className="flex items-center gap-3">
            <VscArrowRight className="text-xl" />
            <CgMathPlus className="text-xl" />
          </div>
        </div>

        {/* Playlist Sections */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4">
          <h1 className="text-lg ">Create Your Playlist</h1>
          <p className="font-light text-sm">It’s easy. We’ll help you.</p>
          <button className="bg-black text-yellow-500 px-4 py-1.5  text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4">
          <h1 className="text-lg">Lets Find Some Podcast To follow</h1>
          <p className="font-light text-sm">We'll keep you updated.</p>
          <button className="px-4 py-1.5 bg-black text-yellow-500 text-[15px] text-black rounded-full mt-4">
            Browse Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
