import { assets } from "@/constants/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 text-center mb-2 font-Ovo"
    >
      <h4 className=" text-lg ">Introduction</h4>
      <h2 className=" text-5xl ">About me</h2>

      <div className="flex flex-col lg:flex-row items-center w-full gap-20 my-20">
        <div className="w-64 sm:w-80">
          <Image
            src={assets.user_image}
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am a passionate frontend developer with a growing love for
            building clean, responsive, and user-friendly websites. While I’m
            still early in my journey, I’ve been learning and working with
            technologies like HTML, CSS, JavaScript, React, Git, Tailwind CSS,
            TypeScript, and Next.js. I enjoy turning ideas into interactive
            experiences and am always excited to take on new challenges that
            help me grow as a developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
