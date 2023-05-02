import React from "react";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-10 h-10  dark:border-light2 dark:border-t-dark1 border-dark1  border-t-4 border-t-light1 animate-spin border-2  rounded-full"></div>
    </div>
  );
}
