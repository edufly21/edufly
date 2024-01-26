"use client"
import {useState, useEffect} from "react"
import Link from 'next/link';
import Image from 'next/image';
import { Blog, Media } from "@/types/payload-types"
import Moment from "../shared/moment";
import { Skeleton } from "@/components/ui/skeleton"
import { getBlogReadTime } from "@/lib/utils";
interface BlogMinuCardProps {
  blog: Blog;
  index?: number;
}


const BlogMiniCard = ({ 
   blog,
   index
    }: BlogMinuCardProps) => {

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

  if (!blog || !isVisible) return <Skeleton />;
  
   return  (     
    <div className="w-full flex justify-between items-center hover:bg-muted">
      <Image
        src={`${(blog.blogImage as Media).url}`}
        alt={blog.title}
        height = {80}
        height = {80}
        className="w-20 h-20 rounded-lg"
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
         <p className="text-lg sm:text-xl font-bold text-foreground line-clamp-2">
             { blog.title }
         </p>
       
        <div className="text-sm text-muted-foreground flex gap-2">
        <p>
          <Moment format="MMMM Do, YYYY" date={blog.createdAt} />
        </p>
        &#x2022;
        <p>
          {getBlogReadTime(blog)}
        </p>
      </div>
      </div>
    </div>  
);
    }

  

function Skeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-20 w-20 rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}


export default BlogMiniCard;
