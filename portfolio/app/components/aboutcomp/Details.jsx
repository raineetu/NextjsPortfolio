import { infoList } from "@/constants/assets";
import Image from "next/image";
import React from "react";

const Details = () => {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {infoList.map((item, index) => {
          return (
            <li
              key={index}
              className="border border-gray-200 rounded-2xl p-6 cursor-pointer shadow-xl flex flex-col items-center gap-4 hover:shadow-2xl transition-shadow duration-300"
            >
              <Image src={item.icon} alt="title" className="font-semibold " />
              <h3 className="font-semibold text-xl ">{item.title}</h3>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Details;
