import { getAllBlogs } from "@/lib/blog";
import Link from "next/link";
import React from "react";

const BlogPosts = async () => {
  const posts = await getAllBlogs();

  return (
    <div className="flex flex-col gap-1">
      {posts.map((post) => {
        return (
          <Link
            href={"/blog/" + post.slug}
            key={post.slug}
            className="w-full py-2 cursor-pointer flex justify-between group relative items-center"
          >
            <div className="absolute group-focus-visible:border-accent group-focus-visible:opacity-100 z-10 bg-border/20 w-[calc(100%+20px)] h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-sm border border-border opacity-0 group-hover:opacity-100 transition-all duration-0"></div>
            <div className="z-40 w-full flex sm:flex-row flex-col justify-between size-full items-start sm:items-center">
              <div className="font-medium flex gap-2 sm:whitespace-nowrap">
                {post.title}{" "}
                <div className="text-work-meta hidden sm:flex">
                  {post.desc.slice(0, 30)}...
                </div>
              </div>
              <div className="text-work-meta font-medium shrink-0">
                {post.date}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogPosts;
