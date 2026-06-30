import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItPrism from 'markdown-it-prism'
import MarkdownItAnchor from 'markdown-it-anchor'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { autoDemoImports } from './docs/plugins/auto-demo-imports'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: path.resolve(__dirname, 'docs'),
  base: process.env.NODE_ENV === 'production' ? '/ant-design-hmfw/' : '/',
  plugins: [
    autoDemoImports(),
    Markdown({
      markdownItOptions: { html: true, linkify: true },
      markdownItSetup(md) {
        md.use(MarkdownItPrism)
        md.use(MarkdownItAnchor, {
          permalink: false,
          slugify: (s: string) =>
            s
              .toLowerCase()
              .replace(/\s+/g, '-')
              // 保留 ASCII 字母数字、连字符、下划线，以及中日韩等 Unicode 字母（\p{L} 需 u 标志）
              .replace(/[^\p{L}\p{N}_-]/gu, ''),
        })
      },
    }),
    vue({ include: [/\.vue$/, /\.md$/] }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@hmfw/ant-design': path.resolve(__dirname, 'components/index.ts'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'docs-dist'),
    emptyOutDir: true,
  },
})
