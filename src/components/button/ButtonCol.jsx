import React from "react";
import { motion } from "framer-motion";
import { TfiLayoutColumn2Alt, TfiLayoutColumn3Alt } from "react-icons/tfi";
export default function ButtonCol({ setCol, col }) {
  return (
    <div className="flex  justify-between absolute left-0 w-full top-1/2  -translate-y-1/2 items-center">
      <div></div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex  gap-x-4 items-center"
      >
        <div
          onClick={() => setCol(1)}
          className={`lg:h-[40px] h-[30px] w-4 lg:mr-2  ${
            col === 1
              ? "rotate-180  bg-dark1 dark:bg-light2"
              : "rotate-90   dark:bg-dark2 bg-light1"
          } transition-all duration-200 ease-in-out cursor-pointer `}
        />
        <TfiLayoutColumn2Alt
          onClick={() => setCol(2)}
          className={` ${
            col === 2
              ? "rotate-0 text-dark1 dark:text-light2"
              : "-rotate-90 dark:text-dark2 text-light1 "
          } lg:text-[40px] text-[30px] transition-all duration-200 ease-in-out cursor-pointer `}
        />
        <TfiLayoutColumn3Alt
          onClick={() => setCol(3)}
          className={`hidden lg:block ${
            col === 3
              ? "rotate-0 text-dark1 dark:text-light2"
              : "-rotate-90 dark:text-dark2 text-light1 "
          } text-[40px] transition-all duration-200 ease-in-out cursor-pointer `}
        />
      </motion.div>
    </div>
  );
}
