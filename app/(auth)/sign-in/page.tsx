import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

import SignInForm from "@/components/auth/signin-form";
import LogoWithName from "@/components/shared/LogoWithName";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to Laascaanood Public Library",
};

export default async function SignIn() {
  return (
    <div className="p-5 h-fit  shadow-lg rounded-lg border ">
      <div className="flex items-center gap-11 mb-9 justify-between">
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
        <p className="text-neutral-900 font-light">
          to continue to&nbsp;
          <strong className="font-[500]">{siteConfig.name}.</strong>
        </p>
      </section>

      <SignInForm />
    </div>
  );
}
