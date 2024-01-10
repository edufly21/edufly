import React from "react";
import Header from "@/components/marketing/Header";

interface Props {
  children: React.ReactNode;
}
export default function MarkeringLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-background space-y-4">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
