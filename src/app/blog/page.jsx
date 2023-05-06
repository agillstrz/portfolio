"use client";
import Link from "next/link";
export default function page() {
  return (
    <div className="flex flex-col justify-center gap-4 w-full h-full items-center">
      <h1 className="lg:text-[4rem] text-[20px]  text-center font-bold tracking-wider dark:text-light2 text-dark1">
        My Blog is Coming Soon
      </h1>
      <Link href={"/"}>
        <button className="btnDark px-4 py-2 lg:text-[18px] font-bold ">
          Back To Home
        </button>
      </Link>
    </div>
  );
}
