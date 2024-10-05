import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll-section
      data-scroll
      data-scroll-offset="-100%, -100%"
      data-scroll-speed="1"
      data-scroll-position="top"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap items-center  h-[370px]">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className='text-[500px] font-["Test_Founders_Grotesk_X_Condensed"] uppercase pt-[1vw] mb-[100px] mt-7 font-semibold leading-none'
        >
          &nbsp;We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className='text-[500px] font-["Test_Founders_Grotesk_X_Condensed"] uppercase pt-[1vw] mb-[100px] mt-7 font-semibold leading-none'
        >
          &nbsp;We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
