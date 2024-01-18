import RenderBlocks from "@/components/blocks/render-blocks.";
import BlogsReel from "@/components/blog/blog-reel";
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
import { serialize } from "@/lib/utils"
import readingTime from "reading-time"
interface PageProps {
  params: {
    slug: string;
  };
}
type ContentBlock = {
  content?:
    | {
        [k: string]: unknown;
      }[]
    | null
    | undefined;
  id?: string | null | undefined;
  blockName?: string | null | undefined;
  blockType: "content";
};

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
    keywords: blog.keywords.split(", "),
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
   const contentBlocks = blog.layout?.filter(
    (block) => block.blockType === "content"
   ) as ContentBlock[];

   const contents = contentBlocks
     .map((block) => block.content)
     .flat()
     .filter((content) => content !== null && content !== undefined) as {
     [k: string]: unknown;
   }[];
   const plainText = serialize(contents);
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
     keywords: blog.keywords.split(", "),
    articleBody: plainText || blog.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="blog-jsonld"
      />
      <section className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex flex-col">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hidden xl:inline-flex gap-2 items-cente self-end"
            )}
          >
            <ChevronLeft className="h-4 w-4" />
            See all blogs
          </Link>
        </div>
        <article className="container relative max-w-3xl mx-auto py-6 lg:py-10">
          <div className="mb-8">
            <p className="block text-sm text-muted-foreground">
              Published on{" "}
              <Moment format="MMMM Do, YYYY" date={blog.createdAt} />{" "}
              &#x2022; {readingTime(plainText).text} 
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
            <Link
              href="/blog"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              See all blogs
            </Link>
          </div>
        </article>
         <div className="">
          <BlogsReel
            title="Related Blogs"
            link={{ href: "/blog", text: "See more" }}
            category={blog.category}
            currentBlogId={blog.id}
          />
        </div> 
      </section>
    </>
  );
}
