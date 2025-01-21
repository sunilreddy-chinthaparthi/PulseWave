import React from "react";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import Display from "./components/Display";

const App = () => {
  return (
    <div class="h-screen bg-black">
      <div class="h-[90%] flex">
        <SideBar />
        <Display />
      </div>
      <Player />
    </div>
  );
};

export default App;
