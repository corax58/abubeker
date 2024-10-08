import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Abubeker's Portfolio",
  description: "Web developer Portfolio website",
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
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
