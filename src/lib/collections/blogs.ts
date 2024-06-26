import { Blog } from "@/types/payload-types";
import {
  CollectionAfterChangeHook,
  CollectionBeforeChangeHook,
  CollectionConfig,
} from "payload/types";
import slugify from "slugify";
import { admin } from "../access/admin";
import { anyone } from "../access/anyone";
import Alert from "../blocks/alert";
import Content from "../blocks/content";
import { nanoid } from "nanoid";
import { BLOG_CATEGORIES } from "../constants";

const addSlug: CollectionBeforeChangeHook = async ({ data, operation }) => {
  const blog = data as Blog;
  const slug = slugify(blog.title, {
    remove: /[*+~.()'"!:@]/g,
    strict: true,
    lower: true,
  });

  return {
    ...data,
    slug: `${slug}-${nanoid(4)}`,
  };
};

const addAuthor: CollectionBeforeChangeHook = async ({ req, data }) => {
  const user = req.user;

  return { ...data, author: user.id };
};

const syncUser: CollectionAfterChangeHook<Blog> = async ({ req, doc }) => {
  const fullUser = await req.payload.findByID({
    collection: "users",
    id: req.user.id,
  });

  if (fullUser && typeof fullUser === "object") {
    const { blogs } = fullUser;

    const allIDs = [
      ...(blogs?.map((blog) => (typeof blog === "object" ? blog.id : blog)) ||
        []),
    ];

    const createdBlogsIDs = allIDs.filter(
      (id, index) => allIDs.indexOf(id) === index
    );

    const dataToUpdate = [...createdBlogsIDs, doc.id];

    await req.payload.update({
      collection: "users",
      id: fullUser.id,
      data: {
        blogs: dataToUpdate,
      },
    });
  }
};

export const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "createdAt"],
  },
  hooks: {
    beforeChange: [addSlug, addAuthor],
    afterChange: [syncUser],
  },
  access: {
    read: anyone,
    create: admin,
    update: admin,
    delete: admin,
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      admin: {
        description:
          "Title should be catchy, descriptive, and not too long: just around 20-100 characters.",
      },
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
      admin: {
        description:
          "Description should be short, descriptive, and not too long: just around 40-160 characters.",
      },
    },
    {
      name: "keywords",
      label: "Keywords",
      type: "text",
      admin: {
        description:
          "Keywords help search engines understand what your blog is about. Separate keywords with a comma.",
      },

      required: true,
    },
    {
      name: "category",
      label: "Category",
      type: "select",
      admin: {
        description:
          "Tags relate your blog to other blogs on the same topic. Separate tags with a comma.",
        position: "sidebar",
      },
      options: BLOG_CATEGORIES,
      required: true,
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          value: "draft",
          label: "Draft",
        },
        {
          value: "published",
          label: "Published",
        },
      ],
      defaultValue: "published",
      admin: {
        position: "sidebar",
      },
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Blog Media",
          fields: [
            {
              name: "blogImage",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          label: "Blog Layout",
          fields: [
            {
              name: "layout",
              type: "blocks",
              blocks: [Content, Alert],
            },
          ],
        },
      ],
    },

    {
      name: "slug",
      type: "text",
      required: true,
      admin: {
        condition: () => false,
      },
      index: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
    // {
  ],
};
