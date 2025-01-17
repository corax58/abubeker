import { ProjectsList } from "@/data";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Glow from "@/app/components/Glow";

const ProjectPage = ({ params }: { params: { projectId: string } }) => {
  var id = parseInt(params.projectId);
  let project = ProjectsList[id];
  if (!project) notFound();
  console.log(project.Title);
  return (
    <div>
      <div className=" py-20  flex flex-col gap-10 h-max">
        <div className="bg-black ">
          <Carousel className="w-full relative h-min  ">
            <CarouselContent>
              {project.Images?.map((image) => (
                <CarouselItem>
                  <img
                    src={image}
                    className=" h-full  md:max-h-96 lg:max-h-[450px]   w-full object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="prose max-w-none   text-white px-5 md:px-20 font-light  overflow-clip ">
          <ReactMarkdown>{project.Details}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
