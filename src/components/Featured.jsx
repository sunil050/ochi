import { motion } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const [isHoveringFyde, setHoveringFyde] = useState(false);
  const [isHoveringVise, setHoveringVise] = useState(false);
  return (
    <div
      data-scroll
      data-scroll-offset="0, 100%"
      data-scroll-speed="1.5"
    >
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => setHoveringFyde(true)}
            onMouseLeave={() => setHoveringFyde(false)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex left-full overflow-hidden text-[#CDEA68] font-semibold text-[150px] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-['Test_Founders_Grotesk_X_Condensed']">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHoveringFyde ? { y: "0" } : { y: "100%" }}
                  transition={{
                    ease: [0.34, 1.56, 0.64, 1],
                    delay: index * 0.08,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              ></img>
            </div>
          </div>
          <div
            onMouseEnter={() => setHoveringVise(true)}
            onMouseLeave={() => setHoveringVise(false)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden right-full text-[#CDEA68] font-semibold text-[150px] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-['Test_Founders_Grotesk_X_Condensed']">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHoveringVise ? { y: "0" } : { y: "100%" }}
                  transition={{
                    ease: [0.34, 1.56, 0.64, 1],
                    delay: index * 0.08,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden bg-zinc-600">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
