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
        <a
          href="/projects"
          className=" bg-primary hover:bg-secondary transition-colors border-secondary border text-white font-light px-4 py-2 rounded-md"
        >
          More Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
