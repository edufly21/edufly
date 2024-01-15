import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { Search, User, ShoppingCart } from "../icons";
import Cart from "../shared/cart";
import { getCurrentUser } from "@/lib/utils/payload/get-current-user";
import { cookies } from "next/headers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function MobileNav() {
  const { user } = await getCurrentUser(cookies());

  return (
    <div className="flex  md:hidden gap-2">
      <Link
        href="/search"
        className={buttonVariants({ variant: "outline", size: "icon" })}
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Link>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">User</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              {" "}
              <Link href="/dashboard">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              {" "}
              <Link href="/logout">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          href="/sign-in"
          className={buttonVariants({ variant: "outline", size: "icon" })}
        >
          <User className="h-5 w-5" />
          <span className="sr-only">Sign in</span>
        </Link>
      )}

      <Cart />
    </div>
  );
}
