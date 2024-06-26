import VerifyEmail from "@/components/auth/verify-email";
import type { Metadata } from "next";
import Image from "next/image";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export const metadata: Metadata = {
  title: "Verify Email",
};

export default function VerifyEmailPage({ searchParams }: PageProps) {
  const token = searchParams.token;
  const toEmail = searchParams.to;

  return (
    <div className="p-7 md:p-11 bg-background relative flex  flex-col items-center justify-center rounded-lg ">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {token && typeof token === "string" ? (
          <div className="grid gap-6">
            {/* <VerifyEmail token={token} /> */}
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div className="relative mb-4 h-60 w-60 text-muted-foreground">
              <Image
                src="/assets/Illustrations/email-sent.svg"
                fill
                alt="email sent image"
              />
            </div>

            <h3 className="font-bold text-2xl">Check your email</h3>

            {toEmail ? (
              <p className="text-muted-foreground text-center">
                We&apos;ve sent a verification link to &nbsp;
                <span className="font-semibold">{toEmail}</span>.
              </p>
            ) : (
              <p className="text-muted-foreground text-center">
                We&apos;ve sent a verification link to your email.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
