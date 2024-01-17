import { Blog } from "@/types/payload-types";
import { slateEditor } from "@payloadcms/richtext-slate";
import { nanoid } from "nanoid";
import {
  CollectionAfterChangeHook,
  CollectionBeforeChangeHook,
  CollectionConfig,
} from "payload/types";
import slugify from "slugify";
import { admin } from "../access/admin";
import { anyone } from "../access/anyone";
import { BLOG_CATEGORIES } from "../constants";

const addSlug: CollectionBeforeChangeHook = async ({ data, operation }) => {
  if (operation === "update") return data;

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

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    defaultColumns: ["title", "author", "category", "tags", "status"],
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeChange: [addSlug, addAuthor],
    afterChange: [syncUser],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
    },

    {
      type: "tabs",
      tabs: [
        {
          label: "Post Media",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          label: "Post Content",
          fields: [
            {
              name: "content",
              type: "richText",
              editor: slateEditor({
                admin: {
                  elements: [
                    "indent",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "blockquote",
                    "ul",
                    "ol",
                    "link",
                  ],
                },
              }),
            },
          ],
        },
      ],
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
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
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
        condition: () => false,
      },
    },
   
    {
      name: "category",
      type: "select",
      options: BLOG_CATEGORIES,
      required: true,
      defaultValue: "general",
    },
  ],
};
export default Posts;
