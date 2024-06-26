import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { cn } from "@/lib/utils/shadcn-ui";


type Node = {
  type: string;
  text?: string;
  value?: {
    url: string;
    alt: string;
  };
  children?: Node[];
  url?: string;
  [key: string]: unknown;
  newTab?: boolean;
};

export type CustomRenderers = {
  [key: string]: (args: {
    node: Node;
    Serialize: SerializeFunction;
    index: number;
  }) => JSX.Element; // eslint-disable-line
};

type SerializeFunction = React.FC<{
  content?: Node[];
  customRenderers?: CustomRenderers;
}>;

const isText = (value: any): boolean =>
  typeof value === "object" && value !== null && typeof value.text === "string";

export const Serialize: SerializeFunction = ({ content, customRenderers }) => {
  return (
    <Fragment>
      {content?.map((node, i) => {
        if (isText(node)) {
          let text = (
            <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
          );

          if (node.bold) {
            text = <strong key={i}>{text}</strong>;
          }

          if (node.code) {
            text = <code key={i} className={cn(
        "font-mono text-sm text-muted-foreground"
      )}>{text}</code>;
          }

          if (node.italic) {
            text = <em key={i}>{text}</em>;
          }

          if (node.underline) {
            text = (
              <span style={{ textDecoration: "underline" }} key={i}>
                {text}
              </span>
            );
            // text = <Highlight key={i} {...node} />;
          }

          if (node.strikethrough) {
            text = (
              <span style={{ textDecoration: "line-through" }} key={i}>
                {text}
              </span>
            );
          }

          return <Fragment key={i}>{text}</Fragment>;
        }

        if (!node) {
          return null;
        }

        if (
          customRenderers &&
          customRenderers[node.type] &&
          typeof customRenderers[node.type] === "function"
        ) {
          return customRenderers[node.type]({ node, Serialize, index: i });
        }

        switch (node.type) {
          case "br":
            return <br key={i} />;
          case "h1":
            return (
              <h1 key={i}>
                <Serialize
                  content={node.children}
                  customRenderers={customRenderers}
                />
              </h1>
            );
          case "h2":
            return (
              <h2
                key={i}
                className={cn(
                  "mt-10 scroll-m-20 pb-1 text-2xl font-semibold tracking-tight"
                )}
              >
                <Serialize
                  content={node.children}
                  customRenderers={customRenderers}
                />
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className={cn(
                  "mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                )}
              >
                <Serialize
                  content={node.children}
                  customRenderers={customRenderers}
                />
              </h3>
            );
          case "h4":
            return (
              <h4
                key={i}
                className={cn(
                  "mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
                )}
              >
                <Serialize
                  content={node.children}
                  customRenderers={customRenderers}
                />
              </h4>
            );
          case "h5":
            return (
              <h5
                key={i}
                className={cn(
                  "mt-8 scroll-m-20 text-base font-semibold tracking-tight"
                )}
              >
                <Serialize
                  content={node.children}
                  customRenderers={customRenderers}
                />
              </h5>
            );
          case "h6":
            return (
              <h6
                key={i}
                className={cn(
                  "mt-8 scroll-m-20 text-base font-semibold tracking-tight"
                )}
              >
                <Serialize
                  content={node.children}
                  customRenderers={customRenderers}
                />
              </h6>
            );
          case "blockquote":
            return (
              <blockquote
                key={i}
                className={cn(
                  "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground"
                )}
              >
                <Serialize
                  content={node.children}
                  customRenderers={customRenderers}
                />
              </blockquote>
            );
          case "ul":
            return (
              <ul key={i} className={cn("my-6 ml-6 list-disc")}>
                <Serialize
                  content={node.children}
                  customRenderers={customRenderers}
                />
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className={cn("my-6 ml-6 list-decimal")}>
                <Serialize
                  content={node.children}
                  customRenderers={customRenderers}
                />
              </ol>
            );
          case "li":
            return (
              <li key={i} className={cn("mt-2")}>
                <Serialize
                  content={node.children}
                  customRenderers={customRenderers}
                />
              </li>
            );
          
        case "link":
            return (
               <a
                key={i}
                //type={node.linkType === "internal" ? "reference" : "custom"}
                href={node.url}
              // reference={node.doc as Reference}
                 target={node?.newTab ? "_blank" : undefined}
                 className={cn("font-medium underline underline-offset-4")}
               >
                 <Serialize
                  content={node.children}
                  customRenderers={customRenderers}
                />
               </a>
             );

          // case "upload": {
          //   return <RichTextUpload key={i} node={node} />;
          // }

          // case "label":
          //   return (
          //     <Label key={i}>
          //       <Serialize
          //         content={node.children}
          //         customRenderers={customRenderers}
          //       />
          //     </Label>
          //   );

          // case "large-body": {
          //   return (
          //     <LargeBody key={i}>
          //       <Serialize
          //         content={node.children}
          //         customRenderers={customRenderers}
          //       />
          //     </LargeBody>
          //   );
          // }

          // case "video": {
          //   const { source, id: videoID } = node;

          //   if (source === "vimeo" || source === "youtube") {
          //     return <Video key={i} platform={source} id={videoID as string} />;
          //   }

          //   return null;
          // }

          default:
            return (
              <p key={i} className={cn("leading-7 mt-6")}>
                <Serialize
                  content={node.children}
                  customRenderers={customRenderers}
                />
              </p>
            );
        }
      })}
    </Fragment>
  );
};
