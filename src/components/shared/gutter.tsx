import { cn } from "@/lib/utils/shadcn-ui";
import React, { PropsWithChildren } from "react";

interface GutterProps {
  className?: string;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
}

export default function Gutter({
  className,
  left = true,
  right = true,
  top,
  bottom,
  children,
}: GutterProps & PropsWithChildren) {
  return (
    <div
      className={cn(
        {
          "pl-4 md:pl-6 lg:pl-8": left,
          "pr-4 md:pr-6 lg:pr-8": right,
          "pt-4 md:pt-6 lg:pt-8": top,
          "pb-4 md:pb-6 lg:pb-8": bottom,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
