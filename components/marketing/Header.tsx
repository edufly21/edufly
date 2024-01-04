import React from "react";
import NavMenu from "@/components/marketing/NavMenu";

import { siteConfig } from "@/config/site";
import LogoWithName from "../shared/LogoWithName";
import { Menu } from "./menu";
import MobileNav from "./mobile-nav";
import Link from "next/link";
import { User, List, Image as ImageIcon } from "../icons";
import Cart from "./cart";

export default function Header() {
  return (
    <header className=" px-4 md:px-6 py-2.5 md:py-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <div>
            <Menu />
          </div>
          <LogoWithName name={siteConfig.name} href="/" />
        </div>

        <div className="hidden md:flex gap-5">
          <Link href="/account" className="flex items-center gap-2">
            <User />
            <p>Sign in</p>
          </Link>
          <Link href="/account" className="flex items-center gap-2">
            <List />
            <p>Projects</p>
          </Link>
          <Link href="/account" className="flex items-center gap-2">
            <ImageIcon />
            <p>Photos</p>
          </Link>
          <Cart />
        </div>

        <MobileNav />
      </div>

      <div className="hidden md:block mt-5">
        <NavMenu />
      </div>
    </header>
  );
}
