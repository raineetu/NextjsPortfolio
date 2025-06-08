import React from "react";
import { assets } from "@/constants/assets";
import Image from "next/image";

const MobileNavbar = () => {
  return (
    <>
      <ul className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 -right-0 w-64  shadow-lg z-50 h-screen bg-rose-50 transition-duration-50">
        <div className="absolute top-5 right-5">
          <Image
            src={assets.close_black}
            alt="cross"
            className="w-4 cursor-pointer"
          />
        </div>

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
    </>
  );
};

export default MobileNavbar;
