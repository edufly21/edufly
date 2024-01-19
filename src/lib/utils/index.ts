import { Blog } from '@/types/payload-types';
import { Node } from 'slate'
import readingTime from "reading-time";

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "BDT";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "USD", notation = "compact" } = options;

  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}

export const serialize = (nodes: any): string => {
  if (!nodes) return ''
  return nodes.map((n: any)=> Node.string(n)).join('\n')
}


type ContentBlock = {
  content?:
    | {
        [k: string]: unknown;
      }[]
    | null
    | undefined;
  id?: string | null | undefined;
  blockName?: string | null | undefined;
  blockType: "content";
};

export function layoutContentsToText(layout: Blog["layout"]): string {
   const contentBlocks = layout?.filter(
     (block) => block.blockType === "content"
   ) as ContentBlock[];

   const contents = contentBlocks
     .map((block) => block.content)
     .flat()
     .filter((content) => content !== null && content !== undefined) as {
     [k: string]: unknown;
   }[];
   return  serialize(contents);
}

export function getBlogReadTime(blog: Blog): string {
    const plainText = layoutContentsToText(blog.layout);

    return readingTime(plainText).text;
}