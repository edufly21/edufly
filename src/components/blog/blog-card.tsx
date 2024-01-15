import React from "react";
import Image from "next/image";
import { Blog, Media } from "@/types/payload-types";
import Moment from "../shared/moment";
import Link from "next/link";

interface Props {
  index: number;
}

export default function Blog({
  title,
  blogImage,
  description,
  createdAt,
  slug,
  index,
}: Props & Blog) {
  return (
    <article className="group relative flex flex-col space-y-2">
      <Image
        src={`${(blogImage as Media).url}`}
        alt={title}
        width={804}
        height={452}
        className="rounded-md border bg-muted transition-colors"
        priority={index <= 1}
      />
      {`${(blogImage as Media).url}`}
      <h2 className="text-2xl font-extrabold">{title}</h2>

      <p className="line-clamp-4 text-muted-foreground">{description}</p>

      <p className="text-sm text-muted-foreground">
        <Moment format="MMMM Do, YYYY" date={createdAt} />
      </p>

      <Link href={`/blog/${slug}`} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  );
}
