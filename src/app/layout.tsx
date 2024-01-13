import type { Metadata, Viewport } from "next";

import NextTopLoader from "nextjs-toploader";

// import { Providers as TRPCProviders } from "../contexts/trpc-providers";
import { Toaster } from "@/components/ui/sonner";

import { ThemeProvider } from "@/contexts/theme-provider";

import { siteConfig } from "@/config/site";
import TailwindIndicator from "@/components/shared/TaillwindcssIndicator";
import { cn } from "@/lib/utils/shadcn-ui";
import "@/styles/globals.css";
import { inter, sansita } from "./ui/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "gifts",
    "gifts kenys",
    "Nairobi",
    "Photo album",
    "buy gift in Kenya",
  ],
  authors: [
    {
      name: "Abdurezak Farah",
      url: "https://www.cabdirisaaq.com.",
    },
  ],
  creator: "Cabdirisaaq",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@awelrisak",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffa552" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          inter.variable,
          sansita.variable
        )}
      >
        <TailwindIndicator />
        <main className="relative min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <NextTopLoader
            color="#f97316"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          <Toaster position="top-center" richColors />
          <TailwindIndicator />
        </main>
      </body>
    </html>
  );
}
