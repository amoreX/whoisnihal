import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="font-medium pt-12 mb-0 animate-blur" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-heading-accent text-xl border-b-2 animate-blur border-accent w-fit font-medium pb-2 mt-8 mb-3"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-text-primary w-fit pb-1 font-medium mt-8 mb-3"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => (
    <p className="text-text-secondary leading-snug animate-blur" {...props} />
  ),
  ol: (props: ListProps) => <ol className="text-text-secondary" {...props} />,
  ul: (props: ListProps) => (
    <ul
      className="text-text-secondary animate-blur space-y-4 w-full"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "hover:text-accent hover:underline !w-full items-center gap-2 inline group relative text-text-secondary";
    if (href?.startsWith("/")) {
      console.log(href);
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return (
      <code
        className="bg-background border border-border-custom px-2 py-1 rounded text-sm font-mono text-text-primary"
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  },
  pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="bg-background border border-border-custom p-4 rounded-lg overflow-x-auto text-sm font-mono text-text-primary my-4"
      {...props}
    >
      {children}
    </pre>
  ),
  table: ({ children, ...props }: ComponentPropsWithoutRef<"table">) => (
    <div className="overflow-x-auto my-6">
      <table
        className="w-full border-collapse border border-border-custom text-text-secondary"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: ComponentPropsWithoutRef<"thead">) => (
    <thead className="bg-background" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: ComponentPropsWithoutRef<"tbody">) => (
    <tbody {...props}>{children}</tbody>
  ),
  tr: ({ children, ...props }: ComponentPropsWithoutRef<"tr">) => (
    <tr className="border-b border-border-custom" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }: ComponentPropsWithoutRef<"th">) => (
    <th
      className="border border-border-custom px-4 py-3 text-left font-medium text-text-primary bg-work-bg-hover"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: ComponentPropsWithoutRef<"td">) => (
    <td className="border border-border-custom px-4 py-3" {...props}>
      {children}
    </td>
  ),
  hr: ({ ...props }: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-8 border-border-custom" {...props} />
  ),
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-border-custom text-text-secondary">
        <thead className="bg-background">
          <tr>
            {data.headers.map((header, index) => (
              <th
                key={index}
                className="border border-border-custom px-4 py-3 text-left font-medium text-text-primary bg-work-bg-hover"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index} className="border-b border-border-custom">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border border-border-custom px-4 py-3"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-border-custom pl-4 text-text-muted"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
