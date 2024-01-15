import { CollectionConfig } from "payload/types";

import { admin } from "../access/admin";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: admin,
    read: admin,
    delete: admin,
    update: admin,
  },

  admin: {
    hidden: ({ user }) => user.role !== "admin",
  },

    upload: {
    staticURL: "/media",
    mimeTypes: ["image/*"],
  },

};
