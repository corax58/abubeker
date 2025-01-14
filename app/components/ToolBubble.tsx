import React from "react";

interface Props {
  name: string;
  imageLink: string;
  needRound?: boolean;
}
const ToolBubble = ({ name, imageLink, needRound }: Props) => {
  return (
    <div className="  shadow-2xl hover:scale-110 transition-all  h-min bg-primary border-third border rounded-full p-2 overflow-clip">
      <div className="relative ">
        <div className=" w-full h-full flex ">
          <div className="absolute w-5 h-5 blur-md  rounded-full bg-white   "></div>
        </div>
        <img
          src={imageLink}
          className={`size-14  ${needRound == false ? "" : "rounded-full"}`}
        ></img>{" "}
      </div>
    </div>
  );
};

export default ToolBubble;
