import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://ctxnn.github.io',
  markdown: {
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },
  vite: {
    define: {
      'process.env.FAVICON_URL': JSON.stringify('https://i.pinimg.com/564x/6f/e1/d0/6fe1d074ab0c081b5291d17ff88e3f03.jpg')
    }
  }
});
