import { getAllBlogs } from "@/lib/blog";
import Link from "next/link";
import React from "react";

const page = async () => {
  const blogs = await getAllBlogs();
  return (
    <div className="py-12 flex flex-col">
      <div className="flex flex-col gap-6">
        {blogs.map((blog) => (
          <Link
            href={"/blog/" + blog.slug}
            key={blog.slug}
            className="group"
          >
            <div className="flex flex-col gap-1">
              <div className="text-zinc-400 text-xs">{blog.date}</div>
              <div className="text-zinc-200 group-hover:text-white transition-colors">
                {blog.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
