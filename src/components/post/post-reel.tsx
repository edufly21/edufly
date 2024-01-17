"use client";

import Post from "@/components/post/post-card";
import { trpc } from "@/trpc/client";
import { Post as IPost } from "@/types/payload-types";
import Link from "next/link";
import { type Where as Query } from "payload/types";
import { buttonVariants } from "../ui/button";

interface PostsReelProps {
  title?: string;
  subtitle?: string;
  link?: {
    href: string;
    text: string;
  };
  query?: Query;
  limit?: number;
  sort?: string;
  Card?: React.FC<{ post: IPost | null; index?: number }>;
  currentBlogId?: IPost["id"];
  tags?: IPost["tags"];
}

const FALLBACK_LIMIT = 4;

const PostsReel = (props: PostsReelProps) => {
  const {
    title,
    subtitle,
    link,
    query,
    limit = FALLBACK_LIMIT,
    sort,
    Card = Post,
    currentBlogId,
    tags,
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
      tags,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );

  if (isError) return <p>Error</p>;

  const posts = queryResults?.pages.flatMap((page) => page.items);

  let map: (IPost | null)[] = [];
  if (posts && posts.length) {
    map = posts;
  } else if (isLoading) {
    map = new Array<null>(limit).fill(null);
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

        {link && (
          <Link
            href={link.href}
            className={buttonVariants({variant: "ghost"})}
          >
            {link.text} <span aria-hidden="true">&rarr;</span>
          </Link>
        ) }
      </div>

      <div className="relative">
        <div className="mt-6 flex items-center w-full">
          <div className="w-full grid  gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
            {map.map((post, i) => (
              <Card key={`Post-${i}`} post={post} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostsReel;
