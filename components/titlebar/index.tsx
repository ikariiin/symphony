import React from "react";
import { CommandBar } from "./command-bar";
import { Bitter } from "next/font/google";
import { WindowControls } from "./window-control";

const bitter = Bitter({
  variable: "--font-bitter",
  display: "swap",
  subsets: ["latin", "latin-ext"],
});

export const TitleBar = () => {
  return (
    <nav
      data-tauri-drag-region
      className={`select-none fixed top-0 left-0 right-0 flex justify-center items-center h-9 bg-stone-800 text-stone-50 shadow-sm font-serif rounded-t-[12px] ${bitter.variable}`}
    >
      <CommandBar />
      <div className="absolute top-0 right-0 bottom-0">
        <WindowControls />
      </div>
    </nav>
  );
};
