import React from "react";

const AlbumItem = ({ image, name, desc, id }) => {
  return (
    <div className="min-w-[180px] p-2 px-3 rounded curser-pointer hover:bg-[#282828]">
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1 ">{name}</p>
      <p className=" text-yellow-500 text-sm ">{desc}</p>
    </div>
  );
};

export default AlbumItem;
