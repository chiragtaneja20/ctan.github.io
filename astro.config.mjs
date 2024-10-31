import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://yourusername.github.io',
  output: 'static',  // Explicitly set static output
  markdown: {
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },
  trailingSlash: 'always', // Helps with GitHub Pages routing
  build: {
    format: 'file' // Ensures proper file-based routing
  }
});
