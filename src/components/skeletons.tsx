import { cn } from "@/lib/utils/shadcn-ui";
import React from "react";
import { Skeleton } from "./ui/skeleton";

interface SkeletonProps {
  repeat?: number;
  className?: string;
}

export default function Skeletons({ repeat = 1, className }: SkeletonProps) {
  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {[...Array(repeat)].map((_, index) => (
        <ProductPlaceholder key={index} />
      ))}
    </div>
  );
}

const ProductPlaceholder = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl">
        <Skeleton className="h-full w-full" />
      </div>
      <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
      <Skeleton className="mt-2 w-16 h-4 rounded-lg" />
      <Skeleton className="mt-2 w-12 h-4 rounded-lg" />
    </div>
  );
};
