"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImCross } from "react-icons/im";
export default function CardSkill({ skill }) {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <div className="lg:h-44 lg:w-56 cursor-pointer lg:hover:scale-105 transition-all duration-100 ease-out active:scale-100 shadow-md bg-light1 dark:bg-dark1  text-dark1 dark:text-light2  border  rounded-lg flex flex-col justify-between p-3">
        <motion.div
          layoutId={skill.id}
          onClick={() => setSelectedId(skill.id)}
          className="w-full h-full"
        >
          <div className="flex  w-full justify-center gap-x-3">
            <img className="h-24" src={skill.img} alt="" />
          </div>
          <h1 className="font-bold capitalize text-lg text-center">
            {skill.name}
          </h1>
          <h2 className="text-center">{skill.level}</h2>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="bg-black/20 overflow-hidden  top-0 flex justify-center items-center left-0 p-10 backdrop-blur-sm fixed w-screen h-screen"
            layoutId={selectedId}
          >
            <div className="bg-light1 dark:bg-dark1 items-center relative dark:text-light2 text-dark1 rounded-lg w-[35rem] p-5 h-[18rem] flex flex-col ">
              <div
                className="bg-center bg-no-repeat bg-contain bg-light2 dark:bg-dark2  h-[60%] w-full rounded-lg  "
                style={{ backgroundImage: `url(${skill.img})` }}
              ></div>
              <div className="mt-2">
                <h1 className="font-bold text-lg text-center">{skill.name}</h1>
                <p className="text-md">{skill.description}</p>
              </div>
              <motion.button
                className="absolute -top-8 -right-8  p-3 bg-light1 dark:bg-dark1 rounded-full"
                onClick={() => setSelectedId(null)}
              >
                <ImCross className="text-lg" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
