import Blog from "@/components/blog/blog-card";
import { getPayloadClient } from "@/get-payload";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const payload = await getPayloadClient();

  const { docs: blogs } = await payload.find({
    collection: "blogs",
    where: {
      status: {
        equals: "published",
      },
    },
    depth: 1,
  });

  if (!blogs?.length) {
    return (
      <p className="container mx-auto bg-muted-foreground text-2xl text-center">
        No blogs published yet.
      </p>
    );
  }

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-bold text-4xl tracking-tight lg:text-5xl">
            Blogs
          </h1>
          <p className="text-lg text-muted-foreground">
            Grab a comfy seat! Our blogs are like a chat with a friend—casual,
            fun, and full of interesting stuff. Enjoy the read!
          </p>
        </div>
      </div>
      <hr className="my-8 bg-slate-300 dark:bg-slate-700" />
      {blogs?.length && (
        <div className="grid gap-10 sm:grid-cols-2">
          {blogs.map((blog, index) => (
            <Blog key={blog.id} index={index} {...blog} />
          ))}
        </div>
      )}
    </div>
  );
}
