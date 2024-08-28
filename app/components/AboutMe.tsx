import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Art from "@/public/art.png";
import communication from "@/public/communication.svg";
import FullImage from "@/public/fullimage2.jpg";
import Globalization from "@/public/Globalization.png";
import Image from "next/image";
import CopyButton from "./CopyButton";
const AboutMe = () => {
  const card = "rounded-xl  text-opacity-50 ";
  return (
    <section
      id="about-me"
      className="mt-32 md:mt-0 w-full flex flex-col items-center  xl:px-20"
    >
      <div>
        <p className="text-3xl text-white  mb-10">About me</p>
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-y-5 text-white  px-5 md:px-16 xl:px-32">
        <div
          className={`   ${card} bg-indigo-900   font-sans col-span-2 text-lg md:text-xl  flex items-center justify-center px-4 py-2 md:px-4 md:py-4  text-justify`}
        >
          <div className=" ">
            Hi, I&apos;m Abubeker Abduljelil, a full-stack web developer from
            Ethiopia with a degree in Computer Science. I love combining art and
            technology to create dynamic web applications. Outside of coding, I
            enjoy exploring art, music, and collaborative projects.
          </div>
        </div>

        <div className=" col-span-1 row-span-2 h-full  bg-blue-600 rounded-xl overflow-clip w-full">
          <div className="relative w-full h-full ">
            <Image
              //   width={300}
              src={FullImage}
              className="h-full   object-fill "
              alt="full image"
            />
          </div>
        </div>
        <div
          className={`  ${card} bg-gradient-to-r from-indigo-800 to-violet-900  flex items-center space-x-2 p-4 pb-0 pr-0 h-full`}
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
              className="  w-10/12 xl:w-11/12  -mr-2 object-cover"
            />
          </div>
        </div>
        <div
          className={` ${card} bg-gradient-to-r from-violet-900 to-indigo-900 flex items-center flex-col h-full p-4`}
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
        <div className=" inner-grid col-span-full grid  grid-cols-1  h-full md:grid-cols-2 gap-5">
          <div
            className={`  ${card} col-span-1 bg-violet-800   h-40 overflow-hidden w-full`}
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
          <div
            className={`  ${card} bg-gradient-to-r from-indigo-800 to-violet-900 flex  md:w-full  h-40 pt-4 pl-4`}
          >
            <div className=" relative w-full items-end h-full">
              <div className=" absolute w-full h-full items-end  ">
                <div className="flex w-full h-full  justify-end items-end pt-2">
                  <Image
                    src={Art}
                    alt="Tech and art"
                    className="w-3/4 lg:w-2/3 h-4/5 lg:h-full  object-fill"
                  ></Image>
                </div>
              </div>
              <div className="absolute text-lg ">
                <strong>Tech</strong> and <strong>art</strong> enthusiast always
                eager to learn and explore new things.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
