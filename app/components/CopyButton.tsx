"use client";
import { IconCopy } from "@tabler/icons-react";
import { useState } from "react";

const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard:", text);
    })
    .catch((err) => {
      console.error("Error copying text to clipboard:", err);
    });
};

const CopyButton = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleClick = () => {
    const email = "Abubekercorax@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
      });
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className=" bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-xs font-semibold leading-6  text-white inline-block"
      >
        <span className="absolute inset-0 overflow-hidden rounded-lg">
          <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-lg bg-zinc-950 py-0.5 px-4  ring-1 ring-white/10 ">
          <IconCopy size={15} />{" "}
          <span className="ml-2">
            {copied ? "Email copied" : "Copy my email address"}
          </span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
    </div>
  );
};

export default CopyButton;
