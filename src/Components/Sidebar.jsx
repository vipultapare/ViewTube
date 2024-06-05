import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg col-span-1 text-left rounded-t-xl ml-2">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>{" "}
      </ul>

      <h1 className="font-bold text-xl pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>{" "}
      </ul>

      <h1 className="font-bold text-xl pt-5">Playlist</h1>
      <ul>
        <li>Classical</li>
        <li>Retro</li>
        <li>Rock</li>
        <li>BGM</li>{" "}
      </ul>
    </div>
  );
};

export default Sidebar;
