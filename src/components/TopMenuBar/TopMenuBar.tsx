import React from "react";

const TopMenuBar = () => {
  return (
    <div className="w-full h-10 bg-background-dark border-b border-border flex items-center">
      <div className=" w-[30%] h-full"></div>
      <div className=" w-[40%] h-2/3 rounded-md border border-border bg-background-lite text-sm flex items-center justify-center">
        Harshwardhan's Portfolio
      </div>
      <div className=" w-[30%] h-full"></div>
    </div>
  );
};

export default TopMenuBar;
