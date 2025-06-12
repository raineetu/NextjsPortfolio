import React from "react";
import { assets, workData } from "@/constants/assets";
import Image from "next/image";

const Work = () => {
  return <div></div>;
};

export default Work;

// <div
//     id="work"
//     className="w-full px-[12%] py-10 scroll-mt-20 text-center mb-2 font-Ovo"
//   >
//     <h4 className=" text-xl ">My portfolio</h4>
//     <h2 className=" text-4xl ">My latest work</h2>
//     <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
//       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit magni
//       assumenda labore adipisci? Beatae ipsum, distinctio praesentium, quia
//       nam reiciendis recusandae, explicabo nulla sapiente dolore natus omnis
//       non. Asperiores, impedit.
//     </p>
//     <div className="grid grid-cols-[repeat(auto-fit, minmax(200px, 1fr))] gap-5 my-10">
//       {console.log(workData)}{" "}
//       {workData.map((work, index) => (
//         <div
//           key={index}
//           style={{ backgroundImage: `url(${work.bgImage})` }}
//           className="w-full max-w-sm mx-auto  bg-no-repeat bg-cover bg-center group"
//         >
//           <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-300">
//             <div>
//               <h2>{work.title}</h2>
//               <p>{work.description}</p>
//             </div>

//             {/* <div>
//               <Image src={assets.send_icon} alt="icon" className="w-5" />
//             </div> */}
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
