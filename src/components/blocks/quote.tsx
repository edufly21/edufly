import { cn } from "@/lib/utils/shadcn-ui";
import React from "react";

export default function QuoteBlock({
  quote,
  author,
}: {
  quote: string;
  author?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "quote";
}) {
  return (
    <div>
      <blockquote className={cn("mt-6 border-l-2 pl-6 italic ")}>
        <p>{quote}</p>
        <footer className={cn("mt-2")}>
          <cite className={cn("font-semibold")}>{author}</cite>
        </footer>
      </blockquote>
    </div>
  );
}
