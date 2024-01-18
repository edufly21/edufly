"use client";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils/shadcn-ui";
import { usePreventScroll } from "@/hooks/use-prevent-scroll";
import { Button } from "../ui/button";
import { Close, Menu as MenuIcon } from "../icons";
import { ModeToggle } from "../shared/mode-toggle";
import { MainNavItem } from "@/types";
// import { MainNavItem } from "@/types";

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
  handleClose?: () => void;
}

const MenuContent = ({ items, handleClose, children }: MobileNavProps) => {
  usePreventScroll();
  return (
    <div
      onClick={handleClose}
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md  md:hidden bg-glassmorphism backdrop-blur-sm"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md animate-in slide-in-from-bottom-80">
        <div className=" flex gap-3  justify-between items-center ">
          <span className="font-semibold px-2">Menu</span>
          <ModeToggle />
        </div>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}

        <nav>
          <Link
            href="/sign-in"
            className={cn(
              "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
            )}
          >
            Sign in
          </Link>
        </nav>
      </div>
    </div>
  );
};

export function Menu() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  return (
    <>
      <Button
        variant="outline"
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        size="icon"
        aria-label="Toggle mobile menu"
      >
        {showMobileMenu ? (
          <Close className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>
      {showMobileMenu && (
        <MenuContent
          items={[
            { title: "Home", href: "/" },
            { title: "Products", href: "/products" },
            { title: "Blog", href: "/blog" },
          ]}
          handleClose={() => setShowMobileMenu(false)}
        ></MenuContent>
      )}
    </>
  );
}
