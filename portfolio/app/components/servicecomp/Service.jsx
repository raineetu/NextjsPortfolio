import React from "react";
import ServiceDetails from "./ServiceDetails";
import SectionHeader from "../commoncomp/SectionHeader";

const Service = () => {
  return (
    <div className="w-full px-[12%] scroll-mt-5 text-center mb-2 font-Ovo">
      <SectionHeader
        id="services"
        smallHeading="What I Offer"
        mainHeading="My Services"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magnam
        neque ipsam, beatae quas dolore sit nisi voluptates doloremque modi ab
        earum veritatis facilis, laboriosam, aut nihil soluta minima quia!"
      />
      <ServiceDetails />
    </div>
  );
};

export default Service;
