import React from "react";
import NavBar from "./NavBar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";

const DisplayHome = () => {
  return (
    <>
      <NavBar />
      <div className="my-5 font-bold text 2xl">
        {albumsData.map((item, index) => (
          <AlbumItem
            key={index}
            image={item.image}
            name={item.name}
            desc={item.desc}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default DisplayHome;
