import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import "@/styles/globals.css";
import Header from "@/components/site/Header";
import { inter } from "./fonts";
import { siteConfig } from "@/config/site";
import  TailwindIndicator  from "@/components/shared/TaillwindcssIndicator";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
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
      url: "https://cabdirisaaq.com.com",
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
    images: siteConfig.ogImage,
    creator: "@awelrisak",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SpeedInsights />
        <Analytics />

        <Header />
        <TailwindIndicator />
        <main>{children}</main>
      </body>
    </html>
  );
}
