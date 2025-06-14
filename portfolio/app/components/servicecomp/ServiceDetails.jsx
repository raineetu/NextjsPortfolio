import { useTheme } from "@/app/context/ThemeContext";
import { assets, serviceData } from "@/constants/assets";
import Image from "next/image";
import React from "react";

const ServiceDetails = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
      {serviceData.map(({ icon, title, description, link }, index) => (
        <div
          key={index}
          className={`border rounded-lg shadow-xl p-4 cursor-pointer flex flex-col items-center ${
            isDark ? "border-gray-900 " : "border-gray-200 "
          } `}
        >
          <Image src={icon} alt="icon" className="w-10 " />
          <h3
            className={`text-lg my-4 ${
              isDark ? "text-white" : "text-gray-400"
            } `}
          >
            {title}
          </h3>
          <p
            className={`text-sm ${
              isDark ? "text-white" : "text-gray-600"
            } leading-5`}
          >
            {description}
          </p>
          <a href={link} className="flex items-center gap-2 text-sm mt-5">
            Read more
            <Image src={assets.right_arrow} alt="arrow" className="w-4" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ServiceDetails;
