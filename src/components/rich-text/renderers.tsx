import * as React from "react";
import { cn } from "@/lib/utils/shadcn-ui";

import { CustomRenderers } from "./serialize";

export const renderers: CustomRenderers = {
  h1: ({ node, Serialize }) => (
    <h1 className={cn("mt-2 scroll-m-20 text-4xl font-bold tracking-tight")}>
      <Serialize content={node.children} />
    </h1>
  ),
  h2: ({ node, Serialize }) => (
    <h2
      className={cn(
        "mt-8 scroll-m-20 pb-1 text-2xl font-semibold tracking-tight"
      )}
    >
      <Serialize content={node.children} />
    </h2>
  ),
  h3: ({ node, Serialize }) => (
    <h3
      className={cn("mt-8 scroll-m-20 text-xl font-semibold tracking-tight")}
    >
      <Serialize content={node.children} />
    </h3>
  ),
  h4: ({ node, Serialize }) => (
    <h4 className={cn("mt-8 scroll-m-20 text-lg font-semibold tracking-tight")}>
      <Serialize content={node.children} />
    </h4>
  ),
  h5: ({ node, Serialize }) => (
    <h5 className={cn("mt-8 scroll-m-20 text-base font-semibold tracking-tight")}>
      <Serialize content={node.children} />
    </h5>
  ),
  h6: ({ node, Serialize }) => (
    <h6
      className={cn("mt-8 scroll-m-20 text-base font-semibold tracking-tight")}
    >
      <Serialize content={node.children} />
    </h6>
  ),
  // a: ({ node, Serialize }) => (
  //   <a className={cn("font-medium underline underline-offset-4")}>
  //     <Serialize content={node.children} />
  //   </a>
  // ),

  p: ({ node, Serialize }) => (
    <p className={cn("leading-7 text-red-500 mt-6")}>
      <Serialize content={node.children} />
    </p>
  ),

  ul: ({ node, Serialize }) => (
    <ul className={cn("my-6 ml-6 list-disc")}>
      <Serialize content={node.children} />
    </ul>
  ),
  ol: ({ node, Serialize }) => (
    <ol className={cn("my-6 ml-6 list-decimal")}>
      <Serialize content={node.children} />
    </ol>
  ),

  li: ({ node, Serialize }) => (
    <li className={cn("mt-2")}>
      <Serialize content={node.children} />
    </li>
  ),

  blockquote: ({ node, Serialize }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 text-red-400 pl-6 italic [&>*]:text-muted-foreground"
      )}
    >
      <Serialize content={node.children} />
    </blockquote>
  ),

  hr: (props) => <hr className="my-4 md:my-8" />,
  code: ({ node, Serialize }) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm"
      )}
    >
      <Serialize content={node.children} />
    </code>
  ),

  // img: ({
  //   node, Serialize
  // }) => (
  //   // eslint-disable-next-line @next/next/no-img-element
  //   <img className={cn("rounded-md border", className)} alt={alt} />
  // )

  //   table: ({ className, ...props }: React.HTMLAttribute<

  //HTMLTableElement>) => (
  //     <div className="my-6 w-full overflow-y-auto">
  //       <table className={cn("w-full", className)} />
  //     </div

  //   ),
  //   tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
  //     <tr
  //       className={cn("m-0 border-t p-0 even:bg-muted", className)}
  //
  //     >

  //   ),
  //   th: ({ className, ...props }) => (
  //     <th
  //       className={cn(
  //         "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
  //         className
  //       )}
  //
  //     >

  //   ),
  //   td: ({ className, ...props }) => (
  //     <td
  //       className={cn(
  //         "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
  //         className
  //       )}
  //
  //     >

  //   ),
  //   pre: ({ className, ...props }) => (
  //     <pre
  //       className={cn(
  //         "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
  //         className
  //       )}
  //
  //     >

  //   ),
};
