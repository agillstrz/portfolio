import React from "react";
import { motion } from "framer-motion";
export default function TextAnimation({ text }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:text-5xl text-4xl font-bold tracking-widest text-center"
    >
      {text}
    </motion.h1>
  );
}
