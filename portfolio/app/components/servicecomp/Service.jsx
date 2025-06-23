import React from "react";
import ServiceDetails from "./ServiceDetails";
import SectionHeader from "../commoncomp/SectionHeader";

const Service = () => {
  return (
    <div
      id="skills"
      className="w-full px-[12%] py-10 scroll-mt-25 text-center mb-2 font-Ovo"
    >
      <SectionHeader
        id="services"
        smallHeading="What I Offer"
        mainHeading="My Services"
        description="I specialize in creating responsive, user-friendly, and accessible web interfaces using modern technologies like React, Next.js, and Tailwind CSS. From building sleek landing pages to developing complex web applications, I focus on clean code, performance optimization, and delivering intuitive user experiences tailored to your business needs."
      />
      <ServiceDetails />
    </div>
  );
};

export default Service;
