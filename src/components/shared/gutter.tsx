import { cn } from "@/lib/utils";
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
          "pl-4": left,
          "pr-4": right,
          "pt-4": top,
          "pb-4": bottom,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
