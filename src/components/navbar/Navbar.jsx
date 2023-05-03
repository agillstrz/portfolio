"use client";
import { nav } from "@/mockup/mockup";
import Link from "next/link";
import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import DarkModeBtn from "../button/DarkModeBtn";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NavMobile from "./NavMobile";
export default function Navbar() {
  const pathname = usePathname();
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
                className={` ${
                  pathname == m.path && "w-full"
                } absolute h-[2px] w-0 transition-all duration-500 dark:group-hover:bg-text2 ease-in-out group-hover:w-full dark:bg-light2 bg-dark2`}
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
      {open && <NavMobile setOpen={setOpen} pathname={pathname} open={open} />}
    </>
  );
}
