"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function pageLogin() {
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    console.log(data);
    axios
      .post("api/auth/login", data)
      .then((response) => {
        router.push("/");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
        <h2 className="p-3 text-3xl font-bold text-pink-400">hello!</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
        <h3 className="text-xl font-semibold text-blue-400 pt-2">Sign In!</h3>
        {/* Inputs */}
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleLogin}
        >
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            name="password"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Password"
          />
          <button
            type="submit"
            // onClick={handleLogin}
            className="rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in"
          >
            Sign In
          </button>
        </form>
        <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
        <p className="text-blue-400 mt-4 text-sm">Don't have an account?</p>
        <Link href="/register">
          <p className="text-blue-400 mb-4 text-sm font-medium cursor-pointer">
            Create a New Account?
          </p>
        </Link>
      </div>
    </div>
  );
}
