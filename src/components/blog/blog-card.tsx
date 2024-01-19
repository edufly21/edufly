"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Blog, Media } from "@/types/payload-types";
import Moment from "../shared/moment";
import Link from "next/link";
import { CardPlaceholder } from "../skeletons";

interface BlogProps {
  blog: Blog | null;
  index?: number;
}

export default function Blog({ blog, index }: BlogProps) {
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
    <article className="w-fit max-w-xs group relative flex flex-col space-y-2">
      <Image
        src={`${(blogImage as Media).url}`}
        alt={title}
        width={804}
        height={452}
        className="rounded-md border bg-muted transition-colors"
        priority={index ? index < 2 : false}
      />
    
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <p className="line-clamp-4 text-muted-foreground">{description}</p>
      <p className="text-sm text-muted-foreground">
        <Moment format="MMMM Do, YYYY" date={createdAt} />
      </p>
      <Link href={`/blog/${slug}`} className="absolute inset-0">
        <span className="sr-only">read the blog.</span>
      </Link>
    </article>
  );
}
