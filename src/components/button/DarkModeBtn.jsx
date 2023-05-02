"use client";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
export default function DarkModeBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const currentTheme = theme == "system" ? "light" : theme;
  return (
    <>
      <div className="iconNavbar text-white bg-dark1 dark:text-dark1 dark:bg-light2 lg:flex">
        {currentTheme == "dark" ? (
          <button onClick={() => setTheme("light")}>
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [0, 1], rotate: [90, 0] }}
              transition={{ duration: 0.4 }}
            >
              <MdDarkMode className={`lg:text-[30px] text-[25px]`} />
            </motion.div>
          </button>
        ) : (
          <button onClick={() => setTheme("dark")}>
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: [0, 0, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 0.4 }}
            >
              <MdLightMode className={`lg:text-[30px]  text-[25px] `} />
            </motion.div>
          </button>
        )}
      </div>
    </>
  );
}
