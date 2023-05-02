import React from "react";

export default function layout({ children }) {
  return (
    <>
      <div className="section overflow-hidden">{children}</div>
    </>
  );
}
