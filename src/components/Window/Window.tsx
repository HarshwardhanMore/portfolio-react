"use client";

import { useState } from "react";
import Content from "../Content/Content";
import LeftMenuBar from "../LeftMenuBar/LeftMenuBar";
import SideMenuBar from "../SideBar/SideBar";
import TabsBar from "../TabsBar/TabsBar";
import TopMenuBar from "../TopMenuBar/TopMenuBar";
import BottomMenuBar from "../BottomMenuBar/BottomMenuBar";

const Window = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <TopMenuBar />
      <div className="w-full flex-grow flex">
        <LeftMenuBar />
        <div className="flex-grow h-full flex">
          <SideMenuBar />
          <div className="flex-grow flex flex-col">
            <TabsBar />
            <Content />
          </div>
        </div>
      </div>
      <BottomMenuBar />
    </div>
  );
};

export default Window;
