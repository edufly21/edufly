import { CollectionConfig } from "payload/types";

import { admin } from "../access/admin";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: admin,
    delete: admin,
    update: admin,
  },

  admin: {
    hidden: ({ user }) => user.role !== "admin",
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
    ],
    mimeTypes: ["image/*"],
    adminThumbnail: "thumbnail",
  },

  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};
