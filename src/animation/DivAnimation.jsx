"use client";
import { motion } from "framer-motion";

export default function DivAnimation({ init, children, delaying }) {
  return (
    <motion.div
      initial={{ x: init, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: delaying }}
    >
      {children}
    </motion.div>
  );
}
