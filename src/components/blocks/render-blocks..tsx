import React from "react";

import * as components from ".";
import { cn } from "@/lib/utils/shadcn-ui";
import { Blog } from "@/types/payload-types";

type Props = {
  layout: Blog["layout"];
  className?: string;
};

const RenderBlocks = ({ layout, className }: Props) => {
  if (!layout) return null;

  return (
    <div className={cn(className)}>
      {layout.map((block, i) => {
        const Block: any = components[block.blockType];

        if (Block) {
          return (
            <section key={i}>
              <Block {...block} />
            </section>
          );
        }

        return null;
      })}
    </div>
  );
};

export default RenderBlocks;
