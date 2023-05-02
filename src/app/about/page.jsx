import React from "react";
import ImageAbout from "@/components/about/ImageAbout";
import Resume from "@/components/about/Resume";
import Skill from "@/components/about/Skill";
import TextAnimation from "@/animation/TextAnimation";

export default function About() {
  return (
    <>
      <div className="dark:bg-dark1 overflow-hidden lg:pb-0 pb-7  min-h-screen   bg-light2">
        <div className=" flex flex-col">
          <TextAnimation text="About Me" />
          <div className="grid lg:place-items-start place-items-center gap-y-10 grid-cols-1 lg:grid-cols-9 gap-x-16 mt-5">
            <Resume />
            <div className="col-span-3 lg:order-2 ">
              <ImageAbout />
            </div>
            <Skill />
          </div>
        </div>
      </div>
    </>
  );
}
