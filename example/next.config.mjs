import remarkGfm from "remark-gfm";
import remarkPrism from "remark-prism";
import rehypeHighlight from "rehype-highlight";
import withMDX from "@next/mdx";

// const withMDX = require("@next/mdx")({
//   extension: /\.mdx?$/,
//   options: {
//     // If you use remark-gfm, you'll need to use next.config.mjs
//     // as the package is ESM only
//     // https://github.com/remarkjs/remark-gfm#install
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     // providerImportSource: "@mdx-js/react",
//   },
// });
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
//   // Optionally, add any other Next.js config below
//   reactStrictMode: true,
//   experimental: {
//     appDir: true,
//     mdxRs: false,
//   },
// };

// module.exports = withMDX(nextConfig);
// import addMdx from "@next/mdx";

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  experimental: {
    appDir: true,
  },
};

// addMdx(nextConfig, {
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     // providerImportSource: "@mdx-js/react",
//   },
// });
export default withMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkGfm, remarkPrism],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})(nextConfig);
