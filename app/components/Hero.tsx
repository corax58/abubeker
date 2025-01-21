import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import ProfileImage from "../../public/profile.jpg";

const Hero = () => {
  return (
    <div>
      <div className=" pt-28 md:pt-0  font  flex  flex-col-reverse md:flex-row justify-center items-center w-full h-screen px-5 sm:space-x-10 md:px-12 lg:space-x-20 lg:px-16  xl:px-36 xl:space-x-48">
        <div className="text-white space-y-5">
          <div className=" text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
            <p>HI,</p>
            <p> I&apos;m Abubeker,</p>

            <TypewriterEffect
              className=" p-0 w-max text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white  dark:text-white "
              words={[{ text: "Web" }, { text: "Developer" }]}
            />
          </div>

          <p className=" text-lg text-justify">
            I&apos;m Abubeker, a full stack web developer and a web desinger . I
            craft innovative, user-friendly web solutions with expertise in both
            front-end and back-end technologies.
          </p>
          {/* <Link
            href={"/"}
            className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-md p-px text-xs font-semibold leading-6  text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-md bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <IconFileCv size={20} strokeWidth={1} />
              <span className=" text-lg font-light">Resume</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </Link> */}
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
