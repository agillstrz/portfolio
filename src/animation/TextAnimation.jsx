"use client";
import React from "react";
import { motion } from "framer-motion";
export default function TextAnimation({ component }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {component}
    </motion.div>
  );
}
