import React from "react";

export default function layout({ children }) {
  return (
    <>
      <div className="section overflow-hidden">
        <div className="dark:bg-dark1 overflow-hidden lg:pb-0 pb-7  min-h-screen  bg-light2">
          <div className=" flex flex-col">{children}</div>
        </div>
      </div>
    </>
  );
}
