import React from "react";

const DesktopNavbar = () => {
  return (
    <>
      <ul className="hidden md:flex items-center gap-6 lg:gap-12 rounded-full px-8 py-3 bg-white shadow-sm bg-opacity-50">
        <li>
          <a className="font-Ovo" href="#top">
            Home
          </a>
        </li>
        <li className="shrink-0 whitespace-nowrap">
          <a className="font-Ovo " href="#about">
            About Me
          </a>
        </li>
        <li>
          <a className="font-Ovo" href="#services">
            Services
          </a>
        </li>
        <li className="shrink-0 whitespace-nowrap">
          <a className="font-Ovo" href="#work">
            My Work
          </a>
        </li>
        <li className="shrink-0 whitespace-nowrap">
          <a className="font-Ovo" href="#contact">
            Contact Me
          </a>
        </li>
      </ul>
    </>
  );
};

export default DesktopNavbar;
