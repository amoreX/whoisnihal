import { getBlogBySlug } from "@/lib/blog";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import Mdx from "./mdx";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const blog = await getBlogBySlug(slug);
  console.log(blog);
  return (
    <div className="flex flex-col w-full h-fit">
      <Link href={"/blog"} className="border text-sm border-border/70 hover:bg-border/20 cursor-pointer hover:border-border w-fit px-4 py-2 rounded-sm mb-4 flex gap-2 items-center ">
        <ArrowLeftIcon /> Back to all blogs
      </Link>
      <div className="text-4xl max-w-3/4 mb-4">{blog.title}</div>
      <div className="text-lg text-text-muted mb-8">{blog.date}</div>
      <Mdx content={blog.content} />
    </div>
  );
};

export default page;
