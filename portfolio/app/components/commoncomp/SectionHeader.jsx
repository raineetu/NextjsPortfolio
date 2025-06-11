import React from "react";

const SectionHeader = ({ id, smallHeading, mainHeading, description }) => {
  return (
    <div id={id}>
      <h4 className=" text-xl ">{smallHeading}</h4>
      <h2 className=" text-4xl ">{mainHeading}</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
