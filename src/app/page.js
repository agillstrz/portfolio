import Hero from "@/components/Hero";
import React from "react";

export default function page() {
  return (
    <>
      {/* <TransitionAnimation /> */}
      <div className="flex flex-col gap-y-5">
        <Hero />
      </div>
    </>
  );
}