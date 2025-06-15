import { useTheme } from "@/app/context/ThemeContext";
import { Home, User, Settings, Briefcase, Mail } from "lucide-react";
import React from "react";

const NavItems = ({ href, icon: Icon, label }) => (
  <li className="shrink-0 whitespace-nowrap">
    <a className="font-Ovo" href={href}>
      <span className="flex items-center gap-2 transition-all duration-200 hover:scale-105">
        <Icon size={18} /> {label}
      </span>
    </a>
  </li>
);

const DesktopNavbar = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ul
      className={`hidden md:flex items-center gap-6 lg:gap-12 rounded-full px-8 py-3 shadow-sm bg-opacity-50 ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <NavItems href="#home" icon={Home} label="Home" />
      <NavItems href="#about" icon={User} label="About" />
      <NavItems href="#skills" icon={Settings} label="Skills" />
      <NavItems href="#projects" icon={Briefcase} label="Projects" />
      <NavItems href="#contact" icon={Mail} label="Contact" />
    </ul>
  );
};

export default DesktopNavbar;
