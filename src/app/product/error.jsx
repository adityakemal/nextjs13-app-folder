"use client";
import React, { useEffect } from "react";

export default function errorPageProduct({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className=" flex h-screen w-screen justify-center items-center">
      {" "}
      <div className="">
        <h1 className="text-[60px]">ERROR PRODUCT PAGE HERE</h1>
        <button className="bg-red-400 px-3 py-2" onClick={() => reset()}>
          reset
        </button>
      </div>
    </div>
  );
}
