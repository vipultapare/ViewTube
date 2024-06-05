import React from "react";
import Sidebar from "./Sidebar";
import SubMain from "./SubMain";

const Main = () => {
  return (
    <div className=" grid grid-flow-col">
      <Sidebar />
      <SubMain />
    </div>
  );
};

export default Main;
