import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import Glow from "./components/Glow";

export const metadata: Metadata = {
  title: "Abubeker's Portfolio",
  description: "My portfolio website where i showcase my latest projects",
};

const poppins = localFont({
  src: [
    {
      path: "./../public/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "./../public/fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "./../public/fonts/Poppins/Poppins-Light.ttf",
      weight: "300",
    },
    {
      path: "./../public/fonts/Poppins/Poppins-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "./../public/fonts/Poppins/Poppins-Thin.ttf",
      weight: "100",
    },
  ],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className=" fixed top-0 w-screen -z-50 h-screen">
          <div className="h-screen w-sreen   bg-dot-violet-600/[0.2]  relative flex items-center justify-center"></div>
        </div>
        <div className="-z-50 absolute  -ml-40 -mt-40 ">
          <Glow color="bg-sky-300" />
        </div>
        <div className="-z-50 absolute right-0 -mt-64">
          <Glow color=" bg-violet-500" />
        </div>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
