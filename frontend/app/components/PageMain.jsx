"use client";

import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Background from "./Background";

export function PageMain({ children }) {
  const [bgColor, setBGColor] = useState(getBackgroundColor(0));

  useEffect(() => {
    const handleScroll = () => {
      setBGColor(getBackgroundColor(window.scrollY));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Background />

      <div
        style={{ backgroundColor: bgColor }}
        className="relative z-10 pt-18 flex min-h-screen flex-col items-center pb-12 px-15 bg-black"
      >
        <Navbar />

        <main
          className="grow text-center w-full m-0 p-5"
        >
          {children}
        </main>
      </div>
    </>
  );
}

const getBackgroundColor = (scroll) => {
  const min = 150;
  const max = 200;

  const speed = 0.05;

  let green = Math.floor(Math.min(max, min + scroll * speed));
  let blue = Math.floor(Math.max(min, max - scroll * speed));

  return `rgba(50, ${green}, ${blue}, 0.75)`;
};
