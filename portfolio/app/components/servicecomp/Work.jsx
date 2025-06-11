import React from "react";
import SectionHeader from "../commoncomp/SectionHeader";

const Work = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20 text-center mb-2 font-Ovo">
      <SectionHeader
        id="work"
        smallHeading="My portfolio"
        mainHeading="My latest work"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magnam
        neque ipsam, beatae quas dolore sit nisi voluptates doloremque modi ab
        earum veritatis facilis, laboriosam, aut nihil soluta minima quia!"
      />
    </div>
  );
};

export default Work;
