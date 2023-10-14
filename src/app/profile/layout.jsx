import React from "react";
import SideBar from "./SideBar";

export default function layoutProfile({ children }) {
  return (
    <div className="flex w-full">
      <SideBar />
      <div>{children}</div>
    </div>
  );
}
