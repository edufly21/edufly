import BlogsReel from "@/components/blog/blog-reel";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-4xl py-6 lg:py-10">
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
      <hr className="my-8 bg-slate-300 dark:bg-slate-800" />
      <BlogsReel />
    </div>
  );
}
