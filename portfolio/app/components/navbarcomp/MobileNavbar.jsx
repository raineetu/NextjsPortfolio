import React from "react";
import { assets } from "@/constants/assets";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";

const MobileNavbar = ({ isOpen, closeMenu }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <ul
      className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 right-0 w-64 shadow-lg z-50 h-screen  transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } ${isDark ? "bg-gray-900" : "bg-rose-50"}`}
    >
      <div className="absolute top-5 right-5" onClick={closeMenu}>
        <Image
          src={isDark ? assets.close_white : assets.close_black}
          alt="cross"
          className="w-4 cursor-pointer"
        />
      </div>

      <li onClick={closeMenu}>
        <a className="font-Ovo" href="#top">
          Home
        </a>
      </li>
      <li onClick={closeMenu}>
        <a className="font-Ovo" href="#about">
          About Me
        </a>
      </li>
      <li onClick={closeMenu}>
        <a className="font-Ovo" href="#services">
          Services
        </a>
      </li>
      <li onClick={closeMenu}>
        <a className="font-Ovo" href="#work">
          My Work
        </a>
      </li>
      <li onClick={closeMenu}>
        <a className="font-Ovo" href="#contact">
          Contact Me
        </a>
      </li>
    </ul>
  );
};

export default MobileNavbar;
