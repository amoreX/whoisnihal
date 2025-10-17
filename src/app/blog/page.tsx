import { getAllBlogs } from "@/lib/blog";
import Link from "next/link";
import React from "react";

const page = async () => {
  const blogs = await getAllBlogs();
  console.log(blogs);
  return (
    <div className="pt-4 flex flex-col gap-1">
      {blogs.map((blog) => {
        return (
          <Link
          href={"/blog/" + blog.slug}
            key={blog.slug}
            className="w-full h-[40px] cursor-pointer flex justify-between group relative items-center"
          >
            <div className="absolute group-focus-visible:border-accent group-focus-visible:opacity-100 z-10 bg-border/20 w-[calc(100%+20px)] h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-sm border border-border opacity-0 group-hover:opacity-100 transition-all duration-0" ></div>
            <div className="z-40 flex justify-between size-full items-center">
              <div className="font-medium">{blog.title}</div>
              <div className="text-foreground/80 font-medium">{blog.date}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default page;
