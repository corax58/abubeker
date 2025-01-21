import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Art from "@/public/art.png";
import communication from "@/public/communication.svg";
import Globalization from "@/public/Globalization.png";
import Image from "next/image";
import CopyButton from "./CopyButton";

const AboutMe = () => {
  const card = "rounded-xl border-third border   ";
  return (
    <section
      id="about-me"
      className="mt-32 md:mt-0 w-full flex flex-col items-center  xl:px-20"
    >
      <div>
        <p className="text-3xl text-white  mb-10">About me</p>
      </div>
      <div className=" gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 text-white">
        <div
          className={` ${card} overflow-clip flex  col-span-1 md:col-span-2  p-4 bg-primary      text-lg md:text-xl  items-center justify-center  text-justify`}
        >
          <div className="relative w-full h-min ">
            <div className="font-sans font-light  ">
              Hi, I&apos;m
              <strong className="font-semibold"> Abubeker Abduljelil</strong>, a
              full-stack web developer from Ethiopia with a degree in Computer
              Science. I love combining art and technology to create dynamic web
              applications. Outside of coding, I enjoy exploring art, music, and
              collaborative projects.
            </div>
            <div className=" w-full h-full flex justify-center ">
              <div className="absolute w-full h-96  blur-3xl rounded-full bg-violet-900 opacity-50 transform "></div>
            </div>
          </div>
        </div>

        <div
          className={`  ${card}  col-span-1 bg-gradient-to-r from-violet-900 to-primary  flex items-center space-x-2 p-4 xl:pb-0 pr-0 h-full`}
        >
          <div className=" w-1/3 h-full text-left">
            I <br /> prioritize <br />
            client <span className=" font-bold text-xl">Collaboration</span> &
            open
            <span className=" font-bold text-xl"> Communication</span>
          </div>
          <div className="  w-full h-full items-end flex justify-end ">
            <Image
              alt="somepic"
              src={communication}
              className="  w-10/12  xl:w-11/12  -mr-2 object-cover"
            />
          </div>
        </div>

        <div
          className={` ${card} col-span-1 bg-gradient-to-r from-violet-900  to-primary flex items-center flex-col h-full p-4`}
        >
          <div className="w-full ">
            Am flexible with time zone{" "}
            <span className=" font-bold text-xl"> Communications</span>
          </div>
          <div className=" h-max w-56 -mt-2  overflow-hidden ">
            <Image
              src={Globalization}
              alt="globe"
              className=" w-full object-contain "
            />
          </div>
        </div>
        <div
          className={`  ${card} col-span-1 md:col-span-2  h-64 bg-gradient-to-r  from-violet-900  to-primary flex  md:w-full   pt-4 pl-4`}
        >
          <div className=" relative w-full items-end h-full">
            <div className=" absolute w-full h-full items-end  ">
              <div className="flex w-full h-full  justify-end items-end pt-2">
                <Image
                  src={Art}
                  alt="Tech and art"
                  className=" opacity-50 md:opacity-100 w-min  h-4/5 lg:h-full  object-contain"
                ></Image>
              </div>
            </div>
            <div className="absolute text-lg  ">
              <strong>Tech</strong> and <strong>art</strong> enthusiast with a
              passion for programming, problem-solving, and exploring the
              intersection of creativity and innovation.
            </div>
          </div>
        </div>

        <div
          className={`  ${card} col-span-1 md:col-span-2 lg:col-span-3  bg-violet-800   h-40 overflow-hidden w-full`}
        >
          <BackgroundGradientAnimation className=" h-full">
            <div className="z-50 font-bold text-lg flex flex-col p-8 text-center justify-center space-y-4 items-center h-full spa ">
              <p>Do you want to start a project together?</p>
              <div className="">
                <CopyButton />
              </div>
            </div>
          </BackgroundGradientAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
