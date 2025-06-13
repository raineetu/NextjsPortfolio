import { assets } from "@/constants/assets";
import Image from "next/image";
import React from "react";
import { Github, Linkedin, Facebook } from "lucide-react"; // ✅ Import Lucide icons

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2" />
      </div>

      <div className="w-max flex items-center gap-2 mx-auto text-gray-700">
        <Image src={assets.mail_icon} alt="mail icon" className="w-6" />
        raineetu0070@gmail.com
      </div>

      <div className="text-center sm:flex items-center justify-between mt-12 mx-[10%] py-6 border-t border-gray-400 text-gray-600">
        <p>&copy; 2025 Neetu Rai. All rights reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li className="flex items-center gap-2">
            <Github className="w-5 h-5" />
            <a target="_blank" href="https://github.com/raineetu">
              GitHub
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Linkedin className="w-5 h-5" />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/neetu-rai-6a073b321/"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Facebook className="w-5 h-5" />
            <a target="_blank" href="https://www.facebook.com/rai.neetu.33">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
