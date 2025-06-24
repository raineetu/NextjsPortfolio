import { assets, footerImage } from "@/constants/assets";
import Image from "next/image";
import React from "react";
import { useTheme } from "@/app/context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="mt-20">
      {/* Logo */}
      <div className="text-center">
        <Image
          src={isDark ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-36 mx-auto mb-2"
        />
      </div>

      {/* Email */}
      <div
        className={`w-max flex items-center gap-2 mx-auto ${
          isDark ? "text-white" : "text-gray-700"
        }`}
      >
        <Image src={assets.mail_icon} alt="mail icon" className="w-6" />
        raineetu0070@gmail.com
      </div>

      {/* Footer Bottom */}
      <div
        className={`text-center sm:flex items-center justify-between mt-12 mx-[10%] py-6 border-t border-gray-400 ${
          isDark ? "text-white" : "text-gray-600"
        }`}
      >
        <p>&copy; 2025 Neetu Rai. All rights reserved.</p>

        {/* Footer Icons */}
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          {footerImage.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                className="w-5 h-5"
              />
              <a target="_blank" rel="noopener noreferrer" href={item.url}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
