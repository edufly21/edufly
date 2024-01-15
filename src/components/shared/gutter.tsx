import { cn } from "@/lib/utils/shadcn-ui";
import React, { PropsWithChildren } from "react";

interface GutterProps {
  className?: string;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  all?: boolean;
}

export default function Gutter({
  className,
  left,
  right,
  top,
  bottom,
  all,
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
          "p-4 md:p-6 lg:p-8": all,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
