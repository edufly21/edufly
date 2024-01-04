import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { Search, User, ShoppingCart } from "../icons";
import Cart from "./cart";

export default function MobileNav() {
  return (
    <div className="flex gap-2 md:hidden">
      <Link
        href="/search"
        className={buttonVariants({ variant: "outline", size: "icon" })}
      >
        <Search className="h-5 w-5" />
      </Link>
      <Link
        href="/account"
        className={buttonVariants({ variant: "outline", size: "icon" })}
      >
        <User className="h-5 w-5" />
      </Link>
      {/* <Link
        href="/cart"
        className={buttonVariants({ variant: "outline", size: "icon" })}
      >
        <ShoppingCart className="h-5 w-5" />
      </Link> */}
      <Cart />
    </div>
  );
}
