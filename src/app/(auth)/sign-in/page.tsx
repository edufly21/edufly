import Link from "next/link";

import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

import SignInForm from "@/components/auth/signin-form";
import LogoWithName from "@/components/shared/logo-with-name";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to Laascaanood Public Library",
};

export default async function SignIn() {
  return (
    <div className="p-5 h-fit bg-background shadow-lg rounded-lg border-border ">
      <div className="flex flex-wrap items-center gap-11 mb-9 justify-between">
        <LogoWithName name={siteConfig.name} href="/" />

        <div className="flex items-baseline gap-2">
          <p className="text-sm tracking-tight font-light">New customer?</p>
          <Link
            href="/sign-up"
            className="text-[13px] font-normal flex items-center gap-1 hover:underline hover:underline-2 hover:leading-7"
          >
            Sign up <span aria-hidden={true}>&rarr;</span>
          </Link>
        </div>
      </div>

      <section className="mb-9">
        <h1 className=" mb-1 text-2xl font-semibold">Sign in</h1>
        <p className="text-muted-foreground font-light">
          to continue to&nbsp;
          <strong className="font-[500]">{siteConfig.name}.</strong>
        </p>
      </section>

      <SignInForm />
    </div>
  );
}
