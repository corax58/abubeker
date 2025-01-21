import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Toolset from "./components/Toolset";

export default function Home() {
  return (
    <div className=" w-full ">
      <div className=" fixed top-0 w-screen -z-50 h-screen">
        <div className="h-screen w-sreen   bg-dot-white/[0.2]  relative flex items-center justify-center"></div>
      </div>
      <Hero />
      <AboutMe />
      <Toolset />
      <Projects />
      <ContactMe />
    </div>
  );
}
