import React from "react";
import { assets, songsData } from "../assets/assets";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";

const Player = () => {
  return (
    <div className="h-[10%] bg-black flex justify-between  items-center text-yellow-500 px-4">
      <div className="  lg:flex items-center gap-4">
        <img className="w-12 " src={songsData[0].image} alt="Song Thumbnail" />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <MdSkipPrevious className="text- 2xl cursor-pointer" />
          <IoIosPlay className="text- 2xl cursor-pointer" />
          <IoIosPause className="text- 2xl cursor-pointer" />
          <MdSkipNext className="text- 2xl cursor-pointer" />
        </div>
        <div className="flex items-center gap-5">
          <p>1.04</p>
          <div className="w-[60vw] max-w-[500px] bg-white rounded cursor pointer ">
            <hr className="h-1 border-none w-10 bg-yellow-500 ronded-full" />
          </div>
          <p>3.00</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
