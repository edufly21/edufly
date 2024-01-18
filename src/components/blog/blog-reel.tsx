"use client";

import Blog from "@/components/blog/blog-card";
import { trpc } from "@/trpc/client";
import { Blog as IBlog } from "@/types/payload-types";
import Link from "next/link";
import { type Where as Query } from "payload/types";

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
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
          {title && (
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>

        {link ? (
          <Link
            href={link.href}
            className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block"
          >
            {link.text} <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : null}
      </div>

      <div className="relative">
        <div className="mt-6 flex items-center w-full">
          <div className="w-full grid  gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
            {map.map((blog, i) => (
              <Card key={`product-${i}`} blog={blog} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsReel;
