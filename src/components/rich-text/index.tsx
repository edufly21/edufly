"use client";

import React from "react";

import { CustomRenderers, Serialize } from "./serialize";

export const RichText: React.FC<{
  content: any;
  customRenderers?: CustomRenderers;
}> = ({ content, customRenderers }) => {
  if (!content) {
    return null;
  }

  return (
    <div>
      <Serialize content={content} customRenderers={customRenderers} />
    </div>
  );
};
