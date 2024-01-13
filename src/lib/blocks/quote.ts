import { Block } from "payload/types";

const Quote: Block = {
  slug: "quote",

  fields: [
    {
      name: "quote",
      type: "textarea",
      required: true,
    },
    {
      name: "author",
      type: "text",
    },
  ],
};
export default Quote;
