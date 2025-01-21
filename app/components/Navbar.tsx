"use client";
import Link from "next/link";
import {
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mouseChange, setMouseChange] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
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
        <div
          onMouseLeave={() => setMouseChange(!mouseChange)}
          className=" relative z-50 text-xs  md:text-base flex w-max items-center gap-2 p-4   rounded-full h-full  bg-black"
        >
          <Cursor position={position} />
          <Tab href="/" setPosition={setPosition} mouseChange={mouseChange}>
            Home
          </Tab>
          <Tab
            href="/projects"
            setPosition={setPosition}
            mouseChange={mouseChange}
          >
            Projects
          </Tab>
          <Tab
            href="/#about-me"
            setPosition={setPosition}
            mouseChange={mouseChange}
          >
            About me
          </Tab>
          <Tab
            href="/#contact-me"
            setPosition={setPosition}
            mouseChange={mouseChange}
          >
            Contact me
          </Tab>
        </div>
      </div>
    </nav>
  );
};

const Tab = ({
  children,
  setPosition,
  href,
  mouseChange,
}: {
  href: string;
  setPosition: Dispatch<SetStateAction<any>>;
  children: ReactNode;
  mouseChange: boolean;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const pathname = usePathname();
  const hash = window.location.hash;
  const location = pathname + hash;

  useEffect(() => {
    if (location == href && ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setPosition({
        width: width + 10,
        opacity: 1,
        left: ref.current.offsetLeft - 5,
      });
    }
  }, [mouseChange]);
  return (
    <Link
      href={href}
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width: width + 10,
          opacity: 1,
          left: ref.current.offsetLeft - 5,
        });
      }}
      className={
        " z-10 block cursor-pointer uppercase text-white mix-blend-difference "
      }
    >
      {children}
    </Link>
  );
};

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.div
      animate={position}
      className="absolute z-0 h-8   rounded-full bg-white"
    />
  );
};

export default Navbar;
