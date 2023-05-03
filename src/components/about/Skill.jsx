"use client";
import { SKILLS } from "@/mockup/mockup";
import { motion } from "framer-motion";
export default function Skill() {
  return (
    <>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="col-span-3 order-3 w-full"
      >
        <>
          {" "}
          <p className="lg:text-[20px] text-[22px] text-center tracking-widest font-bold ">
            Skills
          </p>
          <div className="flex w-full mt-5 lg:mt-0 flex-wrap gap-3 lg:gap-5 justify-center">
            {SKILLS.map((m, index) => (
              <div
                key={index}
                className="w-full py-2 h-auto justify-center shadow-xl rounded-lg bg-light1 dark:bg-dark2 px-2 items-center gap-5 flex"
              >
                <div className="w-[30%">{m.tahun}</div>
                <div className="w-[70%] flex flex-wrap gap-x-5 gap-y-1  ">
                  {m.skill.map((nameSkill, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      {" "}
                      <img
                        key={index}
                        className="lg:h-8 w-8 h-8 lg:w-8 "
                        src={nameSkill.img}
                        alt=""
                      />
                      <span className="w-auto group-hover:scale-100 z-[99]  left-1/2 scale-0 transition-all duration-150  px-1 -translate-x-1/2 text-center bg-light1 dark:bg-dark2 rounded-lg text-[10px] absolute py-1">
                        {nameSkill.nama}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      </motion.div>
    </>
  );
}
