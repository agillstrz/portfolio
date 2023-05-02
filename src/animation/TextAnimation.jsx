"use client";
import React from "react";
import { motion } from "framer-motion";
export default function TextAnimation({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="lg:text-5xl text-4xl font-bold  text-center"> {text}</h1>
    </motion.div>
  );
}
