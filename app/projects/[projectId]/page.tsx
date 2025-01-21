import { ProjectsList } from "@/data";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import ImageViewer from "@/app/components/ImageViewer";

const ProjectPage = ({ params }: { params: { projectId: string } }) => {
  var id = parseInt(params.projectId);
  let project = ProjectsList[id];
  if (!project) notFound();
  return (
    <div>
      <div className=" py-20  flex flex-col gap-10 h-max">
        <ImageViewer images={project.Images} />
        <div className="prose max-w-none   text-white px-5 md:px-20 font-light  overflow-clip ">
          <ReactMarkdown>{project.Details}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
