import RenderBlocks from "@/components/blocks/render-blocks.";
import { ChevronLeft } from "@/components/icons";
import Moment from "@/components/shared/moment";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getPayloadClient } from "@/get-payload";
import { cn } from "@/lib/utils/shadcn-ui";
import { Media, User } from "@/types/payload-types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Plain from "slate-plain-serializer";

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
      images: [`${(blog.blogImage as Media).url}`],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: `${(blog.blogImage as Media).url}`,
      creator: (blog.author as User).name,
    },
    keywords: blog.keywords?.split(","),
  };
}

export default async function page({ params: { slug } }: PageProps) {
  const payload = await getPayloadClient();

  const { docs: blogs } = await payload.find({
    collection: "blogs",
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          status: {
            equals: "published",
          },
        },
      ],
    },
    depth: 1,
  });

  const blog = blogs[0];

  if (!blog) {
    notFound();
  }

  const contents = blog.layout?.filter(
    (block) => block.blockType === "content"
  );

  const plainText = contents
    ?.map((content) => Plain.serialize(content))
    .join(" ");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${slug}`,
    },
    headline: blog.title,
    description: blog.description,
    image: `${siteConfig.url}/media/${(blog.blogImage as Media).filename}`,
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt,
    author: {
      "@type": "Person",
      name: (blog.author as User).name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: "/logo.svg",
      },
    },
    keywords: blog.keywords?.split(","),
    articleBody: plainText,
  };

  return (
    <article className="container relative max-w-3xl mx-auto py-6 lg:py-10">
      {plainText}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="blog-jsonld"
      />
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        See all blogs
      </Link>

      <div className="mb-8">
        <p className="block text-sm text-muted-foreground">
          Published on <Moment format="MMMM Do, YYYY" date={blog.createdAt} />
        </p>

        <h1
          className={cn(
            "mt-2 scroll-m-20 text-4xl lg:text-5xl font-bold tracking-tight"
          )}
        >
          {blog.title}
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          By: {(blog.author as User).name}
        </p>
      </div>

      <Image
        src={`${(blog.blogImage as Media).url}`}
        alt={blog.title}
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
        priority
      />

      <RenderBlocks layout={blog.layout} />

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          See all blogs
        </Link>
      </div>
    </article>
  );
}
