import { tools } from "@/data";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import ToolBubble from "./ToolBubble";

export interface Props {
  Project: {
    id: number;
    Title: string;
    Description: string;
    Stack: number[];
    Tag: "Static" | "Full-Stack" | "Frontend" | "Other";

    img: string;
    Link: string;
    Github: string;
  };
}

const ProjectCard = ({
  Project: { id, Title, Description, Stack, img, Link, Github, Tag },
}: Props) => {
  return (
    <div className=" h-max lg:h-[300px]  flex flex-col items-center lg:flex-row gap-5 ease-in-out shadow-xl mb-10 text-white  w-full bg-gradient-to-b lg:bg-gradient-to-r  from-primary  to-[#00023a] border-third border  transition-all  rounded-lg p-4 space-y-2">
      <a
        href={`/projects/${id}`}
        className=" w-full h-max bg-blue-900 rounded-md"
      >
        <img
          src={img}
          alt="project image"
          className="rounded-md  h-44 md:h-64  w-full  transition-all  object-cover "
        />
      </a>
      <div className=" flex flex-col w-full h-full justify-between ">
        <div className=" flex flex-col gap-2">
          <a href={`/projects/${id}`}>
            <p className=" hover:underline text-3xl font-medium">{Title}</p>
          </a>
          <div className="  h-px bg-secondary w-full"></div>
          <p className=" w-full font-extralight  line-clamp-4">{Description}</p>
        </div>
        <div className=" border rounded-full w-max text-sm px-2 mt-1">
          {Tag}
        </div>
        <div className=" flex flex-col mt-3 gap-2">
          <div className=" flex w-full flex-wrap  -space-x-3  ">
            {Stack.map((id, i) => (
              <div className="z-10 hover:z-20  shadow-2xl hover:scale-110 transition-all  h-min bg-primary border-third border rounded-full p-2 overflow-clip">
                <div className="relative ">
                  <div className=" w-full h-full flex ">
                    <div className="absolute w-4 h-4 blur-md  rounded-full bg-white   "></div>
                  </div>
                  <img
                    src={tools[id].img}
                    className={`size-8  ${
                      tools[id].needRound == false ? "" : "rounded-full"
                    }`}
                  ></img>{" "}
                </div>
              </div>
            ))}
          </div>
          <div className="  h-px bg-secondary w-full"></div>

          <div className=" text-white flex space-x-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={Link}
              className="bg-secondary rounded-full p-2"
            >
              {" "}
              <IconLink />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={Github}
              className="bg-secondary rounded-full p-2 "
            >
              <IconBrandGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
