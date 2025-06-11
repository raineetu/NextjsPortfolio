import React from "react";
import { assets } from "@/constants/assets";
import Image from "next/image";

const MobileNavbar = ({ isOpen, closeMenu }) => {
  return (
    <ul
      className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 right-0 w-64 shadow-lg z-50 h-screen bg-rose-50 transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="absolute top-5 right-5" onClick={closeMenu}>
        <Image
          src={assets.close_black}
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
