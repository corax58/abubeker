import React from "react";
import Glow from "./Glow";
import ProfileImage from "../../public/profile.jpg";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const Hero = () => {
  return (
    <div>
      <div className="-z-50 absolute  -ml-40 -mt-40 ">
        <Glow color="bg-sky-300" />
      </div>
      <div className="-z-50 absolute right-0 -mt-64">
        <Glow color=" bg-violet-500" />
      </div>

      <div className=" pt-28 md:pt-0  font  flex  flex-col-reverse md:flex-row justify-center items-center w-full h-screen px-5 sm:space-x-10 md:px-12 lg:space-x-20 lg:px-16  xl:px-36 xl:space-x-48">
        <div className="text-white space-y-5">
          <div className=" text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
            <p>HI,</p>
            <p> I&apos;m Abubeker,</p>

            <TypewriterEffect
              className=" p-0 w-max text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white"
              words={[{ text: "Web" }, { text: "Developer" }]}
            />
          </div>

          <p className=" text-lg text-justify">
            I&apos;m Abubeker, a full stack web developer and a web desinger . I
            craft innovative, user-friendly web solutions with expertise in both
            front-end and back-end technologies.
          </p>
        </div>
        <div className=" flex items-center justify-center">
          <div className="rounded-full overflow-hidden border-[10px] lg:border-[18px] border-[#323571] size-56 lg:size-72 xl:size-96 ">
            <Image src={ProfileImage} alt="" className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
