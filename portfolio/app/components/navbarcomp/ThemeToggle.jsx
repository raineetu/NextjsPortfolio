import React from "react";
import { assets } from "@/constants/assets";
import Image from "next/image";

const ThemeToggle = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <button>
          <Image
            src={assets.moon_icon}
            alt="icon"
            className="w-5 cursor-pointer"
          />
        </button>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-3 px-8 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
        >
          Contact
          <Image src={assets.arrow_icon} alt="contact" className="w-3" />
        </a>

        <button className="block md:hidden ml-3">
          <Image
            src={assets.menu_black}
            alt="menu"
            className="w-5 cursor-pointer"
          />
        </button>
      </div>
    </>
  );
};

export default ThemeToggle;
