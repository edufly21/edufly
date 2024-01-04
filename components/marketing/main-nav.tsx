import React from "react";
import Link from "next/link";
import { BookImage, GanttChartSquare, ShoppingCart, User } from "lucide-react";

export default function mainNav() {
  return (
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
  );
}
