"use client";
import React from "react";
import { motion } from "framer-motion";
export default function ButtonTheme({
  icon,
  theme,
  setTheme,
  initial,
  animate,
  transition,
}) {
  return (
    <button
      className="iconNavbar text-white bg-dark1 dark:text-dark1 dark:bg-light2 flex cursor-pointer  rounded-lg p-2 gap-x-2 font-semibold  dark:hover:bg-text2 transition-all duration-150 ease-linear  items-center hover:bg-light2 hover:text-dark2 border-dark2 dark:hover:text-light2  border dark:border-transparent"
      onClick={() => setTheme(theme)}
    >
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className="lg:text-[30px]  text-[25px]  w-full h-full "
      >
        {icon}
      </motion.div>
    </button>
  );
}
