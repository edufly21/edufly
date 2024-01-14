import Image from "next/image"
import Link from "next/link"
import {getPayloadClient} from "@/get-payload"
import Moment from "@/components/shared/moment";
export const metadata = {
  title: "Blog",
}

export default async function BlogPage() {
  const payload = await getPayloadClient()
  const { docs: blogs } = await payload.find({
    collection: "blogs",
    depth: 1,
  });

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blogs
          </h1>
          <p className="text-xl text-muted-foreground">
            Grab a comfy seat! Our blogs are like a chat with a friend—casual, fun, and full of interesting stuff. Enjoy the read!
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {blogs?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className="group relative flex flex-col space-y-2"
            >
              {blog.image && (
                <Image
                  src={(blog.blogImage as Media).url}
                  alt={blog.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-extrabold">{blog.title}</h2>
              
                <p className="line-clamp-4 text-muted-foreground">{blog.description}</p>
              
              
                <p className="text-sm text-muted-foreground">
                  <Moment format="MMMM Do, YYYY" date={blog.createdAt}/>
                </p>
              
              <Link href={blog.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No blogs published.</p>
      )}
    </div>
  )
}
