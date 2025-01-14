import { tools } from "@/data";
import React from "react";
import ToolBubble from "./ToolBubble";

const Toolset = () => {
  return (
    <div className=" text-white mt-20 md:mt-32 px-8 md:px-16 xl:px-32 w-full flex justify-center flex-col items-center ">
      <div className="w-full flex   gap-5 justify-center items-center mb-10">
        <p className=" text-3xl  text-white   h-min ">My Toolset</p>
      </div>

      <div className=" flex gap-2 md:gap-10  flex-wrap items-center justify-between">
        {tools.map((tool) => (
          <ToolBubble
            name={tool.name}
            imageLink={tool.img}
            needRound={tool.needRound}
          />
        ))}
      </div>
    </div>
  );
};

export default Toolset;
