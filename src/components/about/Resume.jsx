"use client";

import { motion } from "framer-motion";
export default function Resume() {
  return (
    <>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="col-span-3 lg:order-first order-2"
      >
        <p className="lg:text-[20px]  justify-center hidden lg:flex text-[22px] text-center tracking-widest font-bold ">
          Resume
        </p>
        <p className="lg:text-[17px] font-medium">
          "I am an Information Systems student with a passion for frontend
          development. I have skills in HTML, CSS, JavaScript, React JS, and a
          basic understanding of API development using Laravel. I underwent
          training to become a frontend developer at Altera Academy and
          collaborated with my fellow training team members to create a complex
          website. I am also actively involved as the person in charge of the
          Information Systems Laboratory, which has helped me to develop a
          professional work ethic. I am currently seeking a starting position to
          further learn, broaden my skills, and apply my knowledge"
        </p>
      </motion.div>
    </>
  );
}
