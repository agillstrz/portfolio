import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="lg:mt-0 lg:px-40 mt-10 px-4 py-5 lg:py-8  lg:h-44 justify-center  w-full dark:bg-main  border-t-2 dark:border-dark2 border-light1 bg-light2   flex flex-col items-center">
      <div className="flex items-center lg:text-6xl text-4xl">
        <AiFillLinkedin className="" />
        <AiFillGithub />
        <AiFillFacebook />
        <AiFillInstagram />
      </div>
      <span className="lg:text-lg text-md pt-2">
        2023 © all rights reserved
      </span>
    </div>
  );
}

export default Footer;
