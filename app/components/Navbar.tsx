"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If we are scrolling down, hide the navbar
        setIsVisible(false);
      } else {
        // If we are scrolling up, show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);
  return (
    <nav
      className={`fixed w-full  h-12 mt-2 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 " : "-translate-y-full"
      }`}
    >
      <div className="h-full z-50 flex justify-center">
        <div className=" z-50 text-xs sm:text-sm md:text-base flex w-max items-center px-4 md:px-8 space-x-3 sm:space-x-5 md:space-x-10  rounded-full h-full font-light border-black border-2  bg-[#00011C] text-white">
          <Link href={"/"} className="hover:font-medium ">Home</Link>
          <Link href={"/projects"}  className="hover:font-medium "  >Projects</Link>
          <Link href={"/#about-me"} className="hover:font-medium ">About me</Link>
          <Link href={"/#contact-me"} className="hover:font-medium ">Contact me</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
