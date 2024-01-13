import { VerificationEmailHtml } from "../../components/email/verification-email";
import { Access, CollectionConfig } from "payload/types";
import { anyone } from "../access/anyone";
import { admin } from "../access/admin";
import { adminsAndUser } from "../access/admin-and-user";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({ token, user }) => {
        return VerificationEmailHtml({
          name: user.name as string,
          href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`,
        });
      },
    },
  },
  access: {
    read: adminsAndUser,
    create: anyone,
    update: admin,
    delete: admin,
  },
  admin: {
    hidden: ({ user }) => user.role !== "admin",
    defaultColumns: ["name", "email", "created_at"],
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "blogs",
      label: "Blogs",
      admin: {
        condition: () => false,
      },
      type: "relationship",
      relationTo: "blogs",
      hasMany: true,
    },
    {
      name: "products",
      label: "Products",
      admin: {
        condition: () => false,
      },
      type: "relationship",
      relationTo: "products",
      hasMany: true,
    },
    // {
    //   name: "product_files",
    //   label: "Product files",
    //   admin: {
    //     condition: () => false,
    //   },
    //   type: "relationship",
    //   relationTo: "product_files",
    //   hasMany: true,
    // },
    {
      name: "role",
      defaultValue: "user",
      required: true,

      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
};
