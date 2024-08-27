import { IconBrandGithub, IconLink } from "@tabler/icons-react";

export interface Props {
  Project: {
    id: number;
    Title: string;
    Description: string;
    Stack: string[];
    img: string;
    Link: string;
    Github: string;
  };
}

const ProjectCard = ({
  Project: { Title, Description, Stack, img, Link, Github },
}: Props) => {
  return (
    <div className="h-max hover:scale-105  duration-300 ease-in-out hover:shadow-2xl mb-10 text-white  w-full  bg-primary border-secondary border-2  from-indigo-800 to-violet-800 hover:from-violet-800 hover:to-indigo-800 transition-all   flex flex-col  rounded-lg p-4 space-y-2">
      <img src={img} alt="project image" className="rounded-md" />
      <p className=" text-xl font-semibold">{Title}</p>
      <div className="  h-px bg-secondary w-full"></div>
      <p className=" w-full font-extralight text-sm">{Description}</p>
      <div className=" text-white flex space-x-3">
        <a href={Link} className="bg-secondary rounded-full p-2">
          {" "}
          <IconLink />
        </a>
        <a href={Github} className="bg-secondary rounded-full p-2 ">
          <IconBrandGithub />
        </a>
      </div>
      <div className=" flex w-full flex-wrap space-x-2  ">
        {Stack.map((tool, i) => (
          <div
            key={i}
            className=" px-2 rounded-full text-sm mt-1 text-white bg-forth cursor-pointer"
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
