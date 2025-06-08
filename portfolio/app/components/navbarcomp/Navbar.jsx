import { assets } from "@/constants/assets";
import Image from "next/image";
import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <>
      {/* background image */}
      <div className="fixed top-0 -z-10  translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* navbar */}
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-9 flex items-center justify-between z-50 ">
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* desktop menu */}
        <DesktopNavbar />

        {/* theme toggle and contact button */}
        <ThemeToggle />
      </nav>
    </>
  );
};

export default Navbar;
