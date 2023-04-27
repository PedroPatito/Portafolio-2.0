'use client'
import UseColorMode from "@/Hooks/UseColorMode";
import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const DarkLightButton = () => {
  const [colorMode, setColorMode] = UseColorMode();
  return (
    <div
      onClick={() => {
        setColorMode(colorMode === "light" ? "dark" : "light");
      }}
      className="mr-4 "
    >
      {" "}
      {colorMode === "dark" ? (
        <BsFillMoonStarsFill className=" text-white text-[20px]" />
      ) : (
        <BsFillSunFill className="text-[24px]" />
      )}
    </div>
  );
};

export default DarkLightButton;
