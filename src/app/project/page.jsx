"use client";
import React, { useState } from "react";
import TextAnimation from "@/animation/TextAnimation";
import { TfiLayoutColumn2Alt, TfiLayoutColumn3Alt } from "react-icons/tfi";
import { RiArrowGoBackFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { project } from "@/mockup/mockup";
import CardProject from "@/components/card/CardProject";
import ButtonCol from "@/components/button/ButtonCol";
export default function Project() {
  const [col, setCol] = useState(1);
  const parrent = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.08,
      },
    },
  };
  const child = {
    initial: {
      opacity: 0,
      y: 50,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      {/* <TransitionAnimation /> */}
      <div className=" section   ">
        <div className=" overflow-hidden  ">
          <div className="relative  mb-5 lg:mb-10 ">
            {" "}
            <TextAnimation text="Projects" />
            <ButtonCol col={col} setCol={setCol} />
          </div>
          <div
            className={`flex justify-center gap-y-4  lg:gap-4 flex-row flex-wrap w-full ${
              col === 1
                ? "flex-col "
                : col === 2
                ? "lg:gap-x-5 lg:px-20 gap-x-1"
                : "gap-x-5 "
            } `}
          >
            {project.map((m, index) => (
              <div key={index}>
                <CardProject data={m} index={index} col={col} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
