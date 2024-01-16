import { getPayloadClient } from "../../get-payload";
import { type Where as Query } from "payload/types";
import * as z from "zod";
import { publicProcedure, router } from "../trpc";
import { Blog } from "../../types/payload-types";

export const blogRouter = router({
  infiniteBlogs: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).optional(),
        cursor: z.number().optional(),
        query: z
          .custom<Query>((val) => {
            return val;
          })
          .optional(),
        tags: z
          .custom<Blog["tags"]>((val) => {
            return val;
          })
          .optional(),
        sort: z.string().optional(),
        currentBlogId: z.string().optional(),
      })
    )

    .query(async ({ input }) => {
      const { query, cursor, limit = 15, sort, currentBlogId, tags } = input;

      const page = cursor || 1;

      const payload = await getPayloadClient();

      const {
        docs: items,
        hasNextPage,
        nextPage,
      } = await payload.find({
        collection: "blogs",
        where: {
          status: {
            equals: "published",
          },
          id: {
            not_equals: currentBlogId,
          },
          //TODO: WHERE ANY OF TAGS ARE IN TAGS
          ...query,
        },
        sort: sort || "-createdAt",
        limit,
        page,
      });

      //TEMPORARY
      const filteredItems = items.filter(
        (item) => item.tags?.some((tag) => tags?.includes(tag)) || false
      );

      return {
        items: tags ? filteredItems : items,
        nextPage: hasNextPage ? nextPage : null,
      };
    }),
});
