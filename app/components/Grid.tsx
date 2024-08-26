import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import React from "react";
import { gridItems } from "@/data";
import Image from "next/image";
import FullImage from "@/public/fullimage2.jpg";
const Grid = () => {
  const items = [
    {
      title:
        "Hi, I'm Abubeker Abduljelil, a full-stack web developer from Ethiopia with a degree in Computer Science. I love combining art and technology to create dynamic web applications. Outside of coding, I enjoy exploring art, music, and collaborative projects.",
      className: " col-span-2",
    },

    {
      title: " I prioritize client collaboration & open communication",
      className: "col-span-1 row-span-2",
    },
    {
      title: " I prioritize client collaboration & open communication",
      className: "col-span-1",
    },
    {
      title: " Am flexible with time zone communications",
      className: " ",
    },
    {
      title: "Do you want to start a project together?",
      className: "",
    },
    {
      title:
        "Tech and art enthusiast always eager to learn and explore new things.",
      className: "",
    },
  ];
  const card =
    "rounded-xl border-2 border-secondary text-opacity-50 bg-primary";
  return (
    <section className="w-full flex flex-col items-center">
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            title={item.title}
            className={item.className}
            key={i}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
