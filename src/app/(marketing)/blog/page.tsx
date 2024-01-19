import BlogsReel from "@/components/blog/blog-reel";
import PageHeading from "@/components/shared/page-heading";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-4xl pb-7 pt-4 lg:pb-10 lg:pt-7">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <PageHeading
          heading="Blogs"
          text=" Grab a comfy seat! Our blogs are like a chat with a friend—casual,
            fun, and full of interesting stuff. Enjoy the read!"
          classes={{
            textClass: "text-balane max-w-2xl",
          }}
        />
      </div>
      <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
      <BlogsReel />
    </div>
  );
}
