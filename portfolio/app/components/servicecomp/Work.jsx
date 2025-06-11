import React from "react";
import SectionHeader from "../commoncomp/SectionHeader";
import { assets, workData } from "@/constants/assets";
import Image from "next/image";

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
      <div className="grid grid-cols-[repeat(auto-fit, minmax(200px, 1fr))] gap-5 my-10">
        {workData.map((work, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${work.bgImage})` }}
            className="w-full max-w-sm mx-auto  bg-no-repeat bg-cover bg-center group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-300">
              <div>
                <h2>{work.title}</h2>
                <p>{work.description}</p>
              </div>

              <div>
                <Image src={assets.send_icon} alt="send_icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
