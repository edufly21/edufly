import { CollectionConfig } from "payload/types";

import { admin } from "../access/admin";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: isAdmin,
    delete: isAdmin,
    update: isAdmin,
  },
  admin: {
    hidden: ({ user }) => user.role !== "admin",
  },
  upload: {
    staticURL: "/media",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};
