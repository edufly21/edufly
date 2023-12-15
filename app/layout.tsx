import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'

import '@/app/globals.css'
import Header from "@/components/shared/Header";
import { inter } from "./fonts";



export const metadata: Metadata = {
  title: process.env.BRANDNAME as string,
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* from vercel */}
       <SpeedInsights />
       <Analytics />
       {/* ----- */}

       <Header />

       <main>
       {children}
       </main>

      </body>
    </html>
  )
}
