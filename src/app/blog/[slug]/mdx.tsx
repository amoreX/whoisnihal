import React, { ComponentPropsWithoutRef } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/mdx-components";

const Mdx = ({ content }: { content: string }) => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote
        source={content}
        components={{
          ...components,
          h2: (props: ComponentPropsWithoutRef<"h1">) => (
            <h2
              className="text-heading text-xl   w-fit font-medium pb-2 mt-8 mb-3"
              {...props}
            />
          ),
          code: (props: ComponentPropsWithoutRef<"code">) => (
            <code
              className="border border-border px-2 py-1 rounded text-sm font-mono text-text-primary"
              {...props}
            />
          ),
           pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
              <pre
                className="bg-border/20 border border-border p-4 rounded-sm overflow-x-auto text-sm font-mono text-text-primary my-4"
                {...props}
              >
                {children}
              </pre>
            ),
        }}
      />
    </div>
  );
};

export default Mdx;
