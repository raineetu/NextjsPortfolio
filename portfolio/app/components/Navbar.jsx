import { assets } from "@/constants/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ">
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-12 rounded-full px-12 py-3 ">
          <li className="justify-between items-center ">
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        <div>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 px-8 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <Image src={assets.arrow_icon} alt="contact" className="w-3" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
