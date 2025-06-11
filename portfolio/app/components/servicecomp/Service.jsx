import React from "react";
import ServiceDetails from "./ServiceDetails";

const Service = () => {
  return (
    <div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20 text-center mb-2 font-Ovo"
    >
      <h4 className=" text-xl ">What I Offer</h4>
      <h2 className=" text-4xl ">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a frontend developer with a passion for creating engaging and
      </p>

      <ServiceDetails />
    </div>
  );
};

export default Service;
