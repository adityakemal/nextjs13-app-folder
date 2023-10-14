"use client";
import { decrement, increment } from "@/app/home.reducer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function HomeSection() {
  const { count } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button
        className="p-5 text-[20px] bg-red-400"
        onClick={() => dispatch(increment())}
      >
        Add +
      </button>
      <br />
      <button
        className="p-5 text-[20px] bg-red-400"
        onClick={() => dispatch(decrement())}
      >
        min -
      </button>
    </div>
  );
}
