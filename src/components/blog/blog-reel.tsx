"use client";

import Blog from "@/components/blog/blog-card";
import { trpc } from "@/trpc/client";
import { Blog as IBlog } from "@/types/payload-types";
import Link from "next/link";
import { type Where as Query } from "payload/types";
import {buttonVariants} from "@/components/ui/button"
interface BlogReelProps {
  title?: string;
  subtitle?: string;
  link?: {
    href: string;
    text: string;
  };
  query?: Query;
  limit?: number;
  sort?: "asc" | "desc";
  Card?: React.FC<{ blog: IBlog | null; index?: number }>;
  currentBlogId?: IBlog["id"];
  category?: IBlog["category"];
}

const FALLBACK_LIMIT = 4;

const BlogsReel = (props: BlogReelProps) => {
  const {
    title,
    subtitle,
    link,
    query,
    limit = FALLBACK_LIMIT,
    sort,
    Card = Blog,
    currentBlogId,
    category,
  } = props;

  const {
    data: queryResults,
    isLoading,
    isError,
  } = trpc.blog.infiniteBlogs.useInfiniteQuery(
    {
      query,
      limit,
      sort,
      currentBlogId,
      category,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );

  if (isError) return <p>Error</p>;

  const blogs = queryResults?.pages.flatMap((page) => page.items);

  let map: (IBlog | null)[] = [];
  if (blogs && blogs.length) {
    map = blogs;
  } else if (isLoading) {
    map = new Array<null>(limit).fill(null);
  }

  if (!map.length) {
    return null;
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="max-w-2xl px-4 lg:max-w-3xl lg:px-0">
          {title && (
            <h2 className="text-xl font-bold sm:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>

        {link && (
          <Link
            href={link.href}
            className={buttonVariants({variant: "ghost"})}
          >
            {link.text} <span aria-hidden="true" className="ml-2">&rarr;</span>
          </Link>
        )}
      </div>

      <div className="relative">
        <div className="mt-6 flex items-center w-full">
          <div className="w-full flex gap-x-4 gap-y-10 sm:gap-x-6 md:gap-y-10 lg:gap-x-8">
            {map.map((blog, i) => (
              <Card key={`Blog-${i}`} blog={blog} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsReel;
