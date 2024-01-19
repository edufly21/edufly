import { cn } from "@/lib/utils/shadcn-ui";
import React from "react";

interface Props {
  heading: string;
  text?: string;
  classes?: {
    rootClass?: string;
    headingClass?: string;
    textClass?: string;
  };
}

export default function PageHeading({ heading, text, classes }: Props) {
  return (
    <div className={cn("flex-1 space-y-3.5", classes?.rootClass)}>
      <h1
        className={cn(
          "inline-block font-bold text-4xl tracking-tight lg:text-5xl",
          classes?.headingClass
        )}
      >
        {heading}
      </h1>
      {text && (
        <p className={cn("text-lg text-muted-foreground", classes?.textClass)}>
          {text}
        </p>
      )}
    </div>
  );
}
