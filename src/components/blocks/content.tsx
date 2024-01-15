"use client";
import { RichText } from "../rich-text";

export default function ContentBlock({
  content,
}: {
  content?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "content";
}) {
  return <RichText content={content} />;
}
