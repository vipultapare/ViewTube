import React from "react";
import tv from "../Assets/tv.png";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500  to-blue-800 cursor-pointer rounded-b-full flex flex-row justify-between">
      <img
        src={tv}
        alt="LOGO"
        className=" w-20 h-20 md:w-28 p-4 md:h-28 ml-8"
      />
      <h1 className=" p-4 font-semibold text-2xl md:text-6xl font-sans text-blue-300 mt-3 mr-9">
        View Tube
      </h1>
    </div>
  );
};

export default Header;
