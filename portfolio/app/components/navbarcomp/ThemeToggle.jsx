import React, { useState } from "react";
import { assets } from "@/constants/assets";
import Image from "next/image";
import MobileNavbar from "./MobileNavbar";
import { useTheme } from "@/app/context/ThemeContext";

const ThemeToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="hidden md:block">
          <Image
            src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
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

        {/* Menu Button for Mobile */}
        <button className="block md:hidden ml-3" onClick={openMenu}>
          <Image
            src={assets.menu_black}
            alt="menu"
            className="w-5 cursor-pointer"
          />
        </button>
      </div>

      {/* Mobile Navbar */}
      <MobileNavbar isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
};

export default ThemeToggle;
