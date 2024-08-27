import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <div className=" w-full ">
      <div className=" fixed top-0 w-screen -z-50 h-screen">
        <div className="h-screen w-sreen   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center"></div>
      </div>
      <Hero />
      <AboutMe />
      <Tools />
      <Projects />
      <ContactMe />
    </div>
  );
}
