import React from "react";
import NavBar from "./NavBar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import { songsData } from "../assets/assets";

const DisplayHome = () => {
  return (
    <>
      <NavBar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <divm className="flex overflow-x-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </divm>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl"> todays biggest hits </h1>
        <divm className="flex overflow-x-auto">
          {songsData.map((item, index) => (
            <AlbumItem
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </divm>
      </div>
    </>
  );
};

export default DisplayHome;
