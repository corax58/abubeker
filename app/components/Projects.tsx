import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectsList } from "@/data";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" mt-20 md:mt-32 px-4 md:px-10 xl:px-32 w-full flex justify-center flex-col items-center"
    >
      <div className="w-full flex justify-center">
        <p className=" text-3xl text-white  mb-10 ">Projects</p>
      </div>
      <div className=" grid  gap-5  justify-between w-full ">
        <div className="flex w-full justify-center">
          <ProjectCard Project={ProjectsList[0]} />
        </div>
        <div className="flex w-full justify-center">
          <ProjectCard Project={ProjectsList[1]} />
        </div>
      </div>
      <div>
        <a href="/projects">
          <div className="  border-[#142266] bg-[#142266] border-t-2 border rounded-lg ">
            <div className="to-[#101c53] bg-gradient-to-b rounded-lg hover:from-[#101c53] hover:to-[#182879] transition-colors duration-1000 from-[#182879] border-[#2741c5] border-[1.5px] border-t-0  px-5 py-2 text-white font-medium">
              More Projects
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
