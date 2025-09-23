import type { NextConfig } from "next";
import createMDX from '@next/mdx'
const nextConfig: NextConfig = {
  pageExtensions: ["tsx", "mdx", "ts"],
  
  /* config options here */
  experimental : {
    mdxRs: true,
    optimizePackageImports: ["@phosphor-icons/react"]
  }
};

const withMdx = createMDX({
  
})

export default withMdx(nextConfig);
