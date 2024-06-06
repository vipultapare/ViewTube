import React from "react";
import menu from "../Assets/menu.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/ReduxStore/appSlice";

const Header2 = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 bg-transparent shadow-lg border-b-4 border-blue-950 bg-gradient-to-bl from-cyan-600 to-cyan-400 rounded-full">
      <div className="col-span-4">
        <img
          src={menu}
          alt=""
          className="w-12 h-12 cursor-pointer"
          onClick={toggleMenuHandler}
        />
      </div>
      <div className="col-span-10 flex  justify-center">
        <input
          type="text"
          placeholder="🔍 Enter for Videos"
          className="p-2 w-96 bg-gray-300 text-black font-semibold rounded-l-full  border-2 border-cyan-950"
        />
        <button className="bg-gradient-to-tl from-red-600 to-red-900 text-white font-semibold p-2  rounded-r-full hover:bg-gradient-to-tr hover:from-red-950 hover:to-red-900">
          Search🔍
        </button>
      </div>

      {/* <div>
        <img src={user} alt="User Icon" />
      </div> */}
    </div>
  );
};

export default Header2;
