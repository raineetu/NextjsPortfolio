import { useTheme } from "@/app/context/ThemeContext";
import { assets } from "@/constants/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <>
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 ">
        <div>
          <Image
            src={assets.profile_img}
            alt="profile"
            className="rounded-full w-44"
          />
        </div>
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-Ovo">
          Hello! I'm Neetu Rai{" "}
          <Image src={assets.hand_icon} alt="wave" className="w-6" />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[44px]">
          Passionate Frontend Developer
        </h1>
        <p className="max-w-2xl mx-auto font-Ovo">
          I build beautiful and responsive web interfaces using modern
          technologies.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 ">
          <a
            href="#contact"
            className="px-8 py-3 bg-black text-white rounded-full flex items-center gap-2 border border-white"
          >
            Get in Touch{" "}
            <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
          </a>
          <a
            href="/CVReactNeetu.pdf"
            download
            className={`px-8 py-3 border border-gray-500 rounded-full flex items-center gap-2 ${
              isDark ? "bg-white text-black" : ""
            } `}
          >
            View Resume{" "}
            <Image src={assets.download_icon} alt="download" className="w-4" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
