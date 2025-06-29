import { useTheme } from "@/app/context/ThemeContext";
import { assets } from "@/constants/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <>
      <div className="relative w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 ">
        <div className="absolute top-18 w-72 h-72 bg-gradient-to-tr from-pink-300 to-purple-400 rounded-full opacity-40 blur-3xl z-[-1]"></div>
        <div className="w-60 h-60 rounded-full overflow-hidden border border-gray-800 ">
          <Image
            src={assets.profile_img}
            alt="profile"
            width={240}
            height={240}
            className="rounded-full object-contain"
            priority
          />
        </div>

        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-Ovo">
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="continuous"
          >
            Hello! I'm Neetu Rai
          </motion.span>
          <Image src={assets.hand_icon} alt="wave" className="w-6" />
        </h3>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-6xl lg:text-[44px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-600 to-pink-500"
        >
          Passionate Frontend Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto font-Ovo"
        >
          I build beautiful and responsive web interfaces using modern
          technologies.
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 ">
          <a
            href="#contact"
            className="px-8 py-3 bg-black text-white rounded-full flex items-center gap-2 border border-white"
          >
            Get in Touch{" "}
            <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
          </a>
          <a
            href="/NeetuRaiCV.pdf"
            download
            className={`px-8 py-3 border border-gray-500 rounded-full flex items-center gap-2 ${
              isDark ? "bg-white text-black" : ""
            } `}
          >
            View Resume{" "}
            <Image src={assets.download_icon} alt="download" className="w-4" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
