import React from "react";
import { getPayloadClient } from "@/get-payload";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Media, User } from "@/types/payload-types";
import { siteConfig } from "@/config/site";
import RenderBlocks from "@/components/blocks/render-blocks.";
import Gutter from "@/components/shared/gutter";
import { cn } from "@/lib/utils/shadcn-ui";
import Moment from "@/components/shared/moment";
import { Separator } from "@/components/ui/separator";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const payload = await getPayloadClient();

  const { docs: blogs } = await payload.find({
    collection: "blogs",
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 1,
  });

  const blog = blogs[0];

  if (!blog) {
    notFound();
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `siteConfig.url/blog/${slug}`,
      title: blog.title,
      description: blog.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: `/media/${(blog.blogImage as Media).filename}`,
      creator: (blog.author as User).name,
    },
  };
}

export default async function page({ params: { slug } }: PageProps) {
  const payload = await getPayloadClient();

  const { docs: blogs } = await payload.find({
    collection: "blogs",
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 1,
  });

  const blog = blogs[0];

  if (!blog) {
    notFound();
  }

  return (
    <div className="text-xl max-w-2xl ">
      <Gutter bottom>
        <div className="mb-3 space-y-6">
          <h1
            className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}
          >
            {blog.title}
          </h1>
          <div className="flex h-5 items-center space-x-2">
            <p className="text-sm text-muted-foreground">{(blog.author as User).name}</p>
            <Separator orientation="vertical" />
            <Moment format="MMMM Do, YYYY" className="text-sm text-muted-foreground">
              {blog.createdAt}
            </Moment>
          </div>
        </div>
        <RenderBlocks layout={blog.layout} />
      </Gutter>
    </div>
  );
}
