import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg col-span-1 text-left rounded-t-xl ml-2">
      <ul className="cursor-pointer">
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold text-xl pt-5">Subscriptions</h1>
      <ul className="cursor-pointer">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold text-xl pt-5">Playlist</h1>
      <ul className="cursor-pointer">
        <li>Classical</li>
        <li>Retro</li>
        <li>Rock</li>
        <li>BGM</li>
      </ul>
    </div>
  );
};

export default Sidebar;
