import { slateEditor } from "@payloadcms/richtext-slate";
import { Block } from "payload/types";

const Content: Block = {
  slug: "content",
  fields: [
    {
      name: "content",
      type: "richText",
      editor: slateEditor({
        admin: {
          elements: [
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "textAlign",
            "ul",
            "ol",
            "blockquote",
            "indent",
            "link",
            "upload",
            "relationship",
          ],
        },
      }),
    },
  ],
};
export default Content;
