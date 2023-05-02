"use client";
import React from "react";
import { motion } from "framer-motion";
import foto from "../../assets/img/foto.jpg";
import Image from "next/image";
export default function ImageAbout() {
  return (
    <>
      <div className="  z-[10]  relative  w-[20rem] h-[27rem]    ">
        <div className=" -z-[10]  w-full h-full  p-5  rounded-2xl border-2 border-solid dark:border-light1 bg-light2 dark:bg-dark2 border-dark1 shadow-2xl ">
          <div className="absolute -right-2 lg:-right-3 dark:bg-light1 bg-dark1 top-0 w-[101%] lg:w-[103%] rounded-2xl -z-[5] h-[103%]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={`https://ik.imagekit.io/oxmhan7av/1675951596659__2_.jpg?updatedAt=1680456838555`}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
