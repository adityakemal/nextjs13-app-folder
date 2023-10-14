"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function NavbarCustom() {
  const pathname = usePathname();
  const router = useRouter();

  const handlelogout = () => {
    router.push("/login");
  };
  const disableRoute = ["/login", "/register"];

  const routes = [
    { href: "/", label: "home" },
    { href: "/profile", label: "profile" },
    { href: "/about", label: "about" },
    { href: "/product", label: "product" },
    { href: "/login", label: "login" },
  ];

  return (
    !disableRoute.includes(pathname) && (
      <nav className="flex items-center justify-between px-6 h-[60px] bg-blue-400">
        <span>logo</span>
        <ul className="m-0 p-0 flex items-center ">
          {routes.map((res, i) => (
            <li
              key={i}
              className={`ml-3 ${
                pathname === res.href ? "bg-red-400" : "bg-inherit"
              }`}
            >
              <Link href={res.href} className="capitalize">
                {res.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
}
