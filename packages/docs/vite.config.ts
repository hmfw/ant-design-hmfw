import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItPrism from 'markdown-it-prism'
import MarkdownItAnchor from 'markdown-it-anchor'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    Markdown({
      markdownItOptions: { html: true, linkify: true },
      markdownItSetup(md) {
        md.use(MarkdownItPrism)
        md.use(MarkdownItAnchor, {
          permalink: false,
          slugify: (s: string) =>
            s.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
        })
      },
    }),
    vue({ include: [/\.vue$/, /\.md$/] }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      'ant-design-hmfw': path.resolve(__dirname, '../components/src/index.ts'),
    },
  },
})
