import React from "react";
import Glow from "../components/Glow";
import Fitlers from "./components/Fitlers";
import { ProjectsList } from "@/data";
import ProjectCard from "../components/ProjectCard";

const page = () => {
  return (
    <div className="w-screen">
      <div className="-z-50 absolute  -ml-40 -mt-40 ">
        <Glow color="bg-sky-300" />
      </div>
      <div className="-z-50 absolute right-0 -mt-64 ">
        <Glow color=" bg-violet-500" />
      </div>
      <div className="w-full h-2"></div>
      <div className="w-full flex mt-16  justify-center">
        <input
          placeholder="Seach projects"
          className=" bg-primary border-2 border-secondary  outline-none focus:bg-third transition-all duration-300 py-2 px-4 text-white w-1/2 rounded-full"
        />
      </div>
      <div className=" pt-12  px-10 lg:px-16 xl:px-32">
        <div className="  grid grid-cols-1 md:grid-cols-2 gap-5  justify-between w-full ">
          {ProjectsList.map((Project) => (
            <div className="flex w-full justify-center" key={Project.id}>
              <ProjectCard Project={Project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
