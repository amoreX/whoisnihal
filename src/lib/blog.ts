import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";

export function getAllBlogs(){
    const folder = path.join(process.cwd(), "blog");
    const blogs = readdirSync(folder);
    const data : {content: string, date: string, slug:string, title:string }[] = blogs.map((blogFile) => {
        return getBlogBySlug(blogFile.replace(/\.mdx?$/, ''))
    })
    return data;
}

export function getBlogBySlug(slug:string){
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