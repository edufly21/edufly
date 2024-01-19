import React from "react";
import NavMenu from "@/components/marketing/NavMenu";

import { siteConfig } from "@/config/site";
import LogoWithName from "../shared/logo-with-name";
import { Menu } from "./menu";
import MobileNav from "./mobile-nav";
import Link from "next/link";
import { User, List, Image as ImageIcon } from "../icons";
import Cart from "./cart";
import MainNav from "./main-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background px-4 md:px-6 py-2.5 md:py-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Menu />
          <LogoWithName name={siteConfig.name} href="/" />
        </div>
        <MainNav />
        <MobileNav />
      </div>
      <div className="hidden md:block mt-5">
        <NavMenu />
      </div>
    </header>
  );
}
