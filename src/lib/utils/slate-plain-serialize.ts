import { Node, Descendant } from "slate";

export const serialize = (nodes: any): string => {
  if (!nodes) return "";
  return nodes.map((n: Descendant) => Node.string(n)).join("\n");
};
