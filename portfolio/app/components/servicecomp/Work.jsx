import React from "react";
import { assets, workData } from "@/constants/assets";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20 text-center mb-2 font-Ovo"
    >
      <h4 className=" text-xl ">My portfolio</h4>
      <h2 className=" text-4xl ">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit magni
        assumenda labore adipisci? Beatae ipsum, distinctio praesentium, quia
        nam reiciendis recusandae, explicabo nulla sapiente dolore natus omnis
        non. Asperiores, impedit.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 my-10">
        {workData.map((work, index) => (
          <div
            key={index}
            className="relative h-64 bg-cover bg-center rounded-md overflow-hidden group"
            style={{ backgroundImage: `url(${work.bgImage})` }}
          >
            <div
              className={` w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-300 ${
                isDark ? "bg-gray-900" : "bg-white"
              }`}
            >
              <div>
                <h2 className="font-semibold text-lg">{work.title}</h2>
                <p className="text-sm ">{work.description}</p>
              </div>
              <div
                className={`border rounded-full p-2 aspect-square duration-300 cursor-pointer ${
                  isDark ? "bg-white" : ""
                }`}
              >
                <Image
                  src={assets.send_icon}
                  alt="icon"
                  className="w-5 h-5"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href=""
        className="w-max border border-gray-400 py-2 flex items-center justify-center gap-2 rounded-full px-10 mx-auto my-10 text-lg hover:-translate-y-2 duration-500"
      >
        Show More
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Work;
