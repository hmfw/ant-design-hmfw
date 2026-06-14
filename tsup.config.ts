import { defineConfig } from 'tsup'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig([
  // ESM + CJS 构建 —— 多入口 + splitting，保留每个组件的模块边界，
  // 使下游 bundler 能按需 tree-shake（import { Button } 只打进 Button）。
  {
    entry: ['components/index.ts', 'components/*/index.ts'],
    format: ['esm', 'cjs'],
    // 类型只为 barrel 入口生成（用户从包名导入，exports 将类型指向 dist/index.d.ts）；
    // 为全部 75 个入口生成 DTS 会 OOM 且无必要。
    dts: { entry: 'components/index.ts' },
    external: ['vue'],
    treeshake: true,
    splitting: true,
    clean: true,
    sourcemap: true,
    outDir: 'dist',
    minify: false, // 保持可读性，让用户的构建工具处理压缩
    esbuildOptions(options) {
      options.jsx = 'automatic'
      options.jsxImportSource = 'vue'
      options.chunkNames = '_chunks/[name]-[hash]'
      options.banner = {
        js: '/* ant-design-hmfw | MIT License | https://github.com/hmfw/ant-design-hmfw */',
      }
    },
    onSuccess: async () => {
      // 将 components/style.css 中的 @import 内联成单个可用的 dist/style.css
      const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'))
      const entryCss = resolve(__dirname, 'components/style.css')
      const rawList = readFileSync(entryCss, 'utf-8')
      const importRe = /@import\s+['"]\.\/([^'"]+)['"];?/g
      let match: RegExpExecArray | null
      const parts: string[] = []
      while ((match = importRe.exec(rawList)) !== null) {
        const cssPath = resolve(__dirname, 'components', match[1])
        try {
          parts.push(`/* ${match[1]} */\n` + readFileSync(cssPath, 'utf-8'))
        } catch {
          console.warn(`⚠️  样式文件缺失，已跳过: ${match[1]}`)
        }
      }
      const banner = `/*!\n * ant-design-hmfw v${pkg.version}\n * MIT License\n * https://github.com/hmfw/ant-design-hmfw\n */\n`
      writeFileSync(resolve(__dirname, 'dist/style.css'), banner + parts.join('\n'))

      console.log(`✅ ESM/CJS build completed! 内联 ${parts.length} 个组件样式 → dist/style.css`)
    },
  },
  // UMD 构建 (用于 CDN 和 <script> 标签)
  {
    entry: {
      'ant-design-hmfw.umd': 'components/index.ts',
    },
    format: ['iife'],
    globalName: 'AntDesignHmfw',
    external: ['vue'],
    outDir: 'dist',
    outExtension: () => ({ js: '.js' }),
    // UMD 直接被 CDN/<script> 加载，必须压缩；ESM/CJS 保持可读交给用户构建工具
    minify: true,
    sourcemap: true,
    esbuildOptions(options) {
      options.jsx = 'automatic'
      options.jsxImportSource = 'vue'
      options.define = {
        'import.meta.env.DEV': 'false',
        'import.meta.env.PROD': 'true',
      }
      options.banner = {
        js: '/* ant-design-hmfw (UMD) | MIT License | https://github.com/hmfw/ant-design-hmfw */',
      }
    },
    onSuccess: async () => {
      console.log('✅ UMD build completed successfully!')
    },
  },
])
