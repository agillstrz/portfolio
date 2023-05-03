import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import { nav } from "@/mockup/mockup";
export default function NavMobile({ open, setOpen, pathname }) {
  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 1.1, 1], opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="h-screen top-0 z-[500] flex items-center justify-center right-0 bottom-0 left-0 fixed dark:bg-dark1/50 backdrop-blur-[2px] w-full"
      >
        <div className="dark:bg-light1/80 bg-dark2/90 dark:text-dark1  text-light2 border-2 border-text2 rounded-lg w-[90%] h-[70%] flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-y-1 font-semibold text-center text-lg ">
            {nav.map((m, index) => (
              <Link
                key={index}
                href={m.path}
                className="relative tracking-widest group"
                onClick={() => setOpen(!open)}
              >
                {m.name}
                <div
                  className={`${
                    pathname == m.path && "w-full font-bold"
                  } absolute h-[2px] w-0 transition-all duration-200 ease-in-out dark:bg-dark2 bg-light2`}
                ></div>
              </Link>
            ))}
          </ul>
          <div className="flex mt-5 dark:text-light2   text-dark1 gap-x-2">
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/muhammad-agil-5b17161b9/"
              className="flex cursor-pointer  dark:bg-dark2  rounded-lg p-2 gap-x-2 font-semibold  dark:hover:bg-text2 transition-all duration-150 ease-linear  items-center dark:hover:bg-main/80 bg-light2"
            >
              <AiFillLinkedin className="text-[18px]" /> Connect
            </a>
            <a
              target={"_blank"}
              href="https://github.com/agillstrz"
              className="flex cursor-pointer  dark:bg-dark2  rounded-lg p-2 gap-x-2 font-semibold  dark:hover:bg-text2 transition-all duration-150 ease-linear  items-center dark:hover:bg-main/80 bg-light2"
            >
              <AiFillGithub className="text-[18px]" /> Follow
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
