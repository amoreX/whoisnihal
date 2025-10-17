"use server"
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";


export async function getAllBlogs(){
    const folder = path.join(process.cwd(), "blog");
    const blogs = readdirSync(folder);
    const data : {content: string, date: string, slug:string, title:string }[] = await Promise.all(blogs.map((blogFile) => {
        return getBlogBySlug(blogFile.replace(".mdx", ""));
    }))
    return data;
}

export async function getBlogBySlug(slug:string){
    const folder = path.join(process.cwd(), "blog");
    const content = readFileContent(folder + `/${slug}.mdx`);
    return {
        slug,
        date: content.data.date || null,
        title: content.data.title || null,

        content: content.content
    }
}

function readFileContent(filePath: string){
    const rawContent = readFileSync(filePath, "utf-8");
    const parsedContent = matter(rawContent)
    return parsedContent;
}