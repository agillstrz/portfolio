"use client";
import DivAnimation from "@/animation/DivAnimation";
import React, { useState } from "react";
import foto1 from "../assets/img/profil2.png";
import foto2 from "../assets/img/profil.png";
import { motion } from "framer-motion";
import Image from "next/image";
import MainSkills from "./MainSkills";
import { BsDoorOpenFill } from "react-icons/bs";
export default function Hero() {
  const picture = [foto1, foto2];
  const [profil, setProfil] = useState(false);
  const [skill, setSkill] = useState(false);
  const item = {
    initial: {
      scale: 0,
    },
    animate1: {
      scale: [0, 0.5, , 1, 1.2, 1],
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    animate2: {
      scale: [0, 0.5, , 1, 1.2, 1],
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };
  return (
    <div className="flex  flex-col-reverse bg-light2 dark:text-text1 text-dark1 dark:bg-dark1  lg:flex-row  lg:mt-0  justify-center bg-cover bg-center  items-center h-screen  w-full lg:px-40 lg:pt-0 pt-24  px-4  ">
      {!skill ? (
        <>
          <div className="lg:w-1/2   flex flex-col   lg:gap-y-4">
            <DivAnimation init={-150} delaying={0.2}>
              <h1 className="lg:text-5xl text-2xl mt-3 lg:mt-0 tracking-normal leading-tight">
                <span className="lg:text-2xl block">Hello👋</span>
                <span className="lg:text-3xl ">i'am </span>
                <span className="font-extrabold text-dark1 dark:text-text1 ">
                  Muhammad Agil
                </span>
              </h1>
            </DivAnimation>
            <DivAnimation init={-150} delaying={0.3}>
              <p className="text-[14px] lg:text-[15px]">
                A skilled web developer with knowledge of various web
                development technologies such as React.js and Laravel.
                Experienced in developing responsive and working collaboratively
                with teams to achieve project goals.
              </p>
            </DivAnimation>
            <DivAnimation init={-150} delaying={0.4}>
              <div className="flex gap-x-2 mt-5 lg:mt-0 ">
                <a
                  target={"_blank"}
                  href="https://drive.google.com/file/d/1iQLugQuR8-68M-oXe399vI09PaMG-Bea/view?usp=sharing"
                  className="btnDark px-4 py-2 lg:text-[18px] font-bold"
                >
                  Resume
                </a>

                <form
                  action="mailto:agillstrz@gmail.com"
                  method="post"
                  enctype="text/plain"
                >
                  <button className="btnDark px-4 py-2 lg:text-[18px] font-bold">
                    Contact Me
                  </button>
                </form>
                <button
                  onClick={() => setSkill(true)}
                  className="btnDark px-4 py-2 lg:text-[18px] font-bold"
                >
                  Main Skills
                </button>
              </div>
            </DivAnimation>
          </div>
          <div className="lg:w-1/2  flex justify-center px-10  items-center">
            <div
              onClick={() => setProfil(!profil)}
              className="p-2 border-2 border-solid dark:border-light2 border-dark2  bg-text2   lg:w-72 flex justify-center relative items-center w-60 h-60 lg:h-72 rounded-full"
            >
              {profil ? (
                <motion.div
                  variants={item}
                  initial="initial"
                  animate={"animate1"}
                >
                  <Image
                    className="h-full w-full rounded-full cursor-pointer "
                    src={picture[0]}
                  />
                </motion.div>
              ) : (
                <motion.div
                  variants={item}
                  initial="initial"
                  animate={"animate2"}
                >
                  <Image
                    className="h-full w-full rounded-full cursor-pointer "
                    src={picture[1]}
                  />
                </motion.div>
              )}
            </div>
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <MainSkills />
          <button
            onClick={() => setSkill(false)}
            className="btnDark px-2 py-3 lg:mt-0 mt-5 flex  items-center"
          >
            <BsDoorOpenFill className="lg:text-3xl text-2xl" />
            BACK
          </button>
        </motion.div>
      )}
    </div>
  );
}
