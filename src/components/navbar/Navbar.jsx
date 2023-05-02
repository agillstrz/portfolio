"use client";
import { nav } from "@/mockup/mockup";
import Link from "next/link";
import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import DarkModeBtn from "../button/DarkModeBtn";
import { motion } from "framer-motion";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="absolute  hidden justify-between lg:py-4 py-2 items-center lg:flex w-full bg-light2 dark:bg-dark1   content border-b-2  border-light1 dark:border-dark2 shadow-sm ">
        <ul className="flex gap-x-5 items-center">
          {nav.map((m, index) => (
            <Link
              href={m.path}
              key={index}
              className="  hover:text-text2 relative group rounded-lg py-2 font-bold lg:text-lg "
            >
              {m.name}
              <div
                className={` absolute h-[2px] w-0 transition-all duration-500 dark:group-hover:bg-text2 ease-in-out group-hover:w-full dark:bg-light2 bg-dark2`}
              ></div>
            </Link>
          ))}
        </ul>

        <div className=" flex gap-x-2 items-center text-[14px] lg:text-lg text-text dark:text-text1">
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/muhammad-agil-5b17161b9/"
            className="iconNavbar"
          >
            <AiFillLinkedin className="lg:text-[30px] text-[18px]" /> Connect
          </a>
          <a
            target={"_blank"}
            href="https://github.com/agillstrz"
            className="iconNavbar"
          >
            <AiFillGithub className="lg:text-[30px] text-[18px]" /> Follow
          </a>

          <DarkModeBtn />
        </div>
      </div>
      <div className="absolute z-[9999] lg:hidden justify-between lg:py-4 py-2 items-center flex w-full bg-light2 dark:bg-dark1   content border-b-2  border-text dark:border-main shadow-sm ">
        <div onClick={() => setOpen(!open)} className="flex flex-col  gap-y-1">
          <div
            className={`h-1 w-7 transition-all duration-300 ease-in-out bg-dark1    dark:bg-light1 ${
              open ? " translate-y-2 rotate-45" : ""
            } `}
          ></div>
          <div
            className={`h-1 transition-all duration-300 ease-in-out bg-dark1  dark:bg-light1 ${
              open ? "w-0" : "w-7 "
            } `}
          ></div>
          <div
            className={`h-1 w-7  transition-all duration-300 ease-in-out bg-dark1  dark:bg-light1 ${
              open ? " -rotate-45 -translate-y-2" : "rotate-0"
            } `}
          ></div>
        </div>
        <DarkModeBtn />
      </div>
      {open && (
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
                    className={` absolute h-[2px] w-0 transition-all duration-200 ease-in-out dark:bg-dark2 bg-light2`}
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
      )}
    </>
  );
}
