import { assets } from "@/constants/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 -z-10  translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ">
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-12 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li className="justify-between items-center ">
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo " href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>

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
      </nav>
    </>
  );
};

export default Navbar;
