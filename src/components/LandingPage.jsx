import { motion } from "framer-motion";
import React from "react";
import { FaArrowUp, FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
      <div  data-scroll-section data-scroll data-scroll-offset="-30%, -100%" data-scroll-speed="-1.6" data-scroll-position="top" data-scroll-section-inview className="relative w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.87, 0, 0.13, 1], duration: 1 }}
                    className="mr-5 mb-[.5vw] w-[8vw] rounded-md h-[5.7vw] overflow-hidden relative bg-green-500"
                  >
                    <img
                      className="w-full h-full bg-cover "
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    ></img>
                  </motion.div>
                )}
                <h1 className='pt-[.5vw] mb-[1vw] uppercase text-[9vw] leading-[.6] font-["Test_Founders_Grotesk_X_Condensed"] font-medium' data-scroll="" data-scroll-call="split" data-ignore-animation="">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {["For public and private companies", "For the first pitch to IPO"].map(
          (item, index) => (
            <p className="text-md font-light tracking-tighter leading-none">
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light text-md uppercase">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 font-light rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
