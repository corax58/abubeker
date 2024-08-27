import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectsList } from "@/data";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" mt-20 md:mt-32 px-8 md:px-10 xl:px-32 w-full flex justify-center flex-col items-center"
    >
      <div className="w-full flex justify-center">
        <p className=" text-3xl text-white  mb-10 ">Projects</p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5  justify-between w-full ">
        {ProjectsList.map((Project) => (
          <div className="flex w-full justify-center" key={Project.id}>
            <ProjectCard Project={Project} />
          </div>
        ))}
      </div>
      <div>
        <button className=" bg-primary border-secondary border text-white font-light px-4 py-2 rounded-md">
          More Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
