import React from "react";

interface Props {
  heading: string;
  text?: string;
}

export default function PageHeading({ heading, text }: Props) {
  return (
    <div className="flex-1 space-y-3.5">
      <h1 className="inline-block font-bold text-4xl tracking-tight lg:text-5xl">
        {heading}
      </h1>
      {text && (
        <p className="text-lg text-muted-foreground">
          {text}
        </p>
      )}
    </div>
  );
}
