import { Block } from "payload/types";

const Alert: Block = {
  slug: "alert",
  fields: [
    {
      name: "type",
      type: "select",
      defaultValue: "default",
      required: true,
      options: [
        {
          value: "default",
          label: "Default",
        },
        {
          value: "info",
          label: "Info",
        },
        {
          value: "success",
          label: "Success",
        },
        {
          value: "warning",
          label: "Warning",
        },
        {
          value: "destructive",
          label: "Destructive",
        },
      ],
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
    {
      name: "title",
      type: "text",
    },
  ],
};
export default Alert;
