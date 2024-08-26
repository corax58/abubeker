import Image from "next/image";
import Glow from "./components/Glow";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <div className=" w-full ">
      <div className=" fixed top-0 w-screen -z-50 h-screen">
        <div className="h-screen w-sreen   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center"></div>
      </div>
      <Navbar />
      <Hero />
      <AboutMe />
    </div>
  );
}
