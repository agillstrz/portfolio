"use client";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import ButtonTheme from "./ButtonTheme";
export default function DarkModeBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const currentTheme = theme == "system" ? "dark" : theme;
  return (
    <>
      {currentTheme == "dark" ? (
        <ButtonTheme
          initial={{ scale: 1 }}
          animate={{ scale: [0, 1], rotate: [90, 0] }}
          transition={{ duration: 0.4 }}
          setTheme={setTheme}
          theme={"light"}
          icon={<MdDarkMode />}
        />
      ) : (
        <ButtonTheme
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: [0, 0, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 0.4 }}
          setTheme={setTheme}
          theme={"dark"}
          icon={<MdLightMode />}
        />
      )}
    </>
  );
}
