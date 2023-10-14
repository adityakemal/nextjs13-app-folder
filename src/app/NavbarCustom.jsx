import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function NavbarCustom() {
  const pathname = usePathname();
  const router = useRouter();

  const handlelogout = () => {
    router.push("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 h-[60px] bg-blue-400">
      <span>logo</span>
      <ul className="m-0 p-0 flex items-center ">
        <li
          className={` ml-3 ${pathname === "/" ? "bg-red-400" : "bg-inherit"}`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={` ml-3 ${
            pathname === "/profile" ? "bg-red-400" : "bg-inherit"
          }`}
        >
          <Link href="/profile">Profile</Link>
        </li>
        <li
          className={` ml-3 ${
            pathname === "/about" ? "bg-red-400" : "bg-inherit"
          }`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={` ml-3 ${
            pathname === "/login" ? "bg-red-400" : "bg-inherit"
          }`}
        >
          <Link href="/login">Login</Link>
        </li>
        <li
          className={` ml-3 ${
            pathname === "/product" ? "bg-red-400" : "bg-inherit"
          }`}
        >
          <Link href="/product">Product</Link>
        </li>
      </ul>
    </nav>
  );
}
