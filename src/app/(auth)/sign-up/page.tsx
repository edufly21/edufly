import Link from "next/link";

import SignUpForm from "@/components/auth/signup-form";

import LogoWithName from "@/components/shared/LogoWithName";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Join to Laascaanood Public Library",
};

export default async function Signup() {
  return (
    <div className="p-5 h-fit w-fit  bg-background  shadow-lg rounded-lg border-border">
      <div className="flex flex-wrap items-center gap-11 mb-9 justify-between">
        <LogoWithName name={siteConfig.name} href="/" />

        <div className="flex items-baseline gap-2">
          <p className="text-sm tracking-tight text-muted-foreground font-light">
            Already have an account?
          </p>
          <Link
            href="/sign-in"
            className="text-[13px] font-normal flex items-center gap-1"
          >
            Sign in <span aria-hidden={true}>&rarr;</span>
          </Link>
        </div>
      </div>

      <section className="mb-7">
        <h1 className=" mb-1 text-2xl font-semibold">Create Your Account</h1>
        <p className="text-neutral-900 font-light">
          to continue to{" "}
          <strong className="font-[500]">{siteConfig.name}.</strong>
        </p>
      </section>

      <SignUpForm />
    </div>
  );
}
