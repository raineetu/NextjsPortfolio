import { useTheme } from "@/app/context/ThemeContext";
import { infoList, toolsData } from "@/constants/assets";
import Image from "next/image";
import React from "react";

const Details = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {infoList.map((item, index) => {
          return (
            <li
              key={index}
              className={`border border-gray-200 rounded-2xl p-6 cursor-pointer shadow-md flex flex-col items-center gap-4 ${
                isDark ? "hover:shadow-gray-100" : "hover:shadow-black"
              }  transition-shadow duration-300`}
            >
              <Image
                src={item.icon}
                alt="title"
                className={`font-semibold ${isDark ? "invert" : ""}`}
              />
              <h3 className="font-semibold text-xl ">{item.title}</h3>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>

      <h4 className="my-6  font-Ovo text-left text-xl">Tools I use</h4>
      <ul className="flex items-center gap-3 sm:gap-5">
        {toolsData.map((tool, index) => (
          <li
            key={index}
            className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg p-2 cursor-pointer hover:translate-y-1 duration-500 "
          >
            <Image src={tool} alt="tool" className="w-7 sm:w-9" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Details;
