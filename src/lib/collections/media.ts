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
    staticURL: `https://${process.env.AWS_S3_BUCKET_NAME!}.s3.${process.env.AWS_S3_REGION!}.amazonaws.com`,
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};
