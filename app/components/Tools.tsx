import React from "react";
import { tools } from "@/data";
import classNames from "classnames";

const Tools = () => {
  return (
    <div className=" mt-20 md:mt-32 px-8 md:px-16 xl:px-32 w-full flex justify-center flex-col items-center ">
      <div className="w-full flex justify-center">
        <p className=" text-3xl text-white  mb-10 ">My tools</p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-5 w-full  ">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="col-span-1 flex w-full justify-center items-center group "
          >
            <div
              className={classNames({
                " bg-primary rounded-full overflow-hidden w-20 p-2": true,
                "  p-4  ": tool.name == "Javascript",
                "  p-4 ": tool.name == "Typescript",
              })}
            >
              <img
                src={tool.img}
                alt={tool.name}
                className={classNames({
                  " w-full h-full    hover:rotate-[20deg]  transition-all  overflow-hidden":
                    true,
                  "  rounded  ": tool.name == "Javascript",
                  "  rounded": tool.name == "Typescript",
                  " hover:-rotate-[20deg] ": i > tools.length / 2,
                  " hover:rotate-[20deg] ": i < tools.length / 2,
                })}
              />
            </div>{" "}
            <div className=" bg-secondary text-white rounded-md p-2 -mt-32 absolute scale-0 group-hover:scale-100 transition-transform ease-in-out origin-bottom duration-300">
              {tool.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
