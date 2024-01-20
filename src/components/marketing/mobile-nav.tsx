import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { Button, buttonVariants } from "../ui/button";
import { Search, User, ShoppingCart } from "../icons";
import Cart from "./cart";
import { getCurrentUser } from "@/lib/utils/payload/get-current-user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logout from "../auth/logout";

export default async function MobileNav() {
  const { user } = await getCurrentUser(cookies());

  return (
    <div className="flex gap-2 md:hidden">
      {/* <Link
        href="/search"
        className={buttonVariants({ variant: "outline", size: "icon" })}
      >
        <Search className="h-5 w-5 " />
        <span className="sr-only">Search</span>
      </Link>*/}
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only"> User </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/dashboard">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Logout />
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
