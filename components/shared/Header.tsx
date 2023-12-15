import React from "react";
import { sansita } from "@/app/fonts";
import Link from "next/link";
import { BookImage, GanttChartSquare, ShoppingCart, User } from "lucide-react";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="px-4 md:px-6 py-2.5 md:py-3.5">
      <div className="flex justify-between">
        <Link href="/">
          <h1
            className={`${sansita.className} text-5xl text-orange-600 font-bold`}
          >
            {" "}
            {process.env.BRANDNAME}
          </h1>
        </Link>
        <div className="hidden md:flex gap-7">
          <Link href="signin" className="flex gap-2">
            <User className="h-6 w-6" />
            <p>Sign in</p>
          </Link>
          <Link href="/projects" className="flex gap-2">
            <GanttChartSquare className="h-6 w-6" />
            <p>Projects</p>
          </Link>
          <Link href="/pictures" className="flex gap-2">
            <BookImage className="h-6 w-6" />
            <p>Pictures</p>
          </Link>
          <Link href="/cart" className="flex gap-2">
            <ShoppingCart className="h-6 w-6" />
            <p>Cart</p>
          </Link>
        </div>
      </div>

      <div className="hidden md:block mt-5">
        <NavMenu />
      </div>
    </header>
  );
}
