"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Blog, Media } from "@/types/payload-types";
import Moment from "../shared/moment";
import Link from "next/link";
import { CardPlaceholder } from "../skeletons";
import { cn } from "@/lib/utils/shadcn-ui";
import { getBlogReadTime } from "@/lib/utils";

interface BlogProps {
  blog: Blog | null;
  index?: number;
  rootClass?: string;
  titleClass?: string;
  bodyClass?: string;
  imgClass?: string;
}

export default function Blog({
  blog,
  index,
  rootClass,
  titleClass,
  bodyClass,
  imgClass,
}: BlogProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsVisible(true);
      },
      index ? index * 75 : 0
    );

    return () => clearTimeout(timer);
  }, [index]);

  if (!blog || !isVisible) return <CardPlaceholder />;

  const { title, description, createdAt, slug, blogImage } = blog;

  return (
    <article
      className={cn("w-fit group relative flex flex-col space-y-2", rootClass)}
    >
      <Image
        src={`${(blogImage as Media).url}`}
        alt={title}
        width={804}
        height={452}
        className={cn("rounded-md border bg-muted transition-color ", imgClass)}
        priority={index ? index < 2 : false}
      />

      <h2 className={cn("text-2xl font-extrabold", titleClass)}>{title}</h2>
      <p className={cn("line-clamp-4 text-muted-foreground", bodyClass)}>
        {description}
      </p>
      <div>
        <p className="text-sm text-muted-foreground">
          <Moment format="MMMM Do, YYYY" date={createdAt} /> &#x2022;{" "}
          {getBlogReadTime(blog)}
        </p>
      </div>

      <Link href={`/blog/${slug}`} className="absolute inset-0">
        <span className="sr-only">read the blog.</span>
      </Link>
    </article>
  );
}
