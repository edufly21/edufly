import { Blog } from "@/types/payload-types";
import { CollectionBeforeChangeHook, CollectionConfig } from "payload/types";
import { admin } from "../access/admin";
import { anyone } from "../access/anyone";
import Alert from "../blocks/alert";
import Content from "../blocks/content";
import Quote from "../blocks/quote";

const addSlug: CollectionBeforeChangeHook = async ({ data, operation }) => {
  if (operation === "update") return data;

  const blog = data as Blog;
  const slug = slugify(blog.BlogMeta.title);

  return {
    ...data,
    slug,
  };
};

export const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: {
    // defaultColumns: ["title", "author", "category", "tags", "status"],
    useAsTitle: "title",
  },
  hooks: {
    beforeChange: [addSlug],
  },
  access: {
    read: anyone,
    create: admin,
    update: admin,
    delete: admin,
  },
  fields: [
    {
      name: "BlogMeta",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          minLength: 20,
          maxLength: 100,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          minLength: 40,
          maxLength: 160,
        },
        {
          name: "keywords",
          label: "Keywords",
          type: "text",
        },
      ],
    },

    {
      type: "tabs",
      tabs: [
        {
          label: "Post Media",
          fields: [
            {
              name: "postImage",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          label: "Post Layout",
          fields: [
            {
              name: "layout",
              type: "blocks",
              blocks: [Quote, Content, Alert],
            },
          ],
        },
      ],
    },
    // {
    //   name: "status",
    //   type: "select",
    //   options: [
    //     {
    //       value: "draft",
    //       label: "Draft",
    //     },
    //     {
    //       value: "published",
    //       label: "Published",
    //     },
    //   ],
    //   defaultValue: "draft",
    //   admin: {
    //     position: "sidebar",
    //   },
    // },
    {
      name: "publishedDate",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      admin: {
        position: "sidebar",
      },
    },
    // {
    //   name: "category",
    //   type: "relationship",
    //   relationTo: "categories",
    //   admin: {
    //     position: "sidebar",
    //   },
    // },
    // {
    //   name: "tags",
    //   type: "relationship",
    //   relationTo: "tags",
    //   hasMany: true,
    //   admin: {
    //     position: "sidebar",
    //   },
    // },
  ],
};
function slugify(title: any) {
  throw new Error("Function not implemented.");
}
